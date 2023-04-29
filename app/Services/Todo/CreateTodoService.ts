import Todo from "App/Models/Todo";

export default class CreateTodoService {
  public async handle(data: any): Promise<Todo> {
    const todo = await Todo.create(data)
    return todo
  }
}
