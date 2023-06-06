import Todo from "App/Models/Todo";
import BaseService from 'App/AdonisCore/BaseService'
import TodoRepository from 'App/Repositories/TodoRepository'
import Application from '@ioc:Adonis/Core/Application'
import FilterCriteria from "App/AdonisCore/Criteria/FilterCriteria";


export default class ListTodoService extends BaseService {
  constructor () {
    super()
    this.repository = Application.container.make(TodoRepository)
  }

  public async handle(): Promise<Todo[]> {
    this.repository.pushScopeQuery(function(query) {
      return query.where('id', '>', 2)
    })
    this.repository.pushCriteria(this.getFiltersCriteria(this.repository.allowFilters()))
    this.repository.pushCriteria(this.getOrdersCriteria(this.repository.allowOrders()))
    this.repository.pushCriteria(this.getRelationsCriteria(this.repository.allowRelations()))

    return this.data.per_page ? this.repository.paginate(this.data?.page, this.data.per_page) : this.repository.all()
  }

  getFiltersCriteria(allowFilters: string[] = []) {
    let filtersCriteria = Array<FilterCriteria>();
    if (this.data.title && allowFilters.includes('title')) {
      filtersCriteria.push(new FilterCriteria('title', this.data.title))
    }

    return filtersCriteria
  }
}
