import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCard from '../../../hooks/useCard';

const AddToCard = () => {
  const [card] = useCard();
  return (
    <div>
        <div className="indicator">
            <span className="indicator-item badge badge-sm badge-secondary -mt-1">{card?.length || 0}</span> 
            <Link to={'/dashboard/my_cart'}><FaCartArrowDown className='text-xl text-black' /></Link>
        </div>
    </div>
  )
}

export default AddToCard