import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import BaseValidator from 'App/AdonisCore/BaseValidator'

export default class ListImageValidator extends BaseValidator{

  public schema = schema.create({
    ... BaseValidator.commonListRules,
    path: schema.string.optional()
  })

  public messages: CustomMessages = {}
}
