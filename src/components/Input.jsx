import React from 'react'
import Attach from "../img/attachment.png"
export const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something....'></input>
      <div className='send'>
        <img src={Attach} alt=''></img>
        <input type='file' style={{display:"none"}} id="file"></input>
          <label htmlFor='file'>
              <img src='' alt=''></img>
          </label>
          <button>Send</button>
      </div>
    </div>
  )
}
