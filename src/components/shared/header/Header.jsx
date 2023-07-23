import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaSearch, FaExchangeAlt,FaCartArrowDown, FaHeart, FaUserCircle } from 'react-icons/fa';
import logo from '../../../assets/logo.png'
const Header = () => {

  const navMenu=<>
    <li><Link to={``}>Home</Link></li>
    <li><Link to={``}></Link></li>
    <li><Link to={``}></Link></li>
    <li><Link to={``}></Link></li>
  </>


  // return (
  //   <div>
  //     <div className="navbar bg-base-100">
  //       <div className="navbar-start">
  //       <div className="dropdown">
  //         <label tabIndex={0} className="btn btn-ghost lg:hidden">
  //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  //         </label>
  //         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  //           <li><a>Item 1</a></li>
  //           <li>
  //             <a>Parent</a>
  //             <ul className="p-2">
  //               <li><a>Submenu 1</a></li>
  //               <li><a>Submenu 2</a></li>
  //             </ul>
  //           </li>
  //           <li><a>Item 3</a></li>
  //         </ul>
  //       </div>
  //       <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  //       </div>
  //       <div className="navbar-center hidden lg:flex">
  //         <ul className="menu menu-horizontal px-1">
  //           <li><a>Item 1</a></li>
  //           <li tabIndex={0}>
  //             <details>
  //               <summary>Parent</summary>
  //               <ul className="p-2">
  //                 <li><a>Submenu 1</a></li>
  //                 <li><a>Submenu 2</a></li>
  //               </ul>
  //             </details>
  //           </li>
  //           <li><a>Item 3</a></li>
  //         </ul>
  //       </div>
  //       <div className="navbar-end">
  //         <a className="btn">Button</a>
  //       </div>
  //     </div>
  //   </div>
    
  // )
  return(
    <div className='bg-white'>
    {/* <div className='bg-neutral-100'> */}
      <Container>
        {/* Top header start */}
          <div className='flex items-center justify-between py-3'>
            <div className='flex'>
              <li className='flex items-center gap-2 text-black font-normal text-base'>
                <FaPhoneAlt /> <Link to={'tel:017228241640'}>01722824160</Link>
              </li>
              <div className="divider lg:divider-horizontal"></div> 
              <li className='flex items-center gap-2 text-black font-normal text-base'>
                <FaEnvelope /><Link to={'tel:017228241640'}>ridoysharif30@gmail.com</Link>
              </li>
            </div>
            <div>
              <div className='flex gap-2'>
                <Link><FaFacebookF className='text-3xl border rounded-full p-1.5 border-slate-400' /></Link>
                <Link><FaTwitter className='text-3xl border rounded-full p-1.5 border-slate-400'  /></Link>
                <Link><FaInstagram className='text-3xl border rounded-full p-1.5 border-slate-400'  /></Link>
                <Link><FaLinkedin className='text-3xl border rounded-full p-1.5 border-slate-400'  /></Link>
              </div>
            </div>
          </div>
        {/* Top header end */}

        {/* Middle header logo search bar start*/}
        <div>
          <div className='flex items-center justify-between pb-5'>
            <div>
              <Link to={'/'}>
                <img width="150" src={logo} alt="Logo" />
              </Link>
            </div>
            <div>
              <form className='flex items-center'>
                <input 
                  type="search" 
                  name="search" 
                  id="search"
                  placeholder='Search...'
                  className='input-bordered w-full lg:w-[500px] outline-none py-2 px-3 m-0 bg-neutral-100'
                  />
                  <button className='bg-[#FF5039] py-3 px-3 text-white'><FaSearch /></button>
              </form>
            </div>
            <div className='flex items-center list-none gap-3'>
              <li title='Shopping Cart'>
                <Link><FaCartArrowDown className='text-xl text-black' /></Link>
              </li>
              <li title='Favorite'>
                <Link><FaHeart className='text-xl text-black' /></Link>
              </li>
              <li title='Compare'>
                <Link><FaExchangeAlt className='text-xl text-black' /></Link>
              </li>
              <li title='account'>
                <Link to={'/login'}><FaUserCircle className='text-xl text-black' /></Link>
              </li>
            </div>
          </div>
        </div>
        {/* Middle header logo search bar end*/}
      </Container>
    </div>
  )
}

export default Header