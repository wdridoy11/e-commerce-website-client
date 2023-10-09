import React from 'react'
import { categoriesData } from './CategoriesData'
import Categorie from './Categorie'

const Categories = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold mb-3'>Categories</h1>
            <div className='grid grid-cols-8 gap-2'>
                {categoriesData.map((categorie)=><Categorie key={categorie.id} categorie={categorie}></Categorie>)}
            </div>
        </div>
    </div>
  )
}

export default Categories