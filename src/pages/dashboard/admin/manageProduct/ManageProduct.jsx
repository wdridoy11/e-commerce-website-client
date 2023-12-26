import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FaCheck , FaTrash} from 'react-icons/fa';
import { TbListDetails } from "react-icons/tb";
import { Link} from 'react-router-dom';
import { getData } from '../../../../api/utils';
import Loader from '../../../../components/shared/loader/Loader';

const ManageProduct = () => {

    const [loading, setLoading] = useState(true);
    const [sellerProduct, setSellerProduct] = useState([]);
    // seller product data get
    useEffect(()=>{
        getData("seller_product")
        .then((data)=>{
          setSellerProduct(data.reverse())
          setLoading(false)
        })
        .catch((err)=>console.log(err.message))
    },[sellerProduct])

    const handleMakeApproved=(product)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You will approve this product",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        console.log("Result",result);
        if (result.isConfirmed) {
          fetch(`${process.env.REACT_APP_API_URL}/seller_product/${product._id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
          const remaining = sellerProduct.filter((product)=>product._id !== product._id);
          setSellerProduct(remaining);
          if(data.insertedId){
            Swal.fire(
              'Congratulation!',
              'Successfully approved',
              'success'
            )
          }
        })
        }
      })
    }

    const handleDelete=(id)=>{
      Swal.fire({
          title: 'Are you sure?',
          text: "Will you delete this product ridoy",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${process.env.REACT_APP_API_URL}/product/${id}`,{
            method:"DELETE",
            headers:{
              "content-type":"application/json"
            }
          })
          .then((res)=>res.json())
          .then((data)=>{
            const remaining = sellerProduct.filter((product)=>product._id !== product._id);
            setSellerProduct(remaining);
            if(data.deletedCount>0){
              Swal.fire(
                'Deleted!',
                'Your wishlist product deleted successfully',
                'success'
              )
            }
          })
        }
      })
    }

  return (
    <>
    {loading ? <Loader></Loader>:
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
                    <th>View</th>
                    <th>View</th>
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
                    <td>
                      <Link to={`/productDetails/${product._id}`} className='inline-block text-xl bg-[#F57224] hover:bg-[#dc763b] duration-500 text-white p-3 rounded-md'>
                          <TbListDetails/>
                      </Link>
                    </td>
                    <td>
                        <div>
                            <button onClick={()=>handleDelete(product._id)} className="text-xl bg-[#B91C1C] text-white p-3 rounded-md"><FaTrash></FaTrash></button>
                        </div>
                    </td>
                  </tr>)}
                </tbody>
              </table>
            </div>
        </div>
        }
    </>
  )
}

export default ManageProduct