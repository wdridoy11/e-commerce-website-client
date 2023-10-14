import React, { useEffect, useState } from 'react'
import Blog from './Blog'

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/blogs`)
        .then((res)=>res.json())
        .then((data)=>setBlogs(data))
        .catch((err)=>console.log(err.message))
    },[])

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold mb-5 text-center'>Our Blogs</h1>
            <div className='grid grid-cols-3 gap-5'>
                {blogs.map((blog)=><Blog key={blog._id} blog={blog}></Blog>)}
            </div>
        </div>
    </div>
  )
}

export default Blogs