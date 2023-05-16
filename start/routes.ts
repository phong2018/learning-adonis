/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  console.log('hello world1')
  return { hello: 'world' }
})

// ################## test Controller
Route.get('/home', 'HomeController.index')

// ################## test AsyncLocalStorage
Route.get('/testUseAsyncLocalStorage', 'TodosController.testUseAsyncLocalStorage')

// ################## test api
Route.group(() =>{
  Route.group(() => {
    Route.post('/register', 'AuthControler.register')
    Route.post('/login', 'AuthControler.login')
  })

  Route.group(() => {
    Route.resource('todos', 'TodoController')
  }).middleware('auth')

}).prefix('/api')


// ################## chat Socket.io
import View from "@ioc:Adonis/Core/View";
Route.get('/chat', async () => {
  return await View .render('chat')
})

import io from 'socket.io-client';
Route.get('/test-join-room', async () => {
  const socket = io(Env.get('SOCKET_SERVER'));
  socket.emit('testJoin',{
    'message':'testJoin',
    'handle':'PhongCa'
  });
})
