import React, { createContext, useState } from 'react'
import { FaSearch} from 'react-icons/fa';
import {useHistory } from 'react-router-dom'
import Shop from '../../../pages/shop/Shop';

const ProductSearch = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(searchValue)
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex items-center'>
            <input 
                type="search" 
                name="search" 
                id="search"
                placeholder='Search...'
                onChange={handleChange}
                value={searchValue}
                className='input-bordered w-full lg:w-[500px] outline-none py-2 px-3 m-0 bg-neutral-100'
                required
            />
            <button className='bg-[#FF5039] py-3 px-3 text-white'><FaSearch /></button>
        </form>
    </div>
  )
}

export default ProductSearch