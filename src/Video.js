import React, { useRef, useState } from 'react'
import "./Video.css"
import "./App.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from "./VideoSidebar"

function Video({url,channel,description,song,likes,shares,comments}) {
  const [playing,setPlaying]=useState(false);
  const videoRef = useRef(null);

  const handleVideoPress=()=>{
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
    }
    else{
      videoRef.current.play();
      setPlaying(true);
    }
  }
  return (
    <div className='video'>
       <video onClick={handleVideoPress} className='video__player'  type={"video/mp4"} src={url} muted="false" autoPlay controls ref={videoRef} loop ></video>
        <VideoFooter channel={channel} description={description} song={song}/>
        <VideoSidebar likes={likes} comments={comments} shares={shares}/>
    </div>
  )
}

export default Video