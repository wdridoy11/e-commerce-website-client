import React, { useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { FaMinus } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
const ProductCardDetails = () => {
        // react reating
        const [rating, setRating] = useState(4)
  return (
    <div className='mt-10'>
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-3 bg-white gap-5'>
                <div>
                    <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg" alt="" />

                </div>
                <div className='col-span-2'>
                    <h3>New Trendy Look</h3>
                    <div>
                        <Rating style={{ maxWidth: 60 }} value={rating} onChange={setRating} />
                    </div>
                    <p className='text-4xl font-medium text-[#f85606]'>$100</p>
                    <div className='flex items-center gap-5'>
                        <p>Quantity</p>
                        <div className='flex items-center gap-2'>
                            <button className='bg-[#eff0f5] p-2 rounded-md'><FaMinus className='text-lg text-black' /></button>
                            <input type="number" name="quantity" id="quantity" min="1" className='p-2' />
                            <button className='bg-[#eff0f5] p-2 rounded-md'><MdAdd className='text-lg text-black' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCardDetails