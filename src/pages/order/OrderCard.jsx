import React from 'react'
import { Link } from 'react-router-dom'

const OrderCard = () => {
  return (
    <div className='bg-white rounded-md p-5 border rounded-b'>
        <Link to={""}>
            <div>
                <div className='w-full h-48 overflow-hidden'>
                    <img className='w-9/12 mx-auto pb-5 hover:scale-110 duration-500' src="https://adminapi.applegadgetsbd.com/storage/media/large/2324-41148.jpg" />
                </div>
            </div>
            <div className='mt-3'>
                <h4 className='text-base text-[#212121] font-medium'>MacBook Pro M1 8/256</h4>
                <h4 className='text-xl font-semibold text-blue-500 mt-2'>$100</h4>
            </div>
        </Link>
    </div>
  )
}

export default OrderCard