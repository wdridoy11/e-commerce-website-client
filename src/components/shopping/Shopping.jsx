import React, {useContext, useEffect, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import Address from '../Modal/Address'
import useCard from '../../hooks/useCard';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AddressUpdate from '../Modal/AddressUpdate';
import Payment from '../../pages/dashboard/payment/Payment';
import { getData } from '../../api/utils';
import { AuthContext } from '../../context/AuthProvider';

const Shopping = () => {
    const [address, setAddress] = useState([]);
    // discount use state
    const [discountPrice, setDiscountPrice] = useState(0);
    const [errorCoupon, setErrorCoupon] = useState(false);
    const [successfulCoupon, setSuccessfulCoupon] = useState(false);

    const {searchValue} = useContext(AuthContext);

    // loading add to card data from useCard hook
    const [card] = useCard();

    // address modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal=()=>setIsOpen(false);
    const openModal=()=>setIsOpen(true);
    
    // address update 
    const [isOpenAddress,setIsOpenAddress] = useState(false);
    const isOpenModalAddress=()=>setIsOpenAddress(true)
    const closeAddressModal=()=>setIsOpenAddress(false);


    // product total calculate
    const productPrice = card.reduce((sum,product)=>product.price * product.quantity + sum,0);
    const subtotalPrice = productPrice.toFixed(2);
    const shippingChange = 20;
    const totalPrice = parseFloat(subtotalPrice) + shippingChange;
    const productTotalPrice = totalPrice.toFixed(2);
    const price = discountPrice === 0? productTotalPrice : discountPrice.toFixed(2);

    // Coupon code 10% discount handle
    const handleCoupon = (event) =>{
        event.preventDefault();
        const couponCode = event.target.coupon.value;
       if(couponCode === "Ridoy30"){
            const disCountPresent = 10 / 100;
            const disCountPriceTotal = productTotalPrice - (productTotalPrice * disCountPresent);
            setDiscountPrice(disCountPriceTotal);
            setSuccessfulCoupon(true);
            setErrorCoupon(false);
       }else if(couponCode === " "){
            alert("Please enter a Coupon Code");
       }else{
            setDiscountPrice(0);
            setErrorCoupon(true);
            setSuccessfulCoupon(false);
       }
    }

    useEffect(()=>{
        getData("address")
        .then((data)=>setAddress(data))
        .catch((err)=>console.log(err.message))
    },[])


    // handle address delete
    const handleAddressDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You will delete your address",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/address/${id}`,{
                method:"DELETE",
                headers:{
                    "content-type":"application/json"
                }
              })
              .then((res)=>res.json())
              .then((data)=>{
                if(data.deletedCount>0){
                const remaining = address.filter(address=>address._id !== id);
                setAddress(remaining);
                  Swal.fire(
                    'Deleted!',
                    'Your address deleted successfully',
                    'success'
                  )
                }
              })
            }
        })
    }


    useEffect(()=>{
        // console.log("shoping",searchValue)
    },[searchValue])











  return (
    <>
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className='grid grid-cols-3 gap-10 w-full'>
                <div className='col-span-2 h-[70px] bg-white'>
                    <div>
                        <button onClick={openModal} className='py-5 px-5 text-2xl flex items-center
                         gap-3'><GrAdd></GrAdd> Add Your Address</button>
                    </div>
                    <div className='bg-white p-5 mt-5 rounded-md'>
                        <h3 className='text-xl font-medium mb-5'>Shopping Address (Please select only one! shipping address)</h3>
                        <div className='divider'></div>
                        <div>
                            {address && address.map((address)=><div key={address._id} className='grid grid-cols-5 items-center border-b py-3'>
                                    <div className='col-span-1'>
                                        <p className='text-xl font-medium mb-1'>{address?.area}</p>
                                        <p className='capitalize'>
                                            <input 
                                                type="radio" 
                                                name="type" 
                                                id="type" 
                                            />  ({address?.type})
                                        </p>
                                    </div>
                                    <div className='col-span-3'>
                                        <ul className='list-none'>
                                        <li>Name: {address?.name}</li>
                                        <li>Email: {address?.email}</li>
                                        <li>Phone: {address?.phone}</li>
                                        <div className='flex'>
                                            <li>{address?.area},</li>
                                            <li>{address?.selectCity},</li>
                                            <li>{address?.selectProvince},</li>
                                        </div>
                                        <li>Address: {address?.address}</li>
                                        </ul>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div>
                                            <button onClick={isOpenModalAddress} className='flex items-center gap-2 text-md font-normal text-blue-500'>
                                                <FaEdit></FaEdit> Edit
                                            </button>
                                        </div>
                                        <div>
                                           <button onClick={()=>handleAddressDelete(address._id)} className='flex items-center gap-2 text-md font-normal text-blue-500'>
                                                <FaTrash></FaTrash> Delete
                                            </button>
                                        </div>
                                    </div>
                            </div>)}
                        </div>
                    </div>
                    <div className='bg-white mt-5 p-5 rounded-md'>
                        <Payment price={price} card={card}></Payment>
                    </div>
                </div>
                <div className='col-span-1 bg-white p-10'>
                    <h3 className='text-xl font-medium mb-3'>Checkout Summary</h3>
                    <div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Subtotal</p>
                            <p>${subtotalPrice} USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Shipping</p>
                            <p>${shippingChange} USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p>Total</p>
                            <p>${productTotalPrice} USD</p>
                        </div>
                        <div className='flex justify-between border-t mb-3 pt-3'>
                            <p><strong>Payable Total</strong></p>
                            <p><strong id='totalPrice'>${price} USD</strong></p>
                            {/* <p><strong id='totalPrice'>${discountPrice === 0? productTotalPrice : discountPrice.toFixed(2)} USD</strong></p> */}
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <form onSubmit={handleCoupon} className='grid grid-cols-5'>
                            <div className='col-span-4'>
                                <input 
                                    type="text" 
                                    name='coupon'
                                    id='coupon'
                                    className='w-full input input-bordered rounded-none'
                                    placeholder='Enter your coupon code'
                                    required
                                />
                                <label id='errorText' className='text-red-600 mt-1 inline-block pl-2'>
                                    {errorCoupon === false ? "": "Your Coupon code in not Valid"}
                                </label>
                                <label id='successCoupon' className='text-green-400 mt-1 inline-block pl-2'>
                                    {successfulCoupon === false ? "": "10% discount Successful"}
                                </label>
                            </div>
                            <input 
                                type="submit"
                                value="Apply" 
                                className='px-5 h-[48px] bg-blue-500 text-white text-lg font-medium cursor-pointer'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Address
                isOpen={isOpen}
                closeModal={closeModal}
            ></Address>
            <AddressUpdate
                isOpen={isOpenAddress}
                closeModal={closeAddressModal}
            ></AddressUpdate>
        </div>
    </>
  )
}

export default Shopping;