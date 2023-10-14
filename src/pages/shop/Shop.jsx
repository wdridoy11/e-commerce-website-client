import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard';
import { BiSolidRightArrow } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';


const Shop = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

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
    const handleFilterPrice =(e)=>{
        e.preventDefault();
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        const filteredData = products.filter((product)=>{
            const price = parseFloat(product.price);
            return price >= min && price <= max;
        })
        setFilteredProducts(filteredData)
    }

    // product category name find
    let categoryName =[];
    for(let i = 0 ;i<products.length;i++){
        let category = products[i].category;
        if(categoryName.indexOf(category) == -1){
            categoryName.push(category)
        }
    }

  return (
    <div>
        <div className='px-20 py-10'>
            <div className='grid grid-cols-5 gap-5'>
                <div className=' bg-white rounded p-5'>
                    {/* filter by price */}
                    <div className='border-b pb-5'>
                        <h3 className='text-lg font-medium text-black mb-2'>Price</h3>
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
                    </div>
                    {/* filter by category Name */}
                    <div className='pt-4 border-b pb-3'>
                        <h3 className='text-lg font-medium text-black mb-2'>Category</h3>
                        <div>
                            {categoryName.map((category,index)=><div key={index} className='flex justify-between'>
                                <div className='flex gap-2 mb-1'>
                                    <input 
                                        type="checkbox" 
                                        className='checkbox checkbox-sm checkbox-[#ddd] rounded-sm' 
                                        name="category" 
                                        id="category"
                                        value={category}
                                        // onClick={(e)=>setSelectedCategory([...selectedCategory,e.target.value])}
                                    />
                                    <p>{category}</p>
                                </div>
                                <div>
                                    <p>1</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
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