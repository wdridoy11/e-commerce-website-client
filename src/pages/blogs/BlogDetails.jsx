import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BlogDetails = () => {
  const blogloading = useLoaderData();
  const {img, title, description_1, description_2, description_3, description_4, description_5 } = blogloading;
  return (
    <div className='py-10'>
        <div className='container mx-auto'>
            <div>
                <img className='w-full h-[600px] rounded-md object-cover' src={img} alt={title} />
                <h3 className="text-2xl font-medium my-5">{title}</h3>
                <div>
                    <p className='text-lg font-normal text-[#777] mt-7'>{description_1}</p>
                    <p className='text-lg font-normal text-[#777] mt-7'>{description_2}</p>
                    <p className='text-lg font-normal text-[#777] mt-7'>{description_3}</p>
                    <p className='text-lg font-normal text-[#777] mt-7'>{description_4}</p>
                    <p className='text-lg font-normal text-[#777] mt-7'>{description_5}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails