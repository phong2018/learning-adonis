import Todo from "App/Models/Todo";
import BaseService from 'App/AdonisCore/BaseService'
import TodoRepository from 'App/Repositories/TodoRepository'

// import User from "App/Models/User";
import TitleFilter from "App/Criterias/Filters/TitleFilter";
import UserRelation from "App/Criterias/Relations/UserRelation";
import TitleOrder from "App/Criterias/Orders/TitleOrder";
import CriteriaComposite from "App/AdonisCore/Criterias/CriteriaComposite";


export default class ListTodoService extends BaseService {
  public async handle(): Promise<Todo> {
    const criteria = new CriteriaComposite()
    criteria.add(new TitleFilter('title', 'title2'))
    criteria.add(new TitleOrder('title', 'asc'))
    criteria.add(new UserRelation('user'))

    const todoRepository = new TodoRepository()
    const todos = await todoRepository.applyCriterias(criteria)
    return todos
  }
}
