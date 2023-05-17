
import { BaseRepository } from 'App/AdonisCore/BaseRepository'
import Compare from "App/Models/Compare";

export default class CompareRepository extends BaseRepository {
  constructor() {
    super(Compare)

  }

  allowRelations() {
    return [
      'products'
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
