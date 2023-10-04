import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import Address from '../Modal/Address'

const Shopping = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal=()=>setIsOpen(false);
    const openModal=()=>setIsOpen(true);
    
  return (
    <>
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className='grid grid-cols-3 gap-10 w-full'>
                <div className='col-span-2 h-[70px] bg-white'>
                    <div>
                        <button onClick={openModal} className='py-5 px-5 text-2xl flex items-center
                         gap-3'><GrAdd></GrAdd> Add Your Address</button>
                    </div>
                </div>
                <div className='col-span-1 bg-white p-10'>
                    <h3 className='text-xl font-medium mb-3'>Checkout Summary</h3>
                    <div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Subtotal</p>
                            <p>280 USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Shipping</p>
                            <p>280 USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Total</p>
                            <p>280 USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p><strong>Payable Total</strong></p>
                            <p><strong>280 USD</strong></p>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <form className='flex'>
                            <input 
                                type="text" 
                                name='coupon'
                                id='coupon'
                                className='w-full input input-bordered rounded-none'
                                placeholder='Enter your coupon code'
                            />
                            <input 
                                type="submit" 
                                value="Apply" 
                                className='px-5 bg-blue-500 text-white text-lg font-medium cursor-pointer'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Address
                isOpen={isOpen}
                closeModal={closeModal}
            ></Address>
        </div>
    </>
  )
}

export default Shopping