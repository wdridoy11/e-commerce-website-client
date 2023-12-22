
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaExchangeAlt, FaHeart, FaUserCircle } from 'react-icons/fa';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider';
import Account from '../account/Account';
import AddToCard from './AddToCard';
import Wishlist from './Wishlist';
import ProductSearch from '../search/ProductSearch';
import { categoriesData } from '../../categories/CategoriesData';
const Header = () => {
    const {user,setCategoryFilter,categoryFilter} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleClick=(category)=>{
      setCategoryFilter(category);
      navigate(`/shop`);
    }
  const navMenu=<>
    <li><Link to={``}>Home</Link></li>
    <li><Link to={``}></Link></li>
    <li><Link to={``}></Link></li>
    <li><Link to={``}></Link></li>
  </>

  return(
    <div className='bg-white pt-5'>
      {/* <Container>
        <div>
          <div className='flex items-center justify-between pb-5'>
            <div>
              <Link to={'/'}>
                <img width="150" src={logo} alt="Logo" />
              </Link>
            </div>
            <div>
                <ProductSearch></ProductSearch>
            </div>
            <div className='flex items-center list-none gap-3'>
              <li title='Shopping Cart'>
                <AddToCard></AddToCard>
              </li>
              <li title='Favorite'>
                <Wishlist></Wishlist>
              </li>
              <li title='Compare'> */}
                {/* <Link to={`/shop`}><FaExchangeAlt className='text-xl text-black' /></Link> */}
              {/* </li>
              <div>
                <Account></Account>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      <div className='container mx-auto'>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <Link to={'/'} className='text-base font-medium text-slate-700 py-2'>Home</Link>
                {categoriesData.map((navItem)=><>
                  <Link onClick={()=>handleClick(navItem?.title)} className='text-base font-medium text-slate-700 py-2'>{navItem?.title}</Link>
                </>)}
              </ul>
            </div>
            <Link className='btn btn-ghost' to={'/'}>
                <img width="150" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <ProductSearch></ProductSearch>
            </ul>
          </div>
          <div className="navbar-end">
              <div className='flex items-center list-none gap-3'>
                  <li title='Shopping Cart'>
                    <AddToCard></AddToCard>
                  </li>
                  <li title='Favorite'>
                    <Wishlist></Wishlist>
                  </li>
                  <li title='Compare'>
                    {/* <Link to={`/shop`}><FaExchangeAlt className='text-xl text-black' /></Link> */}
                  </li>
                  <div>
                    <Account></Account>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className='bg-[#E6EFFD] py-3 hidden md:block'>
        <div className='container mx-auto'>
            <div className='flex gap-10'>
                <Link to={'/'} className='text-base font-medium text-slate-700'>Home</Link>
                {categoriesData.map((navItem)=><>
                  <Link to={'/shop'} onClick={()=>handleClick(navItem?.title)} className='text-base font-medium text-slate-700'>{navItem?.title}</Link>
                </>)}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header