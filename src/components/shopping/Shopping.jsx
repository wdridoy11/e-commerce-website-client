import React, { useEffect, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import Address from '../Modal/Address'
import useCard from '../../hooks/useCard';

const Shopping = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState([]);
    const closeModal=()=>setIsOpen(false);
    const openModal=()=>setIsOpen(true);
    const [card] = useCard();

    // product total calculate
    const productPrice = card.reduce((sum,product)=>product.price * product.quantity + sum,0);
    const subtotalPrice = productPrice.toFixed(2);
    const shippingChange = 20;
    const totalPrice = parseFloat(subtotalPrice) + shippingChange;
    const productTotalPrice = totalPrice.toFixed(2);


    useEffect(()=>{
        fetch(`http://localhost:5000/address`)
        .then((res)=>res.json())
        .then((data)=>setAddress(data))
    },[])
    
  return (
    <>
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className='grid grid-cols-3 gap-10 w-full'>
                <div className='col-span-2 h-[70px] bg-white'>
                    <div>
                        <button onClick={openModal} className='py-5 px-5 text-2xl flex items-center
                         gap-3'><GrAdd></GrAdd> Add Your Address</button>
                    </div>
                    <div className='bg-white p-5 mt-5 rounded-md'>
                        <h3 className='text-xl font-medium mb-5'>Shopping Address (Please select only one! shipping address)</h3>
                        <div className='divider'></div>
                        <div>
                            {address && address.map((address)=><>
                                <div className='grid grid-cols-5 items-center'>
                                    <div className=''>
                                        <p className='text-xl font-medium mb-1'>{address?.area}</p>
                                        <p className='capitalize'>
                                            <input 
                                                type="radio" 
                                                name="type" 
                                                id="type" 
                                            />  ({address?.type})
                                        </p>
                                    </div>
                                    <div className='col-span-3'>
                                        <ul className='list-none'>
                                        <li>Name: {address?.name}</li>
                                        <li>Email: {address?.email}</li>
                                        <li>Phone: {address?.phone}</li>
                                        <div className='flex'>
                                            <li>{address?.area},</li>
                                            <li>{address?.selectCity},</li>
                                            <li>{address?.selectProvince},</li>
                                        </div>
                                        <li>Address: {address?.address}</li>
                                        </ul>
                                    </div>
                                </div>
                            </>)}
                        </div>
                    </div>
                </div>
                <div className='col-span-1 bg-white p-10'>
                    <h3 className='text-xl font-medium mb-3'>Checkout Summary</h3>
                    <div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Subtotal</p>
                            <p>${subtotalPrice} USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Shipping</p>
                            <p>${shippingChange} USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Total</p>
                            <p>${productTotalPrice} USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p><strong>Payable Total</strong></p>
                            <p><strong>${productTotalPrice} USD</strong></p>
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