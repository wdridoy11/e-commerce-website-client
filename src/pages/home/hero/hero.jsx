import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../../../assets/hero-04.png'
import hero2 from '../../../assets/hero-03.jpg'
import hero3 from '../../../assets/offer-01.jpg'
import { Link } from 'react-router-dom'
const img = `https://www.cloud.ryanscomputers.com/cdn/sliders/META-Quest-2-128GB-All-in-One-VR-System-Banner_1688808664.webp`

const Hero = () => {
  return (
    <div className='bg-[#F6F6F6] py-10'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-5'>
                <div className='relative'>
                    <div className='absolute top-1/3 left-10'>
                        <h3 className='text-2xl font-medium text-black'>iPhone</h3>
                        <p className='text-base text-black font-normal mt-2 mb-3'>Discount up to 5%</p>
                        <Link className='bg-white text-black font-medium px-5 py-2 rounded-md 
                        inline-block hover:bg-black hover:text-white duration-500'>Buy Now</Link>
                    </div>
                    <img className='rounded-md h-[520px] w-full object-cover' src={hero1} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='relative'>
                        <div className='absolute top-1/3 left-20'>
                            <h3 className='text-3xl font-semibold text-white mb-4'>Aurora Headset</h3>
                            <Link className='bg-blue-500 px-10 py-3 rounded-md text-white hover:bg-black duration-500'>Buy Now</Link>
                        </div>
                        <img className='rounded-md' src={hero2} alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='relative'>
                            <div className='absolute top-1/4 left-10'>
                                <h3 className='text-lg font-medium text-white'>Xiaomi MI 11</h3>
                                <p className='text-base text-white font-normal mt-2 mb-3'>Discount up to 30%</p>
                                <Link className='bg-white text-black font-medium px-5 py-2 rounded-md 
                                inline-block hover:bg-black hover:text-white duration-500'>View Details</Link>
                            </div>
                            <img className='rounded-md w-full h-48 object-cover' src={hero3} alt="" />
                        </div>
                        <div className='relative'>
                            <div className='absolute top-1/4 left-10'>
                                <h3 className='text-lg font-medium text-white'>Xiaomi MI 11</h3>
                                <p className='text-base text-white font-normal mt-2 mb-3'>Discount up to 30%</p>
                                <Link className='bg-white text-black font-medium px-5 py-2 rounded-md 
                                inline-block hover:bg-black hover:text-white duration-500'>View Details</Link>
                            </div>
                            <img className='rounded-md w-full h-48 object-cover' src={hero3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero