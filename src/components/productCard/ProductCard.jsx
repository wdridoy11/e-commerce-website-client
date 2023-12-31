import React from 'react'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom'
import { Rating } from '@smastrom/react-rating'

const ProductCard = ({product}) => {
  // product data destructuring
  const { brand, product_name, price, _id, product_image,user_rating } = product;
  return (
    <Link to={`/productDetails/${_id}`} className='hover:shadow-md duration-150'>
        <div className='bg-white rounded-md pb-3'>
            <div className='w-1/2 mx-auto md:w-full h-48 overflow-hidden'>
                <img className='md:w-9/12 mx-auto pb-5 hover:scale-110 duration-500' src={product_image} alt={product_name} />
            </div>
            <div className='p-5'>
                <h4 className='text-base text-[#212121] font-medium'>{product_name.length>20? <>{product_name.slice(0,20)}...</>:product_name}</h4>
                <p className='text-sm font-normal text-[#A5A5A5] mb-1'>{brand}</p>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Rating style={{ maxWidth: 90}} value={user_rating} readOnly />
                    </div>
                </div>
                <h4 className='text-xl font-semibold text-blue-500 mt-3 mb-3'>${price}</h4>
                <Link to={`/productDetails/${_id}`} className='block py-2 text-center text-white rounded-md bg-blue-500 
                 hover:bg-black duration-500'>View Details</Link>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard