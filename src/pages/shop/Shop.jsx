import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard';
import { BiSolidRightArrow } from 'react-icons/bi';

const Shop = () => {

    const [products,setProducts] = useState([]);
    // min price and max price state 
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    // price filter data
    const [filteredProducts, setFilteredProducts] = useState([]);


    // data loading form database
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data)
            setFilteredProducts(data)
        })
        .catch((err)=>console.log(err.message))
    },[])

    // handle min price and max price filter
    const handleFilterPrice= (e)=>{
        e.preventDefault();
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        const filteredData = products.filter((product)=>{
            const price = parseFloat(product.price);
            return price >= min && price <= max;
        })
        setFilteredProducts(filteredData)
    }



  return (
    <div>
        <div className='px-20 py-10'>
            <div className='grid grid-cols-5 gap-5'>
                <div className=' bg-white h-20 rounded p-5'>
                    {/* <div className='grid grid-cols-2 gap-3'> */}
                        <form onSubmit={handleFilterPrice} className='flex gap-2'>
                            <div className='grid grid-cols-2 gap-3'>
                                <input 
                                    type="number" 
                                    name="startPrice" 
                                    id="startPrice" 
                                    value={minPrice}
                                    onChange={(e)=>setMinPrice(e.target.value)}
                                    className='w-full border px-2 py-1 border-slate-400 focus:outline-none'
                                    placeholder='Min'
                                />
                                <input 
                                    type="number" 
                                    name="endPrice" 
                                    id="endPrice" 
                                    value={maxPrice}
                                    onChange={(e)=>setMaxPrice(e.target.value)}
                                    className='w-full border px-2 py-1 border-slate-400 focus:outline-none'
                                    placeholder='Max'
                                />
                            </div>
                            <button type='submit' className='p-2 bg-blue-500 text-white rounded-sm'>
                                <BiSolidRightArrow></BiSolidRightArrow>
                            </button>
                        </form>
                    {/* </div> */}
                </div>
                <div className='col-span-4 grid grid-cols-5 gap-5'>
                    {filteredProducts.map((product,index)=><ProductCard product={product} key={index}></ProductCard>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop