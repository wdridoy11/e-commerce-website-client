import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

const Account = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then((res)=>console.log("Logout Successful!"))
        .catch((err)=>console.log(err.message))
    }
  return (
    <div>
        <li title='account'>
            {
                user ? 
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img className='w-8 h-8 object-cover rounded-full' src={user?.photoURL} alt="profile pic"/>
                      </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li>
                        <Link>Profile</Link>
                      </li>
                      <li>
                         <Link to={'/dashboard'}>Dashboard</Link>
                      </li>
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                </div>
                :
                <Link to={'/login'}><FaUserCircle className='text-xl text-black' /></Link>
            }
        </li>
    </div>
  )
}

export default Account