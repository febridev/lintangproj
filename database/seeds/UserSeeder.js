'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    // const users = await Database.table('users')
    const usersArray = await Factory
      .model('App/Models/User')
      .createMany(5)
    // console.log(users)

    const user = new User()
    user.username = 'febri'
    user.email = 'febriyantabidin@gmail.com'
    user.password = 'Febr11yant!'
    await user.save()
  }
}

module.exports = UserSeeder
