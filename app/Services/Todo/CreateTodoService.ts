import Todo from "App/Models/Todo";
import BaseService from 'App/AdonisCore/BaseService'

export default class CreateTodoService extends BaseService {
  public async handle(data: any): Promise<Todo> {
    const todo = await Todo.create(data)
    return todo
  }
}
