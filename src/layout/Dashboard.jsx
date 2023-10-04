import React, { useContext } from 'react'
import AllUsers from '../pages/dashboard/admin/allUsers/AllUsers'
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBars,FaShoppingBag, FaEnvelope, FaUtensils, FaUsers, FaBook} from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
  return (
    <>
        <div className="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          </div> 
          <div className="drawer-side">
            {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label>  */}
            <ul className="menu p-4 w-80 bg-slate-200 text-base-content">
                <div className='text-center mb-5'>
                    <img className='w-28 rounded-full mx-auto' src={user?.photoURL} alt="Profile image" />
                    <p className='mt-3 text-lg font-semibold'>{user?.displayName}</p>
                    <p className=''>{user?.email}</p>
                </div>
                <li className='mb-2'>
                    <NavLink to={`/dashboard/allusers`}><FaUsers></FaUsers> All Users</NavLink>
                </li>
                <li className='mb-2'>
                    <NavLink to={`/dashboard/my_cart`}><FaUsers></FaUsers> My Cart</NavLink>
                </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Dashboard