import Todo from "App/Models/Todo";
import BaseService from 'App/AdonisCore/BaseService'
import TodoRepository from 'App/Repositories/TodoRepository'

export default class CreateTodoService extends BaseService {
  public async handle(): Promise<Todo> {
    const todoRepository = new TodoRepository()
    return await todoRepository.create({ ...this.data, 'user_id': this.handler.id })
  }
}
