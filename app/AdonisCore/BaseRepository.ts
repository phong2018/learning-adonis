import RepositoryInterface from 'App/AdonisCore/Contracts/RepositoryInterface'
import CriteriaComposite from "App/AdonisCore/Criteria/CriteriaComposite";

export default class BaseRepository implements RepositoryInterface {
  public model

  async applyCriteria(criteria) {
    if (criteria instanceof CriteriaComposite) {
      const query = this.model.query()
      return await criteria.apply(query)
    } else {
      return await criteria.apply(this.model.query())
    }
  }

  async find(id: any, columns?: any[]) {
    return this.model.findOrFail(id,columns)
  }

  async first(columns?: any[]) {
    return this.model.first(columns)
  }

  async firstWhere(where: any, columns?: any[]) {
    return [where, columns]
  }

  async firstOrFailWhere(where: any, columns?: any[]) {
    return [where, columns]
  }

  public async findAll(filters?: any[], orders?: any[], relations?: any[]): Promise<any[]> {
    const query = this.model.query()
    return query

    // if (filters !== undefined) {
    //   query.where('completed', filters)
    // }

    // if (orders !== undefined) {
    //   query.orderBy('completed', filters)
    // }

    // if (orderBy.column !== undefined && orderBy.direction !== undefined) {
    //   query.orderBy(orderBy.column, orderBy.direction)
    // }

    // return await query.with('user').fetch()
  }

  async allWith() {
    return this.model.query().preload('user')
  }

  async all(columns?: any[]) {
    return this.model.all(columns)
  }

  async paginate(limit?: number, columns?: any[]) {
    return [limit, columns]
  }

  async simplePaginate(limit?: number, columns?: any[]) {
    return [limit, columns]
  }

  async findByField(field: string, value: any, columns?: any[]) {
    return [field, value, columns]
  }

  async findWhereIn(field: string, value: any[], columns?: any[]) {
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
