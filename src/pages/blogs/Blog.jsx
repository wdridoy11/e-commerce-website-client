import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({blog}) => {
    const {img, title, description_1,_id } = blog
  return (
    <div>
        <div className="bg-white pb-3 rounded-b-md">
            <img className="w-full h-72 object-cover rounded-t-md" src={img} alt="Ridoy Sharif" />
            <div className="pt-4 pb-5 px-4">
                <h3 className="text-2xl font-medium mb-2">{title}</h3>
                <p className="text-base text-slate-500 mb-6">{description_1.length > 140 ? `${description_1.slice(0,140)}...`:description_1}</p>
                <Link to={`/blog/${_id}`} className='py-2 px-5 font-medium text-white rounded-md bg-blue-500 hover:bg-black duration-500'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Blog