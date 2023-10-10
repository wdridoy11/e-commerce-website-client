import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard';

const ProductDataLoad = () => {
    
    const [products,setProducts] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    //     .then((res)=>res.json())
    //     .then((data)=>setProducts(data.data))
    //     .catch((err)=>console.log(err.message))
    // },[])

    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
        .catch((err)=>console.log(err.message))
    },[])

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold mb-3'>Product</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {products.map((product,index)=><ProductCard product={product} key={index}></ProductCard>)}
            </div>
        </div>
    </div>
  )
}

export default ProductDataLoad