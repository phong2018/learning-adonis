import Todo from "App/Models/Todo";
import BaseService from 'App/AdonisCore/BaseService'
import TodoRepository from 'App/Repositories/TodoRepository'
import FilterCriteria from "App/AdonisCore/Criterias/FilterCriteria";
import CriteriaComposite from "App/AdonisCore/Criterias/CriteriaComposite";
import TitleFilter from "App/Criterias/Filters/TitleFilter";
import LessThenCreatedAtScope from "App/Criterias/Scopes/Todo/LessThenCreatedAtScope";

export default class ListTodoService extends BaseService {
  public async handle(): Promise<Todo> {
    const criteria = new CriteriaComposite()
    const todoRepository = new TodoRepository()
    criteria.adds(this.addFilters(todoRepository.allowFilters()))
    criteria.add(new LessThenCreatedAtScope())
    criteria.adds(this.addOrders(todoRepository.allowOrders()))
    criteria.adds(this.addRelations(todoRepository.allowRelations()))
    const todos = await todoRepository.applyCriterias(criteria)
    return todos
  }

  addFilters(allowFilters: string[] = []) {
    let filters = Array<FilterCriteria>();
    if (this.data.title && allowFilters.includes('title')) {
      filters.push(new TitleFilter('title', this.data.title))
    }

    return filters
  }
}
