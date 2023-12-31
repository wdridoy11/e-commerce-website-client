import React from 'react'
import { Link } from 'react-router-dom'
import offer1 from '../../../assets/hero-5.jpg';
import offer2 from '../../../assets/offer-02.png';
import offer3 from '../../../assets/offer-03.png';
import "./offer.css"

// offer data
const offerItem =[
    {
        id:1,
        image:offer1,
        title:"Xiaomi 13T Pro",
        link:`http://localhost:3000/productDetails/657c609860c51081afc581fd`,
        description:"Discount up to 30%",
    },
    {
        id:2,
        image:offer2,
        title:"Iphone",
        link:"http://localhost:3000/productDetails/657c629860c51081afc581fe",
        description:"Discount up to 5%",
    },
    {
        id:3,
        image:offer3,
        title:"MackBook",
        link:"http://localhost:3000/productDetails/653105bfc6a49660f9e5e607",
        description:"Discount up to 10%",
    }
]

const Offer = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-3 gap-5'>
                {offerItem.map((offer)=><div key={offer.id} className='relative'>
                    <div className='absolute top-1/4 left-10'>
                        <h3 className='text-3xl font-semibold text-white mb-3'>{offer?.title}</h3>
                        <p className='text-base text-white font-normal mt-2 mb-3'>{offer?.description}</p>
                        <Link to={`${offer.link}`} className='bg-white text-black font-medium px-5 py-2 rounded-md 
                        inline-block hover:bg-black hover:text-white duration-500'>Buy Now</Link>
                    </div>
                    <img className='rounded-md w-full md:h-[250px] object-cover' src={offer?.image} alt={offer?.title} />
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Offer