import React from 'react'

function Button(props) {
  
  return (
    <div>
      <button type="submit" className={props.class} id={props.id} onClick={props.submit}>{props.type}</button>
    </div>
  )
}

export default Button