import React from 'react'
import { Link } from 'react-router-dom'

const OrderCard = ({card}) => {

  return (
    <div className='bg-white rounded-md '>
        <div>
            <h1 className='text-lg font-medium mb-2'>Your Order ID: <span>17135021605139</span> ({card?.length} items)</h1>
            <h1 className='text-lg font-medium mb-5'>Payable Amount: TK. <span>713</span></h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {card?.map((product)=><Link to={`/productDetails/${product._id}`} className='border p-5 rounded-b'>
                <div>
                    <div className='w-full h-48 overflow-hidden'>
                        <img className='w-9/12 mx-auto pb-5 hover:scale-110 duration-500' src={product.product_image} />
                    </div>
                </div>
                <div className='mt-3'>
                    <h4 className='text-base text-[#212121] font-medium'>
                        {product.product_name.length>30? <>{product.product_name.slice(0,30)}...</>:product.product_name}
                    </h4>
                    <h4 className='text-xl font-semibold text-blue-500 mt-2'>{product.price}</h4>
                </div>
            </Link>)}
        </div>
    </div>
  )
}

export default OrderCard