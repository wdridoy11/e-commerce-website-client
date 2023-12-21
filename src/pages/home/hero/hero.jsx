import React from 'react'
// Import Swiper React components
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./slider.css"
import 'swiper/css/pagination';
// image
import hero1 from '../../../assets/hero-1.png'
import hero2 from '../../../assets/hero-2.png'
import hero3 from '../../../assets/hero-3.png'
import hero4 from '../../../assets/hero-4.jpg'
import hero5 from '../../../assets/hero-5.jpg'
import hero6 from '../../../assets/hero-6.png'


const heroSlider=[
    {
        img:hero1,
        title:"iPhone",
        description:"Discount up to 5%",
        link:"http://localhost:3000/productDetails/657c629860c51081afc581fe",
        color:"black"
    },
    {
        img:hero2,
    },
    {
        img:hero3,
        title:"Mackbook",
        description:"Discount up to 10%",
        link:"http://localhost:3000/productDetails/653105bfc6a49660f9e5e604",
        color:"black"
    }
]

const Hero = () => {
  return (
    <div className='bg-[#F6F6F6] py-10'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {/* slider area */}
                <div>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {heroSlider?.map((item,index)=><SwiperSlide key={index}>
                            <div className='relative'>
                                <img className='w-full h-[520px] object-cover rounded-md' src={item.img} alt="" /> 
                                <div className='absolute top-1/3 left-10 text-left'>
                                    {item.title && <h3 className={`text-2xl font-semibold ${item.color === "white" ? "text-white" : "text-black"}`}>{item.title}</h3>}
                                    {item.description && <p className={`text-base text-black font-normal mt-2 mb-3 ${item.color === "white"?"text-white" :"text-black"}`}>{item.description}</p>}
                                    {item.link && <Link to={item.link} className='bg-white text-black font-medium px-5 py-2 rounded-md 
                                    inline-block hover:bg-black hover:text-white duration-500'>Buy Now</Link>}
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
                {/* right side banner */}
                <div className='flex flex-col gap-5'>
                    <div className='relative'>
                        <div className='absolute top-1/3 left-20'>
                            <h3 className='text-3xl font-semibold text-white mb-4'>Aurora Headset</h3>
                            <Link to={'http://localhost:3000/productDetails/653105bfc6a49660f9e5e60a'} className='bg-blue-500 px-10 py-3 rounded-md text-white hover:bg-black duration-500'>Buy Now</Link>
                        </div>
                        <img className='rounded-md' src={hero4} alt="" />
                    </div>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className='relative'>
                            <div className='absolute top-1/4 left-10'>
                                <h3 className='text-lg font-medium text-white'>Xiaomi 13T Pro</h3>
                                <p className='text-base text-white font-normal mt-2 mb-3'>Discount up to 30%</p>
                                <Link to={`http://localhost:3000/productDetails/657c609860c51081afc581fd`} className='bg-white text-black font-medium px-5 py-2 rounded-md 
                                inline-block hover:bg-black hover:text-white duration-500'>View Details</Link>
                            </div>
                            <img className='rounded-md w-full md:h-48 object-cover' src={hero5} alt="Xiaomi 13T Pro" />
                        </div>
                        <div className='relative'>
                            <div className='absolute top-1/4 left-10'>
                                <h3 className='text-lg font-medium text-black'>QCY H2 Wireless</h3>
                                <p className='text-base text-black font-normal mt-2 mb-3'>Discount up to 30%</p>
                                <Link to={'http://localhost:3000/productDetails/653105bfc6a49660f9e5e609'} className='bg-white text-black font-medium px-5 py-2 rounded-md 
                                inline-block hover:bg-black hover:text-white duration-500'>View Details</Link>
                            </div>
                            <img className='rounded-md w-full md:h-48 object-cover' src={hero6} alt="QCY H2 Wireless" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero