import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpContext from '@ioc:Adonis/Core/HttpContext'
import CreateTodoValidator from 'App/Validators/Todo/CreateTodoValidator'
import CreateTodoService from 'App/Services/Todo/CreateTodoService'
import Todo from "App/Models/Todo";

export default class TodosController {
  public async testUseAsyncLocalStorage() {
    const ctx = HttpContext.get()
    console.log('testUseAsyncLocalStorage: ', ctx);
  }

  public async index() {
    const todos = await Todo.all()

    return todos
  }

  public async store({request, response}:HttpContextContract) {
    const data = await request.validate(CreateTodoValidator)
    const todo = await (new CreateTodoService()).handle(data)
    return response.status(201).json(todo)
  }

  public async update({request, response, params}:HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)
    todo.title = request.input('title')
    todo.save()

    return response.status(202).send(todo)
  }
}
