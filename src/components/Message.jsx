
import React from 'react'

export const Message = () => {
  return (
    <div className='mesaage'>
      <div className='messageInfo'>
        {/* <img src='https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=300'></img> */}

        <span>Just now</span>
     </div>

        <div className='messageContent'>
          <p>hello</p>
          <img src='https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=300' alt=''></img>
        </div>

    </div>
  )
}
