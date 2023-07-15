import React, { useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { FaMinus } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
const img =`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKx_YNcf4Fi_7Tc9Sj-19ZWnxJV6xfte9KQLMn3zZ2G4ffXeNS38-omkB7yw-E4JaBRQ&usqp=CAU`
const ProductCardDetails = () => {
    // react reating
    const [rating, setRating] = useState(4);
    // const {} = ;
    const handleQuantityUp=()=>{
        console.log("Hello Incress")
    }
    const handleQuentityDown=()=>{
        console.log("Hello Down")
    }
  return (
    <div className='mt-10 py-20'>
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-7 bg-white gap-5 p-10'>
                <div className='col-span-2'>
                    <div className='w-full h-96 overflow-hidden'>
                        <img className='w-full mx-auto' src={img} alt="" />
                    </div>
                </div>
                <div className='col-span-4'>
                    <h3 className='text-2xl font-semibold text-black mb-3'>New Trendy Look</h3>
                    <div className='flex gap-1 items-center'>
                        <div>
                            <Rating style={{ maxWidth: 60 }} value={rating} onChange={setRating} />
                        </div>
                        <div className='text-base font-semibold'>
                            (10)
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-base text-[#9e9e9e] font-medium'>Brand: <span className='text-black'>Apple</span> </p>
                        <p className='text-base text-[#9e9e9e] font-medium'>Category: <span className='text-black'>Apple</span></p>
                    </div>
                    <div className="divider"></div> 
                    <p className='text-4xl font-medium text-[#f85606] mb-5'>$100</p>
                    <div className='flex items-center gap-5'>
                        <p>Quantity</p>
                        <div className='flex items-center gap-2'>
                            <button className='bg-[#eff0f5] p-2 rounded-md'>
                                <FaMinus className='text-lg text-black' />
                            </button>
                            <input 
                                type="number" 
                                defaultValue={`1`} 
                                name="quantity" 
                                id="quantity" 
                                min="1" 
                                className='p-2' 
                            />
                            <button className='bg-[#eff0f5] p-2 rounded-md'>
                                <MdAdd className='text-lg text-black' />
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className='px-5 py-2 bg-blue-500 text-white font-medium'>Buy Now</button>
                        <button>Add To Card</button>
                    </div>
                </div>
                <div>
                    <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_KI8okFTxbQmmE6W4yn3szv0qGsT3vftHNozHfxc&s" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCardDetails