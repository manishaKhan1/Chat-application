import React from 'react';
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../Firebase";


export const Register = () => {

  const handleSubmit=(e)=>{
      e.preventDefault();
      
      const displayName=e.target[0].value;
      const email=e.target[1].value;
      const password=e.target[2].value;
      const file=e.target[3].files[0];



      
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>

            <span className='logo'>React chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'></input>
                <input type="email" placeholder='email'></input>
                <input type="password" placeholder='password'></input>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor='file'>
                    <img src={Add}></img>
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
