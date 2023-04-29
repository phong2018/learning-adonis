import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import BaseValidator from 'App/AdonisCore/BaseValidator'

export default class CreateTodoValidator extends BaseValidator{

  public schema = schema.create({
    title: schema.string(),
    is_completed: schema.boolean.optional()
  })

  public messages: CustomMessages = {}
}
