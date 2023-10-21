import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { FaTrash, FaUser} from 'react-icons/fa';
import useCard from '../../../../hooks/useCard'
import cardImg from '../../../../assets/card.png'
import Loader from '../../../../components/shared/loader/Loader';

const MyCard = () => {

const [card, refetch, isLoading] = useCard();
// const [loading, setLoading] = useState(false);
// handle delete card item
const handleDelete=(item)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/carts/${item._id}`,{
        method:"DELETE",
        headers:{
          "content-type":"application/json"
        }
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        if(data.deletedCount>0){
          refetch();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  })
}

  return (
    <>
      {isLoading ? <Loader></Loader> :
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className="bg-white pb-5">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th className='capitalize text-base font-medium'>No</th>
                    <th className='capitalize text-base font-medium'>Image</th>
                    <th className='capitalize text-base font-medium'>Info</th>
                    <th className='capitalize text-base font-medium'>Quantity</th>
                    <th className='capitalize text-base font-medium'>Price</th>
                    <th className='capitalize text-base font-medium'>Total</th>
                    <th className='capitalize text-base font-medium'>Activon</th>
                  </tr>
                </thead>
                <tbody>
                    {card && card.map((product,index)=><tr key={product._id}>
                        <th>{index+1}</th>
                        <td>
                            <img className='w-16' src={product?.product_image} alt={product?.product_name} />
                        </td>
                        <td>
                          <h4 className='text-base font-medium'>{product?.product_name}</h4>
                          <p className='text-sm font-normal text-[#A5A5A5]'>Brand: {product?.brand}</p>
                        </td>
                        <td className='text-base font-medium'>{product?.quantity}</td>
                        <td className='text-base font-medium'>${product?.price}</td>
                        <td className='text-base font-medium'>${product?.price * product?.quantity}</td>
                        <th>
                            <div>
                                <button onClick={()=>handleDelete(product)} className="text-xl bg-[#B91C1C] text-white p-3 rounded-md"><FaTrash></FaTrash></button>
                            </div>
                        </th>
                    </tr>)}
                </tbody>
              </table>
              {card && card.length>0 ? <>
                <div className='divider'></div>
                <div className='text-end w-44 pl-5'>
                    <Link to={'/dashboard/shopping'} className='blue-btn px-5 mr-10 flex items-center gap-2'>
                        Place Order<BsArrowRight className='text-xl'></BsArrowRight>
                    </Link>
                </div>             
              </>
              :
              <div>
                  <img className='w-52 mx-auto' src={cardImg} alt="card" />
                  <p className='text-center text-xl font-semibold'>Your Cart is Empty!</p>
              </div>
              }
            </div>
        </div>
        }
    </>
  )
}

export default MyCard