import React from 'react'
import {FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialLogin = () => {
  return (
    <div>
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider before:bg-white after:bg-white text-white">OR</div>
        </div>
        <div className='text-center'>
            <Link className='btn btn-circle text-2xl mr-2'><FaGoogle></FaGoogle></Link>
            <Link className='btn btn-circle text-2xl'><FaGithub></FaGithub></Link>
        </div>
    </div>
  )
}

export default SocialLogin