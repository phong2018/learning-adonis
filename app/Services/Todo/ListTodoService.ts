import Todo from "App/Models/Todo";
import BaseService from 'App/AdonisCore/BaseService'
import TodoRepository from 'App/Repositories/TodoRepository'

// import User from "App/Models/User";
import ByAttribute from "App/Filters/ByAttribute";
import WithUser from "App/Filters/WithUser";
import OrderTodo from "App/Filters/OrderTodo";
import CriteriaComposite from "App/AdonisCore/Criteria/CriteriaComposite";


export default class ListTodoService extends BaseService {
  public async handle(): Promise<Todo> {


    // Create a composite criteria object and add the individual criteria objects
    const criteria = new CriteriaComposite()
    // criteria.add(new ByAttribute('id', 2))
    criteria.add(new ByAttribute('title', 'title3'))
    criteria.add(new OrderTodo('id', 'asc'))
    criteria.add(new WithUser('id', 'asc'))

    const todoRepository = new TodoRepository()
    // Apply the criteria to the list of users

    // const query = Todo.query();

    // let todos = await criteria.applyAllCriteria(query)

    const todos = await todoRepository.applyCriterias(criteria)

    // let  todos = Todo.query()
    // todos = todos.where('id', 1)
    // todos = todos.where('title', 'title3')
    return todos
    // const todoRepository = new TodoRepository()
    // return todoRepository.findAll()
  }
}
