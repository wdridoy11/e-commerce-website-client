import React from 'react'
import { Link } from 'react-router-dom';

const Categorie = ({categorie}) => {
  
  const {icon, title} = categorie;
  const handleClick=(e)=>{
    console.log("hello",e);
  }
  return (
    <div>
        <div onClick={()=>handleClick(title)} className='bg-white text-center pt-2 pb-4 rounded-md hover:bg-[#EEEBFE] cursor-pointer duration-500'>
            <img className='w-full h-32 object-cover hover:scale-110 duration-500' src={icon} alt={title} />
            <Link to={`/shop/${title}`} className='text-lg font-semibold inline-block mt-2'>{title}</Link>
        </div>
    </div>
  )
}

export default Categorie