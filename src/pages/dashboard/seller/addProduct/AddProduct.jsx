import React, { useContext } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import useCategory from '../../../../hooks/useCategory';
import { AuthContext } from '../../../../context/AuthProvider';

const AddProduct = () => {
    const [categoryName] = useCategory();
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
    };


  return (
    <div className='w-full h-screen pt-10 lg:px-10'>
        <div>
            <div>
                <div>
                    <form className='w-full border p-10 rounded bg-white' onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid md:grid-cols-2 gap-5 mb-2'>
                            <div>
                                <label className='text-base font-medium' htmlFor="brand">Product Brand</label>
                                <input 
                                    type="text" 
                                    name='brand'
                                    id='brand'
                                    placeholder='Product brand'
                                    {...register("brand_name", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            <div>
                                <label className='block text-base font-medium mb-1'>Product Category</label>
                                <select className="select select-bordered w-full" {...register("category")}>
                                    {categoryName && categoryName.map((category, index)=><option key={index} value={category}>{category}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 gap-5 mb-2'>
                            <div>
                                <label className='text-base font-medium' htmlFor="product_name">Product name</label>
                                <input 
                                    type="text" 
                                    name='product_name'
                                    id='product_name'
                                    placeholder='Product name'
                                    {...register("product_name", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            <div>
                                <label className='text-base font-medium' htmlFor="price">Product Price</label>
                                <input 
                                    type="number" 
                                    name='price'
                                    id='price'
                                    placeholder='Product Price'
                                    {...register("brand_name", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct