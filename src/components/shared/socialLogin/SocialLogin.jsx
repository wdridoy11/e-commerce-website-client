import React from 'react'
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div>
      <div className='flex gap-2 justify-center'>
        <button className='p-4 border text-xl glass rounded-full'><FaGoogle></FaGoogle></button>
        <button className='p-4 border text-xl glass rounded-full'><FaGithub></FaGithub></button>
      </div>
    </div>
  )
}

export default SocialLogin