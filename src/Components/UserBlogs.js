import { useStateValue } from '../StateProvider'

import db from '../firebase'
import BlogList from './BlogList'
import React, { useEffect, useState } from 'react'
import './UserBlogs.css'
const UserBlogs = () => {
    
 
    const [blogs, setBlogs] = useState([]);
    const [{ user }] = useStateValue()
    

       //snapshot is function like its name suggest  where there is a update in database or when someone post a new blog it takes that data's snapshot and update the urrent page with ne data
       //docs function id use to get all data
useEffect(() => {
    db.collection('Blogss').onSnapshot(snapshot => (
        setBlogs(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
       

    ))
   
  


}, [])


  

            
    return ( 
        <div className="userBlogs">
            
         
            { blogs.map((blog) => blog.data.userId===user.uid?(
                    <>
                    
                    <BlogList 
                         key={blog.id}
                            id={blog.id}
                         profilePic={blog.data.profilePic}
                         info={blog.data.info}
                         timestamp={blog.data.timestamp}
                         title={blog.data.title}
                         username={blog.data.username}
                         hidden
                         hideButton
                         />
             

                      
                           
                        
                       
                   
                    
                    
                    </>
                    
                 ):console.log(""))
             }

        </div>
     );
}
 
export default UserBlogs;