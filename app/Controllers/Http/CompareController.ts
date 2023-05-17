import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ListCompareValidator from 'App/Validators/Compare/ListCompareValidator'
import ListCompareService from 'App/Services/Compare/ListCompareService'
import ShowCompareValidator from 'App/Validators/Compare/ShowCompareValidator'
import ShowCompareService from 'App/Services/Compare/ShowCompareService'

export default class CompareController {

  public async index({ request, response }: HttpContextContract) {
    const dataRequest = await request.validate(ListCompareValidator)
    const compares = await (new ListCompareService()).setData(dataRequest).handle()
    return response.status(200).json(compares)
  }

  public async show({ request, params, response}:HttpContextContract) {
    const dataRequest = await request.validate(ShowCompareValidator)
    const compares = await (new ShowCompareService()).setData(dataRequest).setModel(Number(params.id)).handle()
    return response.status(201).json(compares)
  }
}
