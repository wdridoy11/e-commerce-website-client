import React, { useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { FaMinus } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import RelatedProduct from './RelatedProduct';
const img =`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKx_YNcf4Fi_7Tc9Sj-19ZWnxJV6xfte9KQLMn3zZ2G4ffXeNS38-omkB7yw-E4JaBRQ&usqp=CAU`
const text=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
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
    <div className='pt-10 pb-20'>
        <div className='container mx-auto px-5'>
            {/* product details page gird start*/}
            <div className='grid grid-cols-5 gap-5'>
                {/* product details start */}
                <div className='col-span-4'>
                    <div className='grid grid-cols-3 bg-white gap-5 p-5'>
                        <div className='col-span-1'>
                            <div className='w-full h-96 overflow-hidden'>
                                <img className='w-full mx-auto' src={img} alt="" />
                            </div>
                        </div>
                        <div className='col-span-2'>
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
                            <p className='text-4xl font-medium text-[#f85606] mb-5'>$ <span>100</span></p>
                            {/* quentity area start */}
                            <div className='flex items-center gap-5 mb-5'>
                                <p className='text-base text-black font-medium'>Quantity</p>
                                <div className='flex items-center gap-2'>
                                    <button onClick={handleQuentityDown} className='bg-[#eff0f5] p-2 rounded-sm'>
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
                                    <button onClick={handleQuantityUp} className='bg-[#eff0f5] p-2 rounded-md'>
                                        <MdAdd className='text-lg text-black' />
                                    </button>
                                </div>
                            </div>
                            {/* quentity area end */}
                            <div className='w-1/2 grid md:grid-cols-2 gap-2'>
                                <button className='w-full py-2 bg-blue-500 text-white font-medium rounded-sm hover:bg-black duration-500'>Buy Now</button>
                                <button className='w-full py-2 bg-[#FF5039] text-white font-medium rounded-sm hover:bg-black duration-500'>Add To Card</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white mt-3 p-5'>
                        <h3 className='text-2xl font-semibold text-black mb-2'>Product Details:</h3>
                        <p className='text-base text-black font-medium'>{text}</p>
                    </div>
                </div>
                {/* product details end */}
                {/* Related product start */}
                <div className='bg-white p-2'>
                     <RelatedProduct></RelatedProduct>
                </div>
                {/* Related product end */}
            </div>
            {/* product details page gird end*/}
        </div>
    </div>
  )
}

export default ProductCardDetails