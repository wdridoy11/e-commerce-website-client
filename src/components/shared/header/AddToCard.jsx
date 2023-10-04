import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCard from '../../../hooks/useCard';

const AddToCard = () => {
    const [cart] = useCard();
  return (
    <div>
        <div className="indicator">
            <span className="indicator-item badge badge-secondary -mt-1">{cart?.length || 0}</span> 
            <Link><FaCartArrowDown className='text-xl text-black' /></Link>
        </div>
    </div>
  )
}

export default AddToCard