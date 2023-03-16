import React from 'react'
import Cam from "../img/video-camera.png";
import User from "../img/user.png";
import More from "../img/more.png";
import { Messages } from './Messages';
import { Input } from './Input';



export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={Cam} alt=''></img>
          <img src={User} alt=''></img>
          <img src={More} alt=''></img>
        </div>
        
       
      </div>
      <Messages/>
      <Input/>
      </div>
  )
}
