
import Route from '@ioc:Adonis/Core/Route'

// ################## test route
Route.get('/', async () => {
  console.log('hello world1')
  return { hello: 'world' }
})

// ################## test Controller
Route.get('/home', 'HomeController.index')

// ################## test AsyncLocalStorage
Route.get('/testUseAsyncLocalStorage', 'TodoController.testUseAsyncLocalStorage')
