import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import firebase from 'firebase'
import db from '../firebase'
import UserBlogList from './BlogList'


const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const [blogs, setBlogs] = useState([]);
  const [{ user }, dispatch] = useStateValue()
  

     
useEffect(() => {
  db.collection('Blogss').onSnapshot(snapshot => (
      setBlogs(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
     

  ))
 




}, [])
console.log(id)

  return (
    <div className="blog-details">
      
        
      { blogs.map((blog) => blog.id ===id?(
                    <>
                    
                    <UserBlogList 
                         key={blog.id}
                            id={blog.id}
                         profilePic={blog.data.profilePic}
                         info={blog.data.info}
                         timestamp={blog.data.timestamp}
                         title={blog.data.title}
                         username={blog.data.username}
                         hideButton
                         />
             

                           
                        
                       
                   
                    
                    
                    </>
                    
                 ):console.log(""))
             }
    
    </div>
  );
}
 
export default BlogDetails;