import React from 'react'
import { FaHeart } from 'react-icons/fa';
import useWishlist from '../../../hooks/useWishlist'
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [wishlist] = useWishlist()

  return (
    <div>
        <div className="indicator">
            {/* <span className="indicator-item badge badge-sm badge-secondary -mt-1">0</span>  */}
            <span className="indicator-item badge badge-sm badge-secondary -mt-1">{wishlist?.length || 0}</span> 
            <Link to={'/dashboard/wishlist'}><FaHeart className='text-xl text-black' /></Link>
        </div>
    </div>
  )
}

export default Wishlist