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
    criteria.adds(this.allowFilters())
    criteria.add(new LessThenCreatedAtScope())
    criteria.adds(this.allowOrders())
    criteria.adds(this.allowRelations())
    const todos = await todoRepository.applyCriterias(criteria)
    return todos
  }

  allowFilters() {
    let filters = Array<FilterCriteria>();
    if (this.data.title) {
      filters.push(new TitleFilter('title', this.data.title))
    }

    return filters
  }
}
