import React, { useEffect, useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { getData } from '../../../api/utils';

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);
    useEffect(()=>{
        getData("testimonial")
        .then((data)=>setTestimonial(data))
        .catch((err)=>console.log(err.message))
    },[])

  return (
    <div className='bg-[#F3F4F6] pt-20 pb-5'>
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold mb-5 text-center'>Testimonial</h1>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{clickable: true,}}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper">
                    <div>
                        {testimonial && testimonial?.map((testimonial)=><SwiperSlide key={testimonial._id}>
                            <div className='bg-white shadow-lg rounded-xl px-5 py-10 text-center mt-14'>
                                <div>
                                    <img className='-mt-20 w-24 h-24 rounded-full object-cover ring-2 ring-blue-500 mx-auto' src={testimonial?.user_image} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold mt-5 mb-2'>{testimonial?.user_name}</h3>
                                    <div className='flex gap-2 items-center justify-center mb-3'>
                                        <div>
                                            <Rating readOnly style={{ maxWidth: 90}} value={5} />
                                        </div>
                                    </div>
                                    <p className='text-base mt-3 text-[#1a1e5d] font-normal'>{testimonial?.user_feedback}</p>
                                </div>
                            </div>                            
                        </SwiperSlide>)}
                    </div>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Testimonial