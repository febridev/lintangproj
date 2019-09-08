'use strict'

class UserController {
    async login ({request, auth}){
        try {
            const{email, password} = request.all()
            await auth.attempt(email,password)
        
            return 'Bershasil login'
        } catch (error) {
            console.log(error)    
        }
    }
}

module.exports = UserController
