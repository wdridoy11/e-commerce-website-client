import React, { useContext } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import useCategory from '../../../../hooks/useCategory';
import { AuthContext } from '../../../../context/AuthProvider';

const img_hosting_token=process.env.REACT_APP_IMAGE_UPLOAD_TOKEN;
const categoryName=[
    "Ipad",
    "Mobile",
    "Laptop",
    "Headphone",
    "Televisions",
    "AirPods Pro"
]
const AddProduct = () => {
    
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url,{
            method:"POST",
            body:formData,
        })
        .then((res)=>res.json())
        .then((imgResponse)=>{
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                const {brand_name, category, price, product_description, product_name, small_description}= data;
                const newItem = {seller_email: user?.email,price: parseFloat(price), user_rating:null, user_review:0, product_image: imgUrl, brand_name, category, product_description, product_name, small_description}
                fetch(`http://localhost:5000/seller_product`,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(newItem)
                })
                .then((res)=>res.json())
                .then((data)=>console.log(data))
            }
        })
        
    };


  return (
    <div className='w-full h-screen pt-10 lg:px-20'>
        <div>
            <div>
                <div>
                    <form className='w-full border p-10 rounded bg-white' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-center text-3xl font-semibold mb-10'>Add Product</h1>
                        <div className='grid md:grid-cols-2 gap-5 mb-2'>
                            <div>
                                <label className='text-base font-medium' htmlFor="brand">Product Brand</label>
                                <input 
                                    type="text" 
                                    name='brand'
                                    id='brand'
                                    placeholder='Product brand'
                                    {...register("brand", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            <div>
                                <label className='block text-base font-medium mb-1'>Product Category</label>
                                <select className="select select-bordered w-full" {...register("category")}>
                                    {categoryName && categoryName.map((category, index)=><option key={index} value={category}>{category}</option>)}
                                </select>
                            </div>
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
                                    {...register("small_description", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            <div>
                                <label className='text-base font-medium' htmlFor="small_description">Product features</label>
                                <input 
                                    type="text" 
                                    name='product_features'
                                    id='product_features'
                                    placeholder='Product features'
                                    // {...register("product_features", { required: true })}
                                    className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                                />
                            </div>
                            <div>
                                <label className='text-base font-medium' htmlFor="image">Product image</label>
                                <input 
                                    type="file"
                                    name='image'
                                    id='image'
                                    accept="image/png, image/gif, image/jpeg"
                                    {...register("image", { required: true })}
                                    className="file-input file-input-bordered w-full" 
                                />
                            </div>
                            <div>
                                <label className='text-base font-medium' htmlFor="product_gallery">Product Gallery image</label>
                                <input 
                                    type="file"
                                    name='product_gallery'
                                    id='product_gallery'
                                    multiple="multiple"
                                    // {...register("product_gallery", { required: true })}
                                    className="file-input file-input-bordered w-full" 
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
                                {...register("product_description", { required: true })}
                                className='w-full border px-3 py-3 mb-2 mt-1 rounded-md focus:outline-0 focus:ring-1 focus:ring-cyan-400'
                            ></textarea>
                        </div>
                            <input 
                                type="submit" 
                                value="Add Product" 
                                className=' px-8 rounded-sm py-2 bg-[#FF5039] text-white font-medium hover:bg-black duration-500 cursor-pointer'
                            />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct