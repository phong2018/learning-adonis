import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, scope } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String

  @column()
  public is_completed: Boolean



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public user_id: number

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>

  public static lessThenCreatedAt = scope((query) => {
    query.where('created_at', '<=', DateTime.utc().toSQLDate())
  })
}
