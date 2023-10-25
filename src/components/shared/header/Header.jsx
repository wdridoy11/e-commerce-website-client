// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import Container from '../container/Container'
// import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaExchangeAlt, FaHeart, FaUserCircle } from 'react-icons/fa';
// import logo from '../../../assets/logo.png'
// import { AuthContext } from '../../../context/AuthProvider';
// import Account from '../account/Account';
// import ProductSearch from './ProductSearch';
// import AddToCard from './AddToCard';
// import Wishlist from './Wishlist';
// const Header = () => {
//     const {user} = useContext(AuthContext);


//   const navMenu=<>
//     <li><Link to={``}>Home</Link></li>
//     <li><Link to={``}></Link></li>
//     <li><Link to={``}></Link></li>
//     <li><Link to={``}></Link></li>
//   </>

//   return(
//     <div className='bg-white'>
//       <Container>
//         {/* Top header start */}
//           <div className='grid grid-cols-6 items-center py-3'>
//           {/* <div className='flex items-center justify-between py-3'> */}
//             <div className='col-span-1'>
//               <Link to={'/'}>
//                 <img width="150" src={logo} alt="Logo" />
//               </Link>
//             </div>
//             <div className='col-span-3 px-5'>
//                 <ProductSearch></ProductSearch>
//             </div>
//             <div className='flex justify-end col-span-1'>
//               {/* <li className='flex items-center gap-2 text-black font-normal text-base'>
//                 <FaPhoneAlt /> <Link to={'tel:017228241640'} className='text-base font-medium'>01722824160</Link>
//               </li>
//               <div className="divider lg:divider-horizontal"></div>  */}
//               <li className='flex items-center gap-2 text-black font-normal text-base'>
//                 <FaEnvelope /><Link to={''} className='text-base font-medium'>ridoysharif30@gmail.com</Link>
//               </li>
//             </div>
//             <div className='col-span-1'>
//               <div className='flex justify-end gap-2'>
//                 <Link><FaFacebookF className='text-3xl border rounded-full p-1.5 border-slate-400' /></Link>
//                 <Link><FaTwitter className='text-3xl border rounded-full p-1.5 border-slate-400'  /></Link>
//                 <Link><FaInstagram className='text-3xl border rounded-full p-1.5 border-slate-400'  /></Link>
//                 <Link><FaLinkedin className='text-3xl border rounded-full p-1.5 border-slate-400'  /></Link>
//               </div>
//             </div>
//           </div>
//         {/* Top header end */}

//         {/* Middle header logo search bar start*/}
//         <div>
//           <div className='flex items-center justify-between'>
//               <div>
//                   <Link to={'/shop'} className='text-base font-medium text-black'>Shop</Link>
//               </div>
//               <div>
//                   <div className='flex items-center list-none gap-3'>
//                       <li title='Shopping Cart'>
//                         <AddToCard></AddToCard>
//                       </li>
//                       <li title='Favorite'>
//                         <Wishlist></Wishlist>
//                       </li>
//                       <li title='Compare'>
//                         <Link to={`/shop`}><FaExchangeAlt className='text-xl text-black' /></Link>
//                       </li>
//                       <div>
//                         <Account></Account>
//                       </div>
//                   </div>
//               </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Header




import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaExchangeAlt, FaHeart, FaUserCircle } from 'react-icons/fa';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider';
import Account from '../account/Account';
import AddToCard from './AddToCard';
import Wishlist from './Wishlist';
import ProductSearch from '../search/ProductSearch';
const Header = () => {
    const {user} = useContext(AuthContext);


  const navMenu=<>
    <li><Link to={``}>Home</Link></li>
    <li><Link to={``}></Link></li>
    <li><Link to={``}></Link></li>
    <li><Link to={``}></Link></li>
  </>

  return(
    <div className='bg-white pt-5'>
      <Container>
        {/* Top header start */}
          {/* <div className='flex items-center justify-between py-3'>
            <div className='flex'>
              <li className='flex items-center gap-2 text-black font-normal text-base'>
                <FaPhoneAlt /> <Link to={'tel:017228241640'} className='text-base font-medium'>01722824160</Link>
              </li>
              <div className="divider lg:divider-horizontal"></div> 
              <li className='flex items-center gap-2 text-black font-normal text-base'>
                <FaEnvelope /><Link to={''} className='text-base font-medium'>ridoysharif30@gmail.com</Link>
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
          </div> */}
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
                <ProductSearch></ProductSearch>
            </div>
            <div className='flex items-center list-none gap-3'>
              <li title='Shopping Cart'>
                {/* <Link><FaCartArrowDown className='text-xl text-black' /></Link> */}
                <AddToCard></AddToCard>
              </li>
              <li title='Favorite'>
                {/* <Link><FaHeart className='text-xl text-black' /></Link> */}
                <Wishlist></Wishlist>
              </li>
              <li title='Compare'>
                <Link to={`/shop`}><FaExchangeAlt className='text-xl text-black' /></Link>
              </li>
              <div>
                <Account></Account>
              </div>
            </div>
          </div>
        </div>

      </Container>
      {/* Middle header logo search bar end*/}
        <div className='bg-[#E6EFFD] py-3'>
          <Container>
              <div className='flex gap-10'>
                <Link to={'/'} className='text-base font-medium text-slate-700'>Home</Link>
                <Link className='text-base font-medium text-slate-700'>Laptop</Link>
                <Link className='text-base font-medium text-slate-700'>Mobile</Link>
                <Link className='text-base font-medium text-slate-700'>Ipad</Link>
                <Link className='text-base font-medium text-slate-700'>AirPods Pro</Link>
                <Link className='text-base font-medium text-slate-700'>Televisions</Link>
                <Link className='text-base font-medium text-slate-700'>Headphone</Link>
              </div>
          </Container>

        </div>
    </div>
  )
}

export default Header