import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'

import './Login.css'
const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
             
                
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                  
                })
                

            }).catch(error => alert(error.message))
    }
    return ( 
        <div className="loginPage">
             <div className="loginLogo">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa6%2FPok%25C3%25A9mon_Dragon_Type_Icon.svg%2F1200px-Pok%25C3%25A9mon_Dragon_Type_Icon.svg.png&f=1&nofb=1" alt="fb circle" />
                <p> Blogger Post</p>
            </div>
            <Button type='submit' onClick={signIn}>Sign In     <img src="https://image.flaticon.com/icons/png/512/270/270014.png" alt="fb circle" /></Button>
            
        </div>
      );
}
 
export default Login;