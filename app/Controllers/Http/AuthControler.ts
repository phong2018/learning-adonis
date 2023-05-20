import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import User from "App/Models/User";
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthControler {

  public async register({request, response}:HttpContextContract) {
    const validtions = schema.create({
      email:schema.string({}, [
        rules.email(),
        rules.unique({
          table: 'users', column: 'email'
        }),
      ]),
      'password': schema.string({}, [
        rules.confirmed()
      ])
    })

    const data = await request.validate({
      schema: validtions
    })

    const user = await User.create(data)

    return response.created(user)
  }

  public async login({request, auth}:HttpContextContract) {
    const validtions = schema.create({
      email:schema.string({}, [
        rules.email()
      ]),
      'password': schema.string({}, [])
    })

    const data = await request.validate({
      schema: validtions
    })

    const email = data.email
    const password = data.password

    const token = await auth.attempt(email, password)
    // or const token = await auth.use('api').attempt(email, password)
    const user = await User.query().where('email', email).firstOrFail()

    return {
        'access_token' : token,
        'currentUser' : user
    };
  }
}
