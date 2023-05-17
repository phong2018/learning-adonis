import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import BaseValidator from 'App/AdonisCore/BaseValidator'

export default class ListCompareValidator extends BaseValidator {

  public schema = schema.create({
    ...BaseValidator.commonListRules,
    title: schema.string.optional()
  })

  public messages: CustomMessages = {}
}
