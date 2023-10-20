import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaEdit,FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProduct = () => {
  
  const {user} = useContext(AuthContext)
  const [sellerProduct, setSellerProduct] = useState();
  const navigate = useNavigate();
  useEffect(()=>{
      fetch(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/my_products?email=${user?.email}`)
      .then((res)=>res.json())
      .then((data)=>setSellerProduct(data))
      .catch((err)=>console.log(err.message))
  },[])

  const handleProductUpdate=(product)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You will update your product",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(product)
        navigate(`/dashboard/product_update/${product._id}`)
      }
    })
  }

  const handleProductDelete=(product)=>{
    const id = product._id;
    Swal.fire({
      title: 'Are you sure?',
      text: "You will delete your product",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/products/${id}`,{
          method:"DELETE",
          headers:{
            "content-type":"application"
          }
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.deletedCount>0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        const remaining = sellerProduct.filter((product)=>product._id !== id);
        setSellerProduct(remaining);
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
                        <div className='flex items-center gap-3'>
                            <div>
                                <p>{product?.status}</p>
                            </div>
                            <div className='flex gap-2'>
                              <button onClick={()=>handleProductUpdate(product)} className='p-2 bg-blue-500 text-white rounded-sm text-md'><FaEdit></FaEdit></button>
                              <button onClick={()=>handleProductDelete(product)} className='p-2 bg-[#FF5039] text-white rounded-sm text-md'><FaTrashAlt></FaTrashAlt></button>
                            </div>
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

export default MyProduct