import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './UserProfile.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'

import { Button } from '@material-ui/core'
const UserProfile = () => {
    const [{ user }, dispatch] = useStateValue();
    
    const Login = () => {
        auth.signInWithPopup(provider)
            .then(result => {
             
                
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                  
                })
                

            }).catch(error => alert(error.message))
    }
    return (

         <div className="userProfile">
                        <div className="userProfileInfo">



                            
         {
                    user ? (
                      <>
                        <Avatar  src={user.photoURL} style={{ 
                          

                         marginLeft:  250,
                          width: 93 ,
                          height: 88 ,
                          
                         
                        }} />
                        <div className="userProfileDet">
                          <div className="userInfo">
                              <h4>FullName </h4>
                            <h5>{user.displayName}</h5>
                          </div>
                     
                        <h4>Email</h4>
                        <h5>{user.email}</h5>
                

                        </div>
                        
                         
                      </>
                    ) : (
                         <> 
                          <Avatar    />
                        <div className="userProfileDet">

                        <h4>FullName </h4>
                        <h5>Guest</h5>
                        <h4>Email</h4>
                        <h5>Guest's email adress</h5>
                        <Button type='submit' onClick={Login}>Sign In     <img src="https://image.flaticon.com/icons/png/512/270/270014.png" alt="fb circle" /></Button>

                        </div>
                         </>
                        
                     
                      )
                  }
                        </div>

         </div>


      );
}
 
export default UserProfile;