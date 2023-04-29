export default class BaseRepository {
  public model

  async create (data) {
    return this.model.create(data)
  }

  async update (id, data) {
    const record = await this.getById(id)
    record.merge(data)
    return record.save()
  }

  async delete (id) {
    const record = await this.getById(id)
    return record.delete()
  }

  async getById (id) {
    return this.model.findOrFail(id)
  }

  async getAll () {
    return this.model.all()
  }

  async getByField (field, value) {
    return this.model.query().where(field, value).fetch()
  }
}
