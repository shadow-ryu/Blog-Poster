
import { useState } from "react";
import { Avatar} from '@material-ui/core'
import './NewBlog.css'
import { useStateValue } from '../StateProvider'
import firebase from 'firebase'
import db from '../firebase'
import { Link } from 'react-router-dom';


const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [{ user }] = useStateValue();
 
   
  const handleSubmit =(e)=>{
              e.preventDefault();
//db.collection(urcollection name for me it use Blogss)
              db.collection('Blogss').add({
                title: title,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                info: body,
                userId :user.uid
            
            })
           
              setBody('');
              setTitle("");
  }
 
    return (  
        <div className="newblog">
             <div className="newblog__top">
             <Avatar src={user.photoURL} />
              <h4>{user.displayName}</h4>
             </div>
             <div className="newblog__bottom">
             <h2>Add a New Blog</h2>
              <form>
                <label>Blog title:</label>
                <input 
                  type="text" 
                  required 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                
                <button onClick={handleSubmit} type='submit' > Submit</button>
                <Link to="/">
                    <p>back</p>
                </Link>
              </form>
             </div>
     
    </div>
    );
}
 
export default NewBlog;