import axios from "./axios.js"
import React, { useEffect, useState } from 'react';
import "../src/App.css";
import Video from './Video';

function App() {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    async function fetchPosts() {
      const response=await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  },[]);

  console.log(videos);
  return (
    <div className="app">
    {/* <h1>Shortify</h1>  */}
   <div className="app__videos">
    {videos.map(({url,channel,description,song,likes,comments,shares}) =>(
      <Video
      url={url}
      channel={channel}
      song={song}
      likes={likes}
      comments={comments}
      description={description}
      shares={shares}
       />
    ))}
    
   </div>

    </div>
  );
}

export default App;
