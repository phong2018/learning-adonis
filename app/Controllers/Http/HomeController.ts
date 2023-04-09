import View from "@ioc:Adonis/Core/View";

export default class HomeController {
  public async index() {
    return await View .render('welcome', {
      greeting: 'Hello World'
    })
  }
}
