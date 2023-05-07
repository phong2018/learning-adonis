import HasCriteriaMixin from "App/AdonisCore/Mixins/HasCriteriaMixin";
import HasScopeQueryMixin from "App/AdonisCore/Mixins/HasScopeQueryMixin";
import { applyMixins } from "App/AdonisCore/Mixins/applyMixins";

export interface BaseRepository extends HasCriteriaMixin, HasScopeQueryMixin {}
export class BaseRepository {
  public model
  public query

  constructor(Model)
  {
    this.model = Model
    this.rescueQuery()
  }

  async prepareQuery()
  {
    this.applyScopeQueries(this.query)
    this.applyCriteria(this.query)
  }

  async rescueQuery()
  {
    this.query = this.model.query();
    this.resetScope();
    this.resetCriteria();
  }

  async find(id: any, columns: any[] = ['*']) {
    this.prepareQuery()
    const result = this.query.select(columns).firstOrFail(id)
    this.rescueQuery()
    return result
  }

  async first(columns: any[] = ['*']) {
    this.prepareQuery()
    const result = this.query.select(columns).first()
    this.rescueQuery()
    return result
  }

  async firstWhere(where: any, columns: any[] = ['*']) {
    return [where, columns]
  }

  async firstOrFailWhere(where: any, columns: any[] = ['*']) {
    return [where, columns]
  }

  async all(columns: any[] = ['*']) {
    this.prepareQuery()
    const result = this.query.select(columns)
    this.rescueQuery()
    return result
  }

  async paginate(curr_page: number = 1, limit: number, columns: any[] = ['*']) {
    this.prepareQuery()
    const result = this.query.select(columns).paginate(curr_page,limit)
    this.rescueQuery()
    return result
  }

  async simplePaginate(limit?: number, columns: any[] = ['*']) {
    return [limit, columns]
  }

  async findByField(field: string, value: any, columns: any[] = ['*']) {
    return [field, value, columns]
  }

  async findWhereIn(field: string, value: any[], columns: any[] = ['*']) {
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
applyMixins(BaseRepository, [HasCriteriaMixin, HasScopeQueryMixin])
