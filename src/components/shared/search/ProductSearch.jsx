import React, { useContext, useRef } from 'react'
import { FaSearch} from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ProductSearch = () => {
    const {setSearchValue} = useContext(AuthContext);
    const searchInputRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        let value = event.target.search.value;
        navigate("/shop");
        setSearchValue(value)
        searchInputRef.current.value = '';
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
                ref={searchInputRef}
                required
            />
            <button type='submit' className='bg-[#FF5039] py-3 px-3 text-white'><FaSearch /></button>
        </form>
    </div>
  )
}

export default ProductSearch