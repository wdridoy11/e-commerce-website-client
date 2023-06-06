import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='container mx-auto px-5'>
            <div className='fixed z-10 bg-opacity-30 bg-base-100 text-white px-10'>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Header