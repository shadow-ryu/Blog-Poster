import { Avatar } from '@material-ui/core'
import  { useState } from 'react'
import './Blog.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import './Blog.css'

const Blog = ({ profilePic,  username, timestamp, title,littleinfo }) => {
    return ( 
        <div className='Blog' >
            <div className="Blog__top">
                <Avatar src={profilePic} className='Blog__avatar' />
                <div className="Blog__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className="Blog__bottom">
                <h3>{title}</h3>
                <p>{littleinfo}</p>
                <ExpandMoreOutlined/>
            </div>




            <div className="Blog__options">
                <div className="Blog__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="Blog__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="Blog__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
            </div>
     );
}
 
export default Blog;