import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#F1F1F1] pb-20 pt-32'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div>
                    <img width='100' src={Logo} alt="Logo" />
                    <div className='mt-3'>
                      <p className='text-lg font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ad eligendi esse veritatis accusantium consequatur.</p>
                    </div>
                    <div className='flex gap-2 mt-5'>
                        <Link className='text-xl border border-slate-400 p-2 text-black' to={``}><FaFacebookF /></Link>
                        <Link className='text-xl border border-slate-400 p-2 text-black' to={``}><FaInstagram /></Link>
                        <Link className='text-xl border border-slate-400 p-2 text-black' to={``}><FaTwitter /></Link>
                        <Link className='text-xl border border-slate-400 p-2 text-black' to={``}><FaLinkedin /></Link>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-black mb-5'>Category</h3>
                    <ul>
                        <Link className='block text-lg font-normal mb-1' to={``}>Phone</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>Headphone</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>TV</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>Laptop</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>Tab</Link>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-black mb-5'>Info</h3>
                    <ul>
                        <Link className='block text-lg font-normal mb-1' to={``}>About Us</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>Login/Register</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>Terms and Condition</Link>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-black mb-5'>Support</h3>
                    <ul>
                        <Link className='block text-lg font-normal mb-1' to={``}>Contact Us</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>Support</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>Order Track</Link>
                        <Link className='block text-lg font-normal mb-1' to={``}>Affiliate</Link>
                    </ul>
                </div>
            </div>
            <div className='text-center pt-7'>
                <p className='text-base font-medium'>Copyright 2022-2023</p>
            </div>
        </div>
    </div>
  )
}

export default Footer