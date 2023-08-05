import React, { useContext } from 'react'
import {FaGithub, FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider';

const SocialLogin = () => {

  const {createUserUsingGoogle} = useContext(AuthContext)
  // handle login using google account
  const handleGoogleLogin=()=>{
    createUserUsingGoogle()
    .then((res)=>{
      const user = res.user;
      console.log(user)
    })
  .then((err)=>{
    console.log(err.message)
  })
  }

  return (
    <div>
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider before:bg-white after:bg-white text-white">OR</div>
        </div>
        <div className='text-center'>
            <Link onClick={handleGoogleLogin} className='btn btn-circle text-2xl mr-2'><FaGoogle></FaGoogle></Link>
            <Link className='btn btn-circle text-2xl'><FaGithub></FaGithub></Link>
        </div>
    </div>
  )
}

export default SocialLogin