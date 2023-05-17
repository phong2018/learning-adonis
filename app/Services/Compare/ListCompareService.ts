import Compare from "App/Models/Compare";
import BaseService from 'App/AdonisCore/BaseService'
import CompareRepository from 'App/Repositories/CompareRepository'
import Application from '@ioc:Adonis/Core/Application'
import FilterCriteria from "App/AdonisCore/Criteria/FilterCriteria";

export default class ListCompareService extends BaseService {
  constructor() {
    super()
    this.repository = Application.container.make(CompareRepository)
  }

  public async handle(): Promise<Compare> {
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
