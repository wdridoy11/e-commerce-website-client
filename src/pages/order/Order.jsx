import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import Loader from '../../components/shared/loader/Loader';

const Order = () => {
    const [orderInfo, setOrderInfo] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/order`)
        .then((res)=>res.json())
        .then((data)=>{
            data?.map((orderDetails)=>{
                setOrderInfo(orderDetails.card)
                setLoading(false)
            })
        })
    },[])
    
  return (
    <div>
        {loading ? <Loader></Loader>:
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className='bg-white p-5'>
                <div>
                    <OrderCard card={orderInfo} />
                </div>
            </div>
        </div>}
        
    </div>
  )
}

export default Order