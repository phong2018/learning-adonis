import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import BaseValidator from 'App/AdonisCore/BaseValidator'

export default class ShowTodoValidator extends BaseValidator{

  public schema = schema.create({
    ... BaseValidator.commonListRules
  })

  public messages: CustomMessages = {}
}
