import Todo from "App/Models/Todo";
import BaseService from 'App/AdonisCore/BaseService'
import TodoRepository from 'App/Repositories/TodoRepository'

// import User from "App/Models/User";
import ByAttribute from "App/Filters/ByAttribute";
import CriteriaComposite from "App/AdonisCore/Criteria/CriteriaComposite";


export default class ListTodoService extends BaseService {
  public async handle(): Promise<Todo> {


    // Create a composite criteria object and add the individual criteria objects
    const criteria = new CriteriaComposite()
    criteria.add(new ByAttribute('title', 'titl'))
    const todoRepository = new TodoRepository()
    // Apply the criteria to the list of users
    // const todos = await criteria.apply(Todo.query())
    const todos = await todoRepository.applyCriteria(criteria);

    return todos
    // const todoRepository = new TodoRepository()
    // return todoRepository.findAll()
  }
}
