import React from 'react'
import useProducts from '../../api/useProducts';
import ProductCard from '../../components/productCard/ProductCard';

const ProductDataLoad = () => {
  const [products] = useProducts();
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold mb-3'>Product</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {products && products.slice(0,15)?.map((product,index)=><ProductCard product={product} key={index}></ProductCard>)}
            </div>
        </div>
    </div>
  )
}

export default ProductDataLoad;