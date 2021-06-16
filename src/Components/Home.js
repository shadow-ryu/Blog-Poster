import Bloglist from './BlogList'
import './Home.css'

import db from '../firebase'
import React, { useEffect, useState } from 'react'
const Home = () => {
    const [blogs, setBlogs] = useState([]);

    
useEffect(() => {
    db.collection('Blogss').onSnapshot(snapshot => (
        setBlogs(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        
    ))
   
  

}, [])


    return ( 
        <div className="home">
        
             {
                 
                blogs.map((blog) => (
                    
                    <Bloglist 
                        key={blog.id}
                           id={blog.id}
                        profilePic={blog.data.profilePic}
                        info={blog.data.info}
                        timestamp={blog.data.timestamp}
                        title={blog.data.title}
                        username={blog.data.username}
                        lessInfo
                    />
                ))
            }
          
        </div>
     );
}
 
export default Home;
