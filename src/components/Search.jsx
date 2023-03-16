import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
          <input type="text" placeholder='Find the user'></input>
        </div>

        <div className='userChat'>
            <img src='https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg' alt=''/>

            <div className='userChatInfo'>
              <span>Jane</span>

            </div>
        </div>
    </div>
  )
}
