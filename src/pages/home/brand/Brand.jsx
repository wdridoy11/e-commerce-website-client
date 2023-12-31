import React from 'react'
import { useState, useEffect } from 'react'
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Swiper React css 
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css';
import "./brand.css"
import { getData } from '../../../api/utils';

const Brand = () => {

    const [brands, setBrands] = useState([]);
    useEffect(()=>{
        getData('brands')
        .then((data)=>setBrands(data))
        .catch((err)=>console.log(err.message))
    },[])

  return (
    <div className='pt-10 mt-5'>
        <div className='container mx-auto'>
            <div className='brand pb-20'>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                          width: 640,
                          slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                        992: {
                          width: 992,
                          slidesPerView: 3,
                        },
                        1920: {
                          width: 1920,
                          slidesPerView: 4,
                        },
                    }}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{clickable: true,}}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper">
                    {brands && brands?.map((brand)=><SwiperSlide key={brand._id}>
                        <div className="w-full h-20 overflow-hidden border p-5 pb-10">
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