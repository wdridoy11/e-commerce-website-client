import React from 'react'
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom'
const image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKx_YNcf4Fi_7Tc9Sj-19ZWnxJV6xfte9KQLMn3zZ2G4ffXeNS38-omkB7yw-E4JaBRQ&usqp=CAU`;

const Order = () => {
  return (
    <div>
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-12 gap-5'>
                {/* product details */}
                <div className="col-span-8">
                    <div className='bg-white p-7 my-5'>
                        <div className='grid grid-cols-6 items-center gap-5'>
                            <div className='col-span-3 flex items-center gap-2'>
                                <img className='w-320 h-20 object-cover rounded-md' src={image} alt="" />
                                <div>
                                    <h5 className='text-base font-medium text-black'>Box Six Belt Trendy AT Leather Sandal For Men</h5>
                                    <p className='text-base font-medium text-black'>Brand: Apple</p>
                                </div>
                            </div>
                            <div className='col-span-2 flex justify-between'>
                                <p className='text-base font-medium text-black'>Quantity: <span>3</span></p>
                                <p className='text-2xl font-medium text-black'>$<span>500</span></p>
                            </div>
                            <div className='mx-auto'>
                                <div className='border p-2 rounded-full cursor-pointer'>
                                    <MdDelete className='text-2xl text-[#FF5039]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side product Order Summary and coupon details  */}
                <div className='col-span-4'>
                    <div className='bg-white p-7 my-5 rounded-md'>
                        {/* Coupon code */}
                        <div className='flex gap-2'>
                            <input type="text" placeholder="Enter Coupon Code" className="input input-bordered w-full" />
                            <button className='bg-[#FF5039] text-center py-2 px-5 text-lg font-semibold text-white rounded-md'>Apply</button>
                        </div>
                        {/* Order Summary */}
                        <div className="divider mb-2 p-0"></div> 
                        <h4 className='text-base font-semibold text-black'>Order Summary</h4>
                        <div className='flex justify-between mb-1'>
                            <p className='text-base font-semibold text-black'>Price</p>
                            <p className='text-base font-semibold text-black'>$100</p>
                        </div>
                        <div className='flex justify-between mb-1'>
                            <p className='text-base font-semibold text-black'>Delivery Fee</p>
                            <p className='text-base font-semibold text-black'>$50</p>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <p className='text-base font-semibold text-black'>Total Payment</p>
                            <p className='text-base font-semibold text-black'>$1,003</p>
                        </div>
                        <Link className='bg-[#FF5039] block text-center py-2 text-lg font-semibold text-white rounded-md'>Place Order</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order