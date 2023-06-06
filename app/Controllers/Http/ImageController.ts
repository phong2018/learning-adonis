import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ListImageValidator from 'App/Validators/Image/ListImageValidator'
import ListImageService from 'App/Services/Image/ListImageService'


export default class ImageController {
  /**
    * Display a listing of the images in path.
    *
    * @return HttpContextContract
    */
   public async index({ auth, request, response}:HttpContextContract)
   {
      const dataRequest = await request.validate(ListImageValidator)
      const listImages = await (new ListImageService()).setHandler(auth.user).setData(dataRequest).handle()
      console.log(listImages)
      return response.status(201).json(listImages)
   }
}
