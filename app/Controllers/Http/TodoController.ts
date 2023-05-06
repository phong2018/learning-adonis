import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpContext from '@ioc:Adonis/Core/HttpContext'

import CreateTodoValidator from 'App/Validators/Todo/CreateTodoValidator'
import ListTodoValidator from 'App/Validators/Todo/ListTodoValidator'
import CreateTodoService from 'App/Services/Todo/CreateTodoService'
import ListTodoService from 'App/Services/Todo/ListTodoService'
import Todo from "App/Models/Todo";
import ShowTodoValidator from 'App/Validators/Todo/ShowTodoValidator'
import ShowTodoService from 'App/Services/Todo/ShowTodoService'

export default class TodoController {
  public async testUseAsyncLocalStorage() {
    const ctx = HttpContext.get()
    console.log('testUseAsyncLocalStorage: ', ctx);
  }

  public async index({ auth, request, response}:HttpContextContract) {
    const dataRequest = await request.validate(ListTodoValidator)
    const todos = await (new ListTodoService()).setHandler(auth.user).setData(dataRequest).handle()
    return response.status(200).json(todos)
  }

  public async show({ auth, request, params, response}:HttpContextContract) {
    const dataRequest = await request.validate(ShowTodoValidator)
    const todos = await (new ShowTodoService()).setHandler(auth.user).setData(dataRequest).setModel(Number(params.id)).handle()
    return response.status(201).json(todos)
  }

  public async store({ auth, request, response}:HttpContextContract) {
    const dataRequest = await request.validate(CreateTodoValidator)
    const todo = await (new CreateTodoService()).setHandler(auth.user).setData(dataRequest).handle()
    return response.status(201).json(todo)
  }

  public async update({request, response, params}:HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)
    todo.title = request.input('title')
    todo.save()

    return response.status(202).send(todo)
  }
}
