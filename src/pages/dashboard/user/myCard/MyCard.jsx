import React from 'react'
import Swal from 'sweetalert2';
import useCard from '../../../../hooks/useCard'
import { FaTrash, FaUser} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MyCard = () => {

const [card, refetch] = useCard();

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
      fetch(`http://localhost:5000/carts/${item._id}`,{
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
                            <img className='w-12' src={product?.image} alt="" />
                        </td>
                        <td>
                          <p>{product?.phone_name}</p>
                          <p>{product?.brand}</p>
                        </td>
                        <td>{product?.quantity}</td>
                        <td>${product?.price}</td>
                        <td>${product?.price * product?.quantity}</td>
                        <th>
                            <div>
                                <button onClick={()=>handleDelete(product)} className="text-xl bg-[#B91C1C] text-white p-3 rounded-md"><FaTrash></FaTrash></button>
                            </div>
                        </th>
                    </tr>)}
                </tbody>
              </table>
              <div className='divider'></div>
              <div className='text-end w-40'>
                  <Link to={'/dashboard/shopping'} className='blue-btn px-5 mr-10 flex items-center gap-2'>
                      Place Order<BsArrowRight className='text-xl'></BsArrowRight>
                  </Link>
              </div>
            </div>
        </div>
    </>
  )
}

export default MyCard