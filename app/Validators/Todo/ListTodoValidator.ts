import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import BaseValidator from 'App/AdonisCore/BaseValidator'

export default class ListTodoValidator extends BaseValidator{

  public schema = schema.create({
    ... BaseValidator.commonListRules,
    title: schema.string.optional(),
    is_completed: schema.boolean.optional()
  })

  public messages: CustomMessages = {}
}
