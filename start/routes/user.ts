import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.get('/test-user-route', async () => { return { hello: 'test-user-route' } })

  Route.group(() => {
    Route.resource('compares', 'CompareController')
  })

}).prefix('/api')
