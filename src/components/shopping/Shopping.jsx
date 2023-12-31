import React, {useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { GrAdd } from 'react-icons/gr'
import { FaEdit, FaTrash } from 'react-icons/fa';
import Address from '../Modal/Address'
import useCard from '../../hooks/useCard';
import { getData } from '../../api/utils';
import AddressUpdate from '../Modal/AddressUpdate';
import { AuthContext } from '../../context/AuthProvider';
import Payment from '../../pages/dashboard/payment/Payment';

const Shopping = () => {
    const [address, setAddress] = useState([]);
    // address modal
    const [isOpen, setIsOpen] = useState(false);
    // address data update 
    const [isOpenAddress,setIsOpenAddress] = useState(false);
    // discount use state
    const [discountPrice, setDiscountPrice] = useState(0);
    const [errorCoupon, setErrorCoupon] = useState(false);
    const [successfulCoupon, setSuccessfulCoupon] = useState(false);
    // next button step
    const [nextButton,setNextButton] = useState(false);
    //payment method show
    const [paymentVisible,setPaymentVisible] = useState(false);
    // when user confirm data
    const [confirmOrder, setConfirmOrder] = useState(false);
    //selected Address
    const [selectedAddress, setSelectedAddress] = useState();
    const {searchValue,orderPayment} = useContext(AuthContext);
    // loading add to card data from useCard hook
    const [card] = useCard();

    // address modal
    const closeModal=()=>setIsOpen(false);
    const openModal=()=>setIsOpen(true);
    // address update 
    const isOpenModalAddress=()=>setIsOpenAddress(true);
    const closeAddressModal=()=>setIsOpenAddress(false);
    // address api call
    useEffect(()=>{
        getData("address")
        .then((data)=>setAddress(data))
        .catch((err)=>console.log(err.message))
    },[address])

    // product total price calculate
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
              fetch(`${process.env.REACT_APP_API_URL}/address/${id}`,{
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

    // handle address Selected
    const handleAddressSelected=(addressInfo)=>{
        if(addressInfo){
            setNextButton(true)
            setSelectedAddress(addressInfo)
        }else{
            setNextButton(false)
        }
    }

    // click next step and show payment methord
    const handleNextStep=()=>{
        setPaymentVisible(true)
    }

    // payment info
    useEffect(()=>{
        if(orderPayment){
            setConfirmOrder(true)
        }
    },[orderPayment])

    // handle confirm order
    const handleConfirmOrder=()=>{
        if(card?.length>0 && orderPayment){
            const orderDetails ={...orderPayment,selectedAddress};
            fetch(`${process.env.REACT_APP_API_URL}/order`,{
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(orderDetails)
            })
            .then((res)=>res.json())
            .then((data)=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Order success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please check payment and product card",
            });
        }
    }

  return (
    <>
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className='grid grid-cols-3 gap-10 w-full'>
                <div className='col-span-2 h-[70px] bg-white'>
                    <div>
                        <button onClick={openModal} className='py-5 px-5 text-2xl flex items-center gap-3'>
                            <GrAdd></GrAdd> Add Your Address
                        </button>
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
                                                onClick={()=>handleAddressSelected(address)}
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
                        {nextButton ?
                        <button 
                            onClick={()=>handleNextStep()}
                            className="px-10 mt-5 py-2 text-center text-white rounded-md bg-blue-500 hover:bg-black duration-500">
                            Next
                        </button>:
                        <button className="px-10 mt-5 py-2 text-center text-white rounded-md bg-blue-500 opacity-50 cursor-not-allowed">Next </button>
                        }
                    </div>

                    {/* payment methord */}
                    {paymentVisible && 
                        <div className='bg-white mt-5 p-5 rounded-md'>
                            <Payment price={price} card={card}></Payment>
                        </div>
                    }

                    {confirmOrder && 
                        <div className='bg-white p-5 rounded-md border-t text-end mb-20'>
                            <button onClick={()=>handleConfirmOrder()} className='px-10 py-2 text-center text-white rounded-md bg-blue-500 hover:bg-black duration-500'>Confirm Order</button>
                        </div>
                    }

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
            {/* address modal */}
            <Address
                isOpen={isOpen}
                closeModal={closeModal}
            ></Address>
            {/* address update modal */}
            <AddressUpdate
                isOpen={isOpenAddress}
                closeModal={closeAddressModal}
            ></AddressUpdate>
        </div>
    </>
  )
}

export default Shopping;