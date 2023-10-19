import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
// Swiper slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./spcialProduct.css"
import useProducts from '../../../api/useProducts';


const SpecialProduct = () => {
    
    const [products] = useProducts();
    const [specialProduct, setSpecialProduct]  = useState([]);

    useEffect(()=>{
        const productRatingFilter = products.filter((product)=>product.user_rating === 5);
        setSpecialProduct(productRatingFilter)
    },[products])

  return (
    <div className='specialProduct py-20 bg-white'>
        <div className='container mx-auto'>
            <div>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper">
                    {specialProduct && specialProduct?.map((product)=><SwiperSlide key={product._id}>
                        <div className='grid grid-cols-2 items-center'>
                            <div>
                                <img className='w-1/2 mx-auto' src={product?.product_image} alt={product?.product_name} />
                            </div>
                            <div className='text-start pr-20'>
                                <h1 className='text-3xl font-semibold mb-3'>{product?.brand}</h1>
                                <h3 className='text-xl font-medium mb-1'>{product?.product_name}</h3>
                                <p className='text-lg mb-1'>{product?.small_description}</p>
                                <div className='flex gap-2 items-center mb-5'>
                                    <div>
                                        <p className='flex gap-2'><Rating style={{ maxWidth: 90}} value={product?.user_rating} />({product?.user_review})</p>
                                    </div>
                                </div>
                                <h3 className='text-blue-500 font-medium text-4xl mb-5'>${product?.price}</h3>
                                <Link to={`/productDetails/${product?._id}`} className='px-7 py-2 text-center text-white rounded-md bg-blue-500 
                                hover:bg-black duration-500'>View Details</Link>
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>                
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct