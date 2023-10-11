import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard';

const Shop = () => {

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
        .catch((err)=>console.log(err.message))
    },[])

    console.log(products);



  return (
    <div>
        <div className='px-20 py-10'>
            <div className='grid grid-cols-5 gap-5'>
                <div className='w-full bg-white h-20 rounded'>
                    
                </div>
                <div className='col-span-4 grid grid-cols-5 gap-5'>
                    {products.map((product,index)=><ProductCard product={product} key={index}></ProductCard>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop