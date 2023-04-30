import RepositoryInterface from 'App/AdonisCore/Contracts/RepositoryInterface'

export default class BaseRepository implements RepositoryInterface {
  public model

  async filter(filters) {
    const criteria = new FilterCriteria(filters);
    criteria.apply(this.model);
    return this;
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
