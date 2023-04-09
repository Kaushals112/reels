import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import PaidIcon from '@mui/icons-material/Paid';
function VideoSidebar({likes,shares,comments}) {
  const [liked,setLiked]=useState(false)
  return (
    
    <div className='videoSidebar'>
    <div className="videoSidebar__button">
    <PaidIcon fontSize='large'/>
      </div>
      <div className="videoSidebar__button">
     
        {
          liked ?
          <FavoriteIcon fontSize='large' onClick={(e)=>setLiked(false)}/>
          :
          <FavoriteBorderIcon fontSize='large' onClick={(e)=>setLiked(true)} />
        }
       
        <p>{liked ? likes+1 :likes}</p>
      </div>

      <div className="videoSidebar__button">
        <CommentIcon fontSize='large'/>
        <p>{comments}</p>
      </div>

      <div className="videoSidebar__button">
        <ShareIcon fontSize='large'/>
        <p>{shares}</p>
      </div>
      
    </div>
  )
}

export default VideoSidebar