'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('hello-world',({view}) => {
    return view.render('hello-world')
})
Route.get('login',({view}) => {
    return view.render('login')
})

Route
    .get('users/:id','UserController.show')
    .middleware('auth')

Route
    .post('login','UserController.login')
    .as('loginuser')
Route
    .group(()=>{
        Route.get('/','AdminController.adminpage')
        Route.get('logout','UserController.logout').as('logoutuser')
    })
    .prefix('mainboard')
    .middleware(['auth'])