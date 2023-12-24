import React, { useContext } from 'react'
import { FaHeart, FaHome, FaUsers,FaUser } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { MdLibraryAdd } from "react-icons/md";
import { BsFillBoxFill } from "react-icons/bs";
import { NavLink, Outlet } from 'react-router-dom'
import useUser from '../hooks/useUser';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import { AuthContext } from '../context/AuthProvider';
import AllUsers from '../pages/dashboard/admin/allUsers/AllUsers'

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    // const [isAdmin] = useAdmin();
    // const [isSeller] = useSeller();
    // const [users] = useUser();
    const isAdmin = true;
    const isUser = false;
    const isSeller = false;
  return (
    <>
        <div className="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-slate-200 text-base-content">
                <div>
                    <div className='text-center mb-5'>
                        <img className='w-28 rounded-full mx-auto ring-2' src={user?.photoURL} alt="Profile image" />
                        <p className='mt-3 text-lg font-semibold'>{user?.displayName}</p>
                        <p className=''>{user?.email}</p>
                    </div>
                    <div className='dashboard-nav'>
                        {isAdmin && <>
                            <li className='mb-2'><NavLink to={`/dashboard/admin_home`}><FaUser></FaUser>Admin Home</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/allusers`}><FaUsers></FaUsers>All Users</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/my_cart`}><IoMdCart></IoMdCart>My Cart</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/wishlist`}><FaHeart></FaHeart>Wishlist</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/manage_product`}><BsFillBoxFill></BsFillBoxFill>Manage Product</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/order`}><BsFillBoxFill></BsFillBoxFill>My Order</NavLink></li>
                        </>}
                        {isSeller && <>
                            <li className='mb-2'><NavLink to={`/dashboard/my_cart`}><IoMdCart></IoMdCart>My Cart</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/wishlist`}><FaHeart></FaHeart>Wishlist</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/add_product`}><MdLibraryAdd></MdLibraryAdd>Product Add</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/my_product`}><BsFillBoxFill></BsFillBoxFill>My Product</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/order`}><BsFillBoxFill></BsFillBoxFill>My Order</NavLink></li>
                        </>}
                        {isUser && <>
                            <li className='mb-2'><NavLink to={`/dashboard/my_cart`}><IoMdCart></IoMdCart> My Cart</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/wishlist`}><FaHeart></FaHeart> Wishlist</NavLink></li>
                            <li className='mb-2'><NavLink to={`/dashboard/order`}><BsFillBoxFill></BsFillBoxFill>My Order</NavLink></li>
                        </>}
                    </div>
                </div>
                <div className="divider"></div> 
                <div>
                    <li className='mb-2'>
                        <NavLink to={`/`}><FaHome></FaHome> Home</NavLink>
                    </li>
                </div>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Dashboard