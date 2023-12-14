import React from 'react'
import { categoriesData } from './CategoriesData'
import Categorie from './Categorie'
import useProducts from '../../api/useProducts'

const Categories = () => {
  const [products] = useProducts();
  // console.log(products);
  return (
    <div>
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold mb-3'>Categories</h1>
            <div className='grid grid-cols-2 lg:grid-cols-8 md:grid-cols-4  gap-2'>
                {categoriesData.map((categorie)=><Categorie 
                    key={categorie.id} 
                    categorie={categorie}
                    >
                </Categorie>)}
            </div>
        </div>
    </div>
  )
}

export default Categories
