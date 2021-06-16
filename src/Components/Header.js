import './Header.css'

import HomeIcon from '@material-ui/icons/Home'
import PostAddIcon from '@material-ui/icons/PostAdd';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'



const Header = (props) => {
    const [{ user }, dispatch] = useStateValue()
    let color =[];

    const logoLink="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa6%2FPok%25C3%25A9mon_Dragon_Type_Icon.svg%2F1200px-Pok%25C3%25A9mon_Dragon_Type_Icon.svg.png&f=1&nofb=1"
   
    return (
            <div className="headerBorder">
        <div  className="header">
        {props.hidden ?(
            <></>
        ):(
               <>
               
               
               <div className="header__left">
        <img src={logoLink} alt="" />
        </div>

       

        <div className="header__center">
        <Link to="/"> 
        <div className="header__option " >
             
                <HomeIcon fontsize='large' />
            </div>
        </Link>
            
            <Link to="/userblog"> 
            <div className="header__option"  >
                 <AllInboxIcon/>
            </div>
            </Link>
            <Link to="/newblog">
                <div className="header__option"  >
                
                    <PostAddIcon/>
                    
                
                </div>
            </Link>
           
        </div>

        <div className="header__right">
            <div className="header__info">
         <Link  to="/userProfile">

         {
                    user ? (
                      <>
                        <Avatar src={user.photoURL} />
                         <h4 className="hideUserName">{user.displayName}</h4>
                      </>
                    ) : (
                         <> 
                         <Avatar  />
                         <h4 className="hideUserName">Guest</h4>
                         </>
                        
                     
                      )
                  }
           


         </Link>
          
            </div>

          

        </div>
               
               
               
               
               
               
               
               
               
               
               
               
               
               </>


        )}
       
    </div>
    </div>
    )
}

export default Header

