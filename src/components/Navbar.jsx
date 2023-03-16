import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>React Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg' alt=''/>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
