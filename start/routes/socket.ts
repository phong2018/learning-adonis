import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

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
