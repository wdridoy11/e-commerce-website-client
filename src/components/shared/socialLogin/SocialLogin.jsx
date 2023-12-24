import React, { useContext } from 'react'
import {FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider';

const SocialLogin = () => {

  const {createUserUsingGoogle,user, createUserUsingGithub} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  
  const handleGoogleLogin=()=>{
    createUserUsingGoogle()
    .then((res)=>{
      const loginUser = res.user;
      const saveUser = {name:loginUser?.displayName, email: loginUser?.email, image:loginUser?.photoURL }
      fetch(`${process.env.REACT_APP_API_URL}/users`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(saveUser)
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.insertedId){
          navigate("/")
          console.log(data)
        }else if(data.message){
          navigate("/")
          console.log(data)
        }
      })
    })
  }

  // handle login using github account
  const handleGithubLogin=()=>{
    createUserUsingGithub()
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
            <Link onClick={handleGithubLogin} className='btn btn-circle text-2xl'><FaGithub></FaGithub></Link>
        </div>
    </div>
  )
}

export default SocialLogin