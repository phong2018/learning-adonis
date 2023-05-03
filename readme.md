# ioc container
// providers/RegisterClassProvider.ts
this.app.container.bind('ListTodoService', () => {
  const ListTodoService = require('App/Services/Todo/ListTodoService')
  return new ListTodoService()
})
// contracts/registerClass.ts
declare module '@ioc:ListTodoService' {
  // import ListTodoService from 'App/Services/Todo/ListTodoService'
  // const instance: ListTodoService
  // export default instance
}
# ######################### 
console.log(query.constructor.name)
console.log(typeof(query))
ModelQueryBuilder

# #########################
* use node ace repl
.ls
loadModels()
const users = await models.User.all()
console.log(users)

# #########################
* using crfs token for form
- install @adnonis/shield
- npm install @adonisjs/validator

# #########################
* to debug run
- yarn debug
"debug": "node ace serve --watch --node-args=\"--inspect\"",
