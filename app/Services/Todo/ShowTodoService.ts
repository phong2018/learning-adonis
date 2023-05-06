import Todo from "App/Models/Todo";
import BaseService from 'App/AdonisCore/BaseService'
import TodoRepository from 'App/Repositories/TodoRepository'
import Application from '@ioc:Adonis/Core/Application'


export default class ShowTodoService extends BaseService {
  constructor () {
    super()
    this.repository = Application.container.make(TodoRepository)
  }

  public async handle(): Promise<Todo> {
    this.repository.pushCriteria(this.getRelationsCriteria(this.repository.allowRelations()))
    return this.repository.find(this.model)
  }
}
