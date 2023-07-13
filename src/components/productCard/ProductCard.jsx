import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    const [rating, setRating] = useState(4) // Initial value
    const {image, phone_name, slug } = product;

  return (
    <Link className='hover:shadow-md duration-150'>
        <div className='bg-white rounded-sm'>
            <div className='w-full h-48 overflow-hidden'>
                <img className='w-1/2 mx-auto' src={image} alt={phone_name} />
            </div>
            <div className='p-2'>
                <h4 className='text-sm text-[#212121] font-medium'>{phone_name.length>20? <>{phone_name.slice(0,20)}...</>:phone_name}</h4>
                <p className='text-lg font-medium text-[#f85606]'>$100</p>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Rating style={{ maxWidth: 60 }} value={rating} onChange={setRating} />
                    </div>
                    <div className='text-base font-semibold'>
                        (10)
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard