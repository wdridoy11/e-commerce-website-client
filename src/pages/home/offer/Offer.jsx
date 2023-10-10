import React from 'react'
import { Link } from 'react-router-dom'
import "./offer.css"
const Offer = () => {
  return (
    <div>
        <div className='container mx-auto'>
            {/* TODO */}
            <div className='grid grid-cols-3 gap-5'>
                <div className='offer-image1 py-16 px-10 rounded-lg'>
                    <h3 className='text-lg font-medium text-white'>Xiaomi MI 11</h3>
                    <p className='text-base text-white font-normal mt-2 mb-3'>Discount up to 30%</p>
                    <Link className='bg-white text-black font-medium px-5 py-2 rounded-md 
                    inline-block hover:bg-black hover:text-white duration-500'>View Details</Link>
                </div>
                <div className='offer-image1 py-16 px-10 rounded-lg'>
                    <h3 className='text-lg font-medium text-white'>Xiaomi MI 11</h3>
                    <p className='text-base text-white font-normal mt-2 mb-3'>Discount up to 30%</p>
                    <Link className='bg-white text-black font-medium px-5 py-2 rounded-md 
                    inline-block hover:bg-black hover:text-white duration-500'>View Details</Link>
                </div>
                <div className='offer-image1 py-16 px-10 rounded-lg'>
                    <h3 className='text-lg font-medium text-white'>Xiaomi MI 11</h3>
                    <p className='text-base text-white font-normal mt-2 mb-3'>Discount up to 30%</p>
                    <Link className='bg-white text-black font-medium px-5 py-2 rounded-md 
                    inline-block hover:bg-black hover:text-white duration-500'>View Details</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer