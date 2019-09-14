'use strict'
const { validate } = use('Validator')

class UserController {
    async login ({request, auth, session, response }){
        const rules = {
            password: 'required'
        }
        const validation = await validate(request.all(),rules)
        if (validation.fails()) {
            session 
                .withErrors(validation.messages())
                .flashAll()
            return response.redirect('back')
        }
        try {
            const{email, password} = request.all()
            await auth.attempt(email,password)
            return response.redirect('mainboard') 
        } catch (error) {
            console.log(error)
            session.flash({notification: 'Error Login #1, Check Email or Password Please '})
            return response.redirect('back')
        }
    }
    async logout({auth,view,response}){
        await auth.logout()
        return response.redirect('/login')
    }
}

module.exports = UserController
