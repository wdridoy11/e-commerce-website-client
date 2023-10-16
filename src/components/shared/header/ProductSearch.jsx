import React from 'react'
import { FaSearch} from 'react-icons/fa';
import Shop from '../../../pages/shop/Shop';

const ProductSearch = () => {

    const handleSubmit=(event)=>{
        event.preventDefault();
        const userSearchValue = event.target.search.value;
        localStorage.setItem("searchQuery",userSearchValue)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex items-center'>
            <input 
                type="search" 
                name="search" 
                id="search"
                placeholder='Search...'
                className='input-bordered w-full lg:w-[500px] outline-none py-2 px-3 m-0 bg-neutral-100'
                required
            />
            <button className='bg-[#FF5039] py-3 px-3 text-white'><FaSearch /></button>
        </form>
    </div>
  )
}

export default ProductSearch