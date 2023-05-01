# ######################### 
console.log(query.constructor.name)
console.log(typeof(query))

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
