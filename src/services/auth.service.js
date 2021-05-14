
import request from '../utils/admin.util'


//login pour l'admin (bch yetna7a l fichier hadhaaa )



 async function logIn(login){
        try {
            const response = await request({
                method: 'POST',
                url: '/form',
                data: login, 
            })
            console.log(response)
            localStorage.setItem("user" , JSON.stringify(response.data))
            return response
    
        } catch (error) {
            throw (error.response || error.message)
        }
    }

      export const AuthService = {logIn:logIn,}