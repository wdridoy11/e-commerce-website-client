import React, { useEffect, useState } from 'react'
import her from '../../../assets/hero-3.png'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import "./brand.css"
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/testimonial`)
        .then((res)=>res.json())
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
                            <div className='bg-white shadow-lg rounded-xl px-5 py-10 text-center my-14'>
                                <div>
                                    <img className='-mt-20 w-24 h-24 rounded-full object-cover ring-2 ring-blue-500 mx-auto' src={testimonial?.user_image} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold mt-5 mb-2'>{testimonial?.user_name}</h3>
                                    <div className='flex gap-2 items-center justify-center mb-3'>
                                        <div>
                                            <Rating style={{ maxWidth: 90}} value={5} />
                                        </div>
                                    </div>
                                    <p className='text-base mt-3 text-[#1a1e5d] font-normal'>{testimonial?.user_feedback}</p>
                                </div>
                            </div>                            
                        </SwiperSlide>)}
                    </div>
                </Swiper>
            </div>
            {/* <div className='grid grid-cols-4'>
                <div className='bg-white shadow-lg rounded-xl px-5 py-10 text-center'>
                    <div>
                        <img className='-mt-20 w-24 h-24 rounded-full object-cover ring-2 ring-blue-500 mx-auto' src={her} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mt-5 mb-2'>Ridoy Sharif</h3>
                        <div className='flex gap-2 items-center justify-center mb-3'>
                            <div>
                                <Rating style={{ maxWidth: 90}} value={5} />
                            </div>
                        </div>
                        <p className='text-base mt-3 text-[#1a1e5d] font-normal'>When, while lovely valley teems with vapour around meand meridian sun strikes the</p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Testimonial