import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard';
import { BiSolidRightArrow } from 'react-icons/bi';
import { AuthContext } from '../../context/AuthProvider';
import useProducts from '../../api/useProducts';
import Sort from '../../components/sort/Sort';


const Shop = () => {

    const [products] = useProducts();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    // min price and max price state 
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const {searchValue,setSearchValue, sortByPrice,setSortByPrice,categoryFilter,setCategoryFilter} = useContext(AuthContext);

    // filter by category using api
    useEffect(()=>{
        if(categoryFilter?.length>0){
            fetch(`http://localhost:5000/products/category/${categoryFilter}`)
            .then((res)=>res.json())
            .then((data)=>{
                setFilteredProducts(data)
            })
        }else{
            setFilteredProducts(products)
        }
    },[products,categoryFilter.length])

    useEffect(()=>{
        if(sortByPrice.length>0){
            setFilteredProducts(sortByPrice)
        }else if(sortByPrice.length === 0){
            setFilteredProducts(products)
        }
    },[sortByPrice])

    // when user search and product then call this api
    useEffect(()=>{
        if(searchValue?.length>0){
            const searchValueCase = searchValue.toLowerCase();
            fetch(`${process.env.REACT_APP_API_URL}/search_product/${searchValueCase}`)
            .then((res)=>res.json())
            .then((data)=>{
                setFilteredProducts(data)
                setSearchValue("")
            })
            .catch((err)=>console.log(err.message))
        }
    },[searchValue])

    const handleFilterPrice= (e)=>{
        e.preventDefault();
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        const filteredData = filteredProducts.filter((product) => {
          const price = parseFloat(product.price);
          const priceMatch = isNaN(min) || isNaN(max) || (price >= min && price <= max);
          const categoryMatch =
            selectedCategories.length === 0 || selectedCategories.includes(product.category);
          return priceMatch && categoryMatch;
        });
        setFilteredProducts(filteredData);
    }

  return (
    <div>
        <div className='px-7 py-10'>
            <div className='grid md:grid-cols-5 gap-5'>
                <div className='bg-white rounded p-5'>
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
                                    required
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
                </div>
                <div className='md:col-span-4'>
                    <Sort products={filteredProducts}></Sort>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                         {filteredProducts?.map((product,index)=><ProductCard product={product} key={index}></ProductCard>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop