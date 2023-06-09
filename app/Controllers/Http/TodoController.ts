import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpContext from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

import CreateTodoValidator from 'App/Validators/Todo/CreateTodoValidator'
import ListTodoValidator from 'App/Validators/Todo/ListTodoValidator'
import ListTodoService from 'App/Services/Todo/ListTodoService'
import Todo from "App/Models/Todo";

export default class TodoController {
  public async testUseAsyncLocalStorage() {
    const ctx = HttpContext.get()
    console.log('testUseAsyncLocalStorage: ', ctx);
  }

  public async index({ auth, request, response}:HttpContextContract) {
    const listTodoService = Application.container.make(ListTodoService)
    const dataRequest = await request.validate(ListTodoValidator)
    const todos = await listTodoService.setHandler(auth.user).setData(dataRequest).handle()
    return response.status(201).json(todos)
  }

  public async store({ auth, request, response}:HttpContextContract) {
    const createTodoService = Application.container.resolveBinding('Todo/CreateTodoService')
    const dataRequest = await request.validate(CreateTodoValidator)
    const todo = await createTodoService.setHandler(auth.user).setData(dataRequest).handle()
    return response.status(201).json(todo)
  }

  public async update({request, response, params}:HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)
    todo.title = request.input('title')
    todo.save()

    return response.status(202).send(todo)
  }
}
