
import BaseRepository from 'App/AdonisCore/BaseRepository'
import Todo from "App/Models/Todo";

export default class TodoRepository extends BaseRepository {
  constructor () {
    super()
    this.model = Todo
  }
}
