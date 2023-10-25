import React, { createContext, useContext, useState } from 'react'
import { FaSearch} from 'react-icons/fa';
import Shop from '../../../pages/shop/Shop';
import { AuthContext } from '../../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../api/useProducts';

const ProductSearch = () => {
    // const [searchValues, setSearchValues] = useState('');
    const {setSearchValue} = useContext(AuthContext);
    const [searchProduct, setSearchProduct] = useState([]);
    const [products] = useProducts();
    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        let value = event.target.search.value;
        setSearchValue(value);
        navigate("/shop");
        // fetch(`${process.env.REACT_APP_API_URL}/search_product/${value}`)
        // .then((res)=>res.json())
        // .then((data)=>{
        //     // setSearchProduct(data)
        //     // console.log("data is call")
            setSearchValue(value)
        // })
        // .catch((err)=>console.log(err.message))
    }
// console.log(searchProduct)

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
            <button type='submit' className='bg-[#FF5039] py-3 px-3 text-white'><FaSearch /></button>
        </form>
    </div>
  )
}

export default ProductSearch