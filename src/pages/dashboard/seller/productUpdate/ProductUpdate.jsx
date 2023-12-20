import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const ProductUpdate = () => {
    const productData = useLoaderData();
    console.log(productData)
    const {brand, product_name,small_description, product_description, price, product_imageGallery, _id} = productData;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
        fetch(`${process.env.REACT_APP_API_URL}/products/${_id}`,{
          method:"PUT",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.modifiedCount){
                Swal.fire(
                    'Congratulation!',
                    'Product Updated successfully',
                    'success'
                )
            }
            console.log(data)
        })
    }
  return (
    <div className='w-full h-screen pt-10 lg:px-20'>
        <div>
            <div>
                <div>
                    <form className='w-full border p-10 rounded bg-white' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-center text-3xl font-semibold mb-10'>Update Product</h1>
                        <div className='grid md:grid-cols-2 gap-5 mb-2'>
                            <div>
                                <label className='text-base font-medium' htmlFor="brand">Product Brand</label>
                                <input 
                                    type="text" 
                                    name='brand'
                                    id='brand'
                                    placeholder='Product brand'
                                    defaultValue={brand}
                                    {...register("brand", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            {/* <div>
                                <label className='block text-base font-medium mb-1'>Product Category</label>
                                <select className="select select-bordered w-full" {...register("category")}>
                                    {categoryName && categoryName.map((category, index)=><option key={index} value={category}>{category}</option>)}
                                </select>
                            </div> */}
                            <div>
                                <label className='text-base font-medium' htmlFor="product_name">Product name</label>
                                <input 
                                    type="text" 
                                    name='product_name'
                                    id='product_name'
                                    placeholder='Product name'
                                    defaultValue={product_name}
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
                                    defaultValue={price}
                                    {...register("price", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            <div>
                                <label className='text-base font-medium' htmlFor="small_description">Small description</label>
                                <input 
                                    type="text" 
                                    name='small_description'
                                    id='small_description'
                                    placeholder='Small description'
                                    defaultValue={small_description}
                                    {...register("small_description", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            <div>
                                <label className='text-base font-medium' htmlFor="product_gallery1">Product Gallery image one</label>
                                <input 
                                    type="text" 
                                    name='product_gallery1'
                                    id='product_gallery1'
                                    placeholder='Product Gallery URL'
                                    defaultValue={product_imageGallery && product_imageGallery[0]}
                                    {...register("product_gallery1", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            <div>
                                <label className='text-base font-medium' htmlFor="product_gallery2">Product Gallery image two</label>
                                <input 
                                    type="text" 
                                    name='product_gallery2'
                                    id='product_gallery2'
                                    placeholder='Product Gallery URL'
                                    defaultValue={product_imageGallery && product_imageGallery[1]}
                                    {...register("product_gallery2", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label className='text-base font-medium' htmlFor="product_description">Product description</label>
                            <textarea 
                                name="product_description" 
                                id="product_description" 
                                cols="30" 
                                rows="5"
                                placeholder='Product description...'
                                defaultValue={product_description}
                                {...register("product_description", { required: true })}
                                className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                            ></textarea>
                        </div>
                            <input 
                                type="submit" 
                                value="Update Product" 
                                className=' px-8 rounded-sm py-2 bg-[#FF5039] text-white font-medium hover:bg-black duration-500 cursor-pointer'
                            />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductUpdate