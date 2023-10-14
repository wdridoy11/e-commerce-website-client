import React from 'react'
import { useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./brand.css"
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Brand = () => {
    const [brands, setBrands] = useState([]);
    // brand data get from database
    useEffect(()=>{
        fetch(`http://localhost:5000/brands`)
        .then((res)=>res.json())
        .then((data)=>setBrands(data))
        .catch((err)=>console.log(err.message))
    },[])


  return (
    <div className='pt-10 mt-5'>
        <div className='container mx-auto'>
            <div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{clickable: true,}}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    {brands && brands?.map((brand)=><SwiperSlide key={brand._id}>
                        <div className="w-full h-20 overflow-hidden mb-10 border p-5">
                            <img className='w-auto h-10 mx-auto' src={brand?.brand_img} alt={brand?.name} />
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Brand