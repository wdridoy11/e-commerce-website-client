import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div>
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-12'>
                <div className="col-span-8">

                </div>
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