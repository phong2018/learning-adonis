
import BaseRepository from 'App/AdonisCore/BaseRepository'
import Todo from "App/Models/Todo";

export default class TodoRepository extends BaseRepository {
  constructor () {
    super(Todo)

  }

  allowRelations() {
    return [
      'user',
      'user.todos'
    ]
  }

  allowOrders() {
    return [
      'id',
      'title'
    ]
  }

  allowFilters() {
    return [
      'title'
    ]
  }
}
