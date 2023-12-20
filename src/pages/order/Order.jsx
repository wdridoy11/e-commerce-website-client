import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'

const Order = () => {
    const [orderInfo, setOrderInfo] = useState();
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/order`)
        .then((res)=>res.json())
        .then((data)=>setOrderInfo(data))
    },[])
  return (
    <div>
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className='bg-white p-5'>
                <div>
                    <h1 className='text-lg font-medium mb-2'>Your Order ID: <span>17135021605139</span> (2 items)</h1>
                    <h1 className='text-lg font-medium mb-5'>Payable Amount: TK. <span>713</span></h1>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <OrderCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order