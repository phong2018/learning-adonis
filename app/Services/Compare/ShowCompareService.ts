import Compare from "App/Models/Compare";
import BaseService from 'App/AdonisCore/BaseService'
import CompareRepository from 'App/Repositories/CompareRepository'
import Application from '@ioc:Adonis/Core/Application'


export default class ShowCompareService extends BaseService {
  constructor () {
    super()
    this.repository = Application.container.make(CompareRepository)
  }

  public async handle(): Promise<Compare> {
    this.repository.pushCriteria(this.getRelationsCriteria(this.repository.allowRelations()))
    return this.repository.find(this.model)
  }
}
