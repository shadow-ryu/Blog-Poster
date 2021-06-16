import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core'
import db from '../firebase'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './BlogList.css'
const BlogList = ({ profilePic,  username, timestamp, title,info ,id ,lessInfo ,hideButton ,hidden }) => {
    const truncate =(str, no_words) =>{
        return str.split(" ").splice(0,no_words).join(" ");
    }
 
    const HandleDeletefunc = (id) =>{
   //doc function is to get data of specific id
        db.collection('Blogss').doc(id).delete();
     }
    
  return (
    <div className="blog-list">
        
 
 
        <div className="blog__preview" >
            <div className="Blog__top">
                <Avatar src={profilePic} className='Blog__avatar' />
                <div className="Blog__topInfo">
                    <h3>{username}</h3>
                    <p>{ 
                    new Date( timestamp.seconds*1000).toUTCString()}</p>
                </div>
            </div>
                <div className="blogInfo">
                    <h2>{ title }</h2>
                    { lessInfo ?(
            
                        
                      <p>{truncate(info ,8)}</p>  
                        
                    ) :( 
                        <p> {info}</p>
                       )}

                
                </div>
                {hideButton?
                (

                    <p></p>
                ):(
                    <div className="showMore">
                <Link to={`/blogs/${id}`}>
                       Show Details <NavigateNextIcon/>
                    </Link>
                </div>
             
                )
            
            }
                  {hidden? (
                     <>
                     
                     <div className="blogButton">
                            <button  onClick={()=> HandleDeletefunc(id)}> Delete post</button>
                   </div>
                      
                     </>
                ) 
                :(
                   
                      <p></p>
                )}
               
               
               
        </div>
   
    </div>
  );
}
 
export default BlogList;