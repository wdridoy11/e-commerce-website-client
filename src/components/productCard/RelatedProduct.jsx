import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import useProducts from '../../api/useProducts'

const RelatedProduct = ({category,Id}) => {
    const [products] = useProducts();
    const categoryFilter = products?.filter((product)=>product.category === category);
    const sortByRating = categoryFilter?.sort((productOne,productTwo)=>productTwo.user_rating - productOne.user_rating);
    const sortData = [];
    for(let data of sortByRating){
        if(data._id === Id){continue}
        sortData.push(data)
    }

  return (
    <>
        {sortData?.slice(0,5).map((product)=><div key={product._id} className='mt-3'>
            <Link to={`http://localhost:3000/productDetails/${product._id}`} className='hover:shadow-md duration-150'>
                <div className='bg-white rounded-sm border rounded-b-md'>
                    <div className='w-full h-48 overflow-hidden'>
                        <img className='w-2/5 lg:w-3/5 mx-auto rounded-t-md' src={product?.product_image} alt={product?.product_name} />
                    </div>
                    <div className='p-2'>
                        <h4 className='text-sm text-[#212121] font-medium'>{product?.product_name.length>50? <>{product?.product_name.slice(0,50)}...</>:product?.product_name}</h4>
                        <p className='text-lg font-medium text-[#f85606]'>${product?.price}</p>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <Rating style={{ maxWidth: 60 }} value={product.user_rating} readOnly />
                            </div>
                            <div className='text-base font-semibold'>
                                ({product.user_review})
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>)}
    </>
  )
}

export default RelatedProduct