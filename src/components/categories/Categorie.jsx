import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Categorie = ({categorie}) => {
  const {setCategoryFilter} = useContext(AuthContext);
  const navigate = useNavigate();
  const {icon, title} = categorie;
  // handle category data get
  const handleClick=(category)=>{
    setCategoryFilter(category);
    navigate('/shop')
  }

  return (
    <div>
        <div onClick={()=>handleClick(title)} className='bg-white text-center pt-2 pb-4 rounded-md hover:bg-[#EEEBFE] cursor-pointer duration-500'>
            <img className='w-1/3 md:w-full mx-auto h-20 md:h-32 object-cover hover:scale-110 duration-500' src={icon} alt={title} />
            <Link to={`/shop/${title}`} className='text-lg font-semibold inline-block mt-2'>{title}</Link>
        </div>
    </div>
  )
}

export default Categorie