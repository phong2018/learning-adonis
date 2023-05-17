import { DateTime } from 'luxon'
import { BaseModel, column ,manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'

export default class Compare extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String

  @column()
  public description: String

  @column()
  public category: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Product, {
    pivotTable: 'compare_products',
    localKey: 'id',
    pivotForeignKey: 'compare_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'product_id',
  })
  public products: ManyToMany<typeof Product>
}
