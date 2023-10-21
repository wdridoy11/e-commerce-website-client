import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import useCard from '../../hooks/useCard';
import useWishlist from '../../hooks/useWishlist'
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../../components/shared/loader/Loader';

const WishlistItem = () => {
  const [card] = useCard();
  const {user} = useContext(AuthContext);
  const [wishlist,refetch,isLoading] = useWishlist();
  
// handle delete card item
const handleDelete=(id)=>{
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
      fetch(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/wishlist/${id}`,{
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

  // handleAddToCard button
  const handleAddToCard = (item) =>{
    const { brand, product_name, price, _id, product_image, quantity } = item;
    // check privous card data id and new data id
    const cardIdMatch = card.find((item)=> item.productId === _id && item.email === user?.email);
    if(cardIdMatch){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Your already added',
            showConfirmButton: false,
            timer: 1500
        })
    }else{
        if(user && user?.email){
            const productItem ={productId: _id,email:user?.email, quantity, brand, product_image, product_name, price}
            fetch(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/carts`,{
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(productItem)
            })
            .then((res)=>res.json())
            .then((data)=>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'New item added success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }        
    }
}

  return (
    <>
      {isLoading ? <Loader></Loader> : 
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className="bg-white">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th className='capitalize text-base font-medium'>No</th>
                    <th className='capitalize text-base font-medium'>Image</th>
                    <th className='capitalize text-base font-medium'>Info</th>
                    <th className='capitalize text-base font-medium'>Quantity</th>
                    <th className='capitalize text-base font-medium'>Price</th>
                    <th className='capitalize text-base font-medium'>Add to Card</th>
                    <th className='capitalize text-base font-medium'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    {wishlist && wishlist?.map((product,index)=><tr key={product._id}>
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
                        <th>
                            <div>
                                <button onClick={()=>handleAddToCard(product)} className="text-xl bg-[#F57224] text-white p-3 rounded-md"><IoMdCart></IoMdCart></button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <button onClick={()=>handleDelete(product._id)} className="text-xl bg-[#B91C1C] text-white p-3 rounded-md"><FaTrash></FaTrash></button>
                            </div>
                        </th>
                    </tr>)}
                </tbody>
              </table>
            </div>
        </div>
        }
    </>
  )
}

export default WishlistItem