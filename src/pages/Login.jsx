import React from 'react'
import Add from "../img/addAvatar.png"
export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>

            <span className='logo'>React chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="email" placeholder='email'></input>
                <input type="password" placeholder='password'></input>
               
                <button>Sign up</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}
