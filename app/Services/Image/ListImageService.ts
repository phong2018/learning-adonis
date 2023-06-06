import BaseService from 'App/AdonisCore/BaseService'
import { listFiles } from 'App/Utils/image';

export default class ListImageService extends BaseService {
  constructor() {
    super()
  }

  public async handle() {
    return await listFiles('storage/uploads')
    .then(files => {
      return files
    })
    .catch(error => {
      return error
    })
  }
}
