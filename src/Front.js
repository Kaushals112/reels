import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
function Front() {
  return (
    <div >
    
    <img id="front"src="./AI.jpg" />

     <div className='FrontText'>
        <h1>The API Helper</h1>
        <h3>Just Ask whatever you want?</h3>
        <h5>AI give your all answers</h5>
        <h6>Translation,Copywritting,Q&A......</h6>
       <NavLink to={"/Home"}> <Button
    type="Get Started 🎬"
    class="btn" 
    
    /></NavLink>
     </div>
    </div>
  )
}

export default Front