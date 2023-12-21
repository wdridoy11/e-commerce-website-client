import React, { useEffect, useState } from 'react'
import useProducts from '../../api/useProducts';
import ProductCard from '../../components/productCard/ProductCard';
import useCategory from '../../hooks/useCategory';

const TopProduct = () => {
    const [categoryName] = useCategory();
    const [products] = useProducts();
    const [selectedCategory, setSelectedCategory] = useState('Mobile');
    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(()=>{
        const productFilter= products.filter((product)=>product.category === selectedCategory);
        setFilteredProduct(productFilter)
    },[selectedCategory,products])
    
    const handleCategory=(e)=>{
        setSelectedCategory(e.target.value);
    }
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold mb-5 text-center'>Top Product</h1>
            <div className='flex flex-wrap gap-3 justify-center mb-8'>
                {categoryName && categoryName.map((category,index)=><button
                    key={index}
                    value={category}
                    onClick={handleCategory}
                    className={`px-10 py-2 font-medium text-base text-black border border-blue-500 rounded-full 
                    ${selectedCategory === category? "bg-blue-500 text-white":""}`}
                    >{category}
                </button>)}
            </div>
            <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {filteredProduct && filteredProduct?.map((product)=><ProductCard product={product} key={product._id}></ProductCard>)}
            </div>
        </div>
    </div>
  )
}

export default TopProduct