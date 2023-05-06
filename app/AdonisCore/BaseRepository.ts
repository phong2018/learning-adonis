import RepositoryInterface from 'App/AdonisCore/Contracts/RepositoryInterface'
import { BaseRepositoryMixin } from 'App/AdonisCore/Mixins/BaseRepositoryMixin'

export default class BaseRepository extends BaseRepositoryMixin implements RepositoryInterface {
  public model
  public query

  constructor(Model)
  {
    super()
    this.model = Model
    this.rescueQuery()
  }

  async prepareQuery()
  {
    this.applyScopeQueries()
    this.applyCriteria()
  }

  async rescueQuery()
  {
    this.resetQuery();
    this.resetScope();
    this.resetCriteria();
  }

  async find(id: any, columns?: any[] = ['*']) {
    return this.model.findOrFail(id,columns)
  }

  async first(columns?: any[] = ['*']) {
    return this.model.first(columns)
  }

  async firstWhere(where: any, columns?: any[] = ['*']) {
    return [where, columns]
  }

  async firstOrFailWhere(where: any, columns?: any[] = ['*']) {
    return [where, columns]
  }

  async demochain() {
    return this.query.preload('user')
  }

  async allWith() {
    this.query = this.model.query()
    this.query.where('id', '>', 2)
    this.query = this.demochain()
    return this.query
  }

  async all(columns?: any[] = ['*']) {
    this.prepareQuery()
    const result = this.query.select(columns)
    this.rescueQuery()
    return result
  }

  async paginate(curr_page: number = 1, limit?: number, columns?: any[] = ['*']) {
    this.prepareQuery()
    const result = this.query.select(columns).paginate(curr_page,limit)
    this.rescueQuery()
    return result
  }

  async simplePaginate(limit?: number, columns?: any[] = ['*']) {
    return [limit, columns]
  }

  async findByField(field: string, value: any, columns?: any[] = ['*']) {
    return [field, value, columns]
  }

  async findWhereIn(field: string, value: any[], columns?: any[] = ['*']) {
    return [field, value, columns]
  }

  async create(data: any) {
    return this.model.create(data)
  }

  async update(id: any, attributes: any) {
    const record = await this.find(id)
    record.merge(attributes)
    return record.save()
  }

  async delete(id: any) {
    const record = await this.find(id)
    return record.delete()
  }

  async insert(values: any[]) {
    console.log(values)
    return true
  }
}
