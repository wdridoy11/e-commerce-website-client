import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa';

const ManageProduct = () => {

    const [sellerProduct, setSellerProduct] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/seller_product`)
        .then((res)=>res.json())
        .then((data)=>setSellerProduct(data))
    },[])

    const handleMakeApproved=(product)=>{
      console.log("product",product)
        fetch(`http://localhost:5000/seller_product/${product._id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.matchedCount>0){
              fetch(`http://localhost:5000/products`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(product)
            })
            .then((res)=>res.json())
            .then((data)=>{
              console.log("congration",data)
            })
          }
        })
    }


  return (
    <>
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                    {sellerProduct && sellerProduct?.map((product,index)=><tr key={product._id}>
                    <th>{index+1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={product?.product_image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{product?.product_name.length>30?`${product?.product_name.slice(0,30)}...`:product?.product_name}</td>
                    <td>{product?.seller_email}</td>
                    <td>{product?.product_description.length>50?`${product?.product_description.slice(0,50)}...`:product?.product_description}</td>
                    <th>
                        <div className='flex items-center gap-4'>
                            <p className={product?.status === "pending"?"text-[#AE7B2B]":"text-[#287855]"}>{product?.status}</p>
                            <button 
                              onClick={()=>handleMakeApproved(product)}
                              className={product?.status === "approved"?"p-4 rounded-full bg-[#287855] text-white"
                              :"p-4 rounded-full bg-[#80E2B7] text-white"} disabled={product?.status === "approved"?true:false}><FaCheck></FaCheck>
                            </button>
                        </div>
                    </th>
                  </tr>)}
                  
                </tbody>
              </table>
            </div>
        </div>
    </>
  )
}

export default ManageProduct