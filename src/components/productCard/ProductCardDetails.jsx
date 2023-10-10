import React, {useContext, useState, } from 'react'
import Swal from 'sweetalert2';
import { MdAdd } from 'react-icons/md';
import { FaMinus } from 'react-icons/fa';
import '@smastrom/react-rating/style.css';
import useCard from '../../hooks/useCard';
import RelatedProduct from './RelatedProduct';
import { Rating } from '@smastrom/react-rating'
import { useLoaderData } from 'react-router-dom';
import AddToCardLogin from '../Modal/AddToCardLogin';
import { AuthContext } from '../../context/AuthProvider';
// import SliderImage from "react-zoom-slider";
const descriptionText ='Apple iPhone 14 Pro Max- the latest name of Apple’s Pro Max lineup. Gives you a magical interaction with its groundbreaking features, innovative camera functionality, and outstanding outlook. All these specs are combined and make the iPhone 14 Pro Max one of the best iPhones to date. '

const ProductCardDetails = () => {

    const data = [
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg",
          text: "img1"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg",
          text: "img2"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg",
          text: "img3"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-mau-bac-1-org.jpg",
          text: "img4"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-mau-bac-6-org.jpg",
          text: "img5"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-1-org.jpg",
          text: "img6"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-10-org.jpg",
          text: "img7"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-12-org.jpg",
          text: "img8"
        }
      ];


    const {user}= useContext(AuthContext)
    const [rating, setRating] = useState(4);
    const [quantity,setQuantity]= useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [card,refetch] = useCard();

    // data loading form routes
    const productsData = useLoaderData();
    console.log(productsData)
    const { brand, product_name, price, _id, product_image, category, product_description, small_description, product_imageGallery } = productsData;
        
    // headless ui modal
    const closeModal=()=>setIsOpen(false);
    const openModal=()=>setIsOpen(true)

    // handle Quantity Up
    const handleQuantityUp=()=>setQuantity(quantity+1);
    // handle Quentity Down
    const handleQuentityDown=()=>{
        if(quantity<=1){
            
        }else{
            setQuantity(quantity-1)
        }
    }
    
    // handleAddToCard button
    const handleAddToCard=()=>{
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
                fetch(`http://localhost:5000/carts`,{
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
            }else{
                openModal();
            }            
        }
    }

    // handleBuyNow button
    const handleBuyNow=()=>{
        console.log("Hello HandleBuyNow")
    }

  return (
    <div className='pt-20 pb-20 bg-white border-t'>
        <div className='container mx-auto px-5'>
            {/* product details page gird start*/}
            <div className=''>
            {/* <div className='grid grid-cols-5 gap-5'> */}
                {/* product details start */}
                <div className='col-span-4'>
                    <div className='grid grid-cols-2  gap-5 p-5'>
                        <div className=''>
                            <div className='w-full'>
                            {/* <div className='w-full h-96 overflow-hidden'> */}
                                <img className='w-1/3 mx-auto' src={product_image} alt="" />
                            </div>
                            <div className='grid grid-cols-5'>
                                {product_imageGallery && product_imageGallery.map((image)=><img className='w-1/2  mx-auto' src={image} alt="" />)}
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-3xl font-semibold text-[#333] mb-3'>{product_name}</h3>
                            <div className='flex gap-1 items-center'>
                                <div>
                                    <Rating style={{ maxWidth: 90 }} value={rating} onChange={setRating} />
                                </div>
                                <div className='text-base font-medium text-[#777]'>(10 customer reviews)</div>
                            </div>
                            <p className='text-base text-[#777] font-normal mt-3'>{small_description}</p>

                            <div className='mt-3'>
                                <p className='text-base text-[#9e9e9e] font-medium'>Brand: <span className='text-black'>{brand}</span> </p>
                                <p className='text-base text-[#9e9e9e] font-medium'>Category: <span className='text-black'>{category}</span></p>
                            </div>
                            <div>
                            </div>
                            <div className="divider"></div> 
                            <p className='text-4xl font-medium text-blue-500 mb-5'>$<span>{price}</span></p>
                            {/* quentity area start */}
                            <div className='flex items-center gap-5 mb-5'>
                                <p className='text-base text-black font-medium'>Quantity</p>
                                <div className='flex items-center gap-2'>
                                    <button onClick={handleQuentityDown} 
                                        className={`${quantity === 1 || quantity<1 ? "disabled bg-[#ceced2] cursor-not-allowed":""}
                                         bg-[#eff0f5] p-2 rounded-sm hover:bg-[#dddee3]`}>
                                        <FaMinus className='text-lg text-black' />
                                    </button>
                                    <input 
                                        type="number" 
                                        value={quantity}
                                        name="quantity" 
                                        id="quantity" 
                                        min="1" 
                                        className='p-2' 
                                    />
                                    <button onClick={handleQuantityUp} className='bg-[#eff0f5] p-2 rounded-md hover:bg-[#dddee3]'>
                                        <MdAdd className='text-lg text-black' />
                                    </button>
                                </div>
                            </div>
                            {/* quentity area end */}
                            <div className='w-1/2 grid md:grid-cols-2 gap-2'>
                                <button className='w-full py-2 bg-blue-500 text-white font-medium rounded-sm 
                                   hover:bg-black duration-500' onClick={handleBuyNow}>Buy Now</button>
                                <button className='w-full py-2 bg-[#FF5039] text-white font-medium rounded-sm
                                 hover:bg-black duration-500' onClick={()=>handleAddToCard()}>Add To Card</button>
                            </div>
                            {/* <Link to={`/order`}>GO</Link> */}
                        </div>
                    </div>
                    <div className='bg-white mt-3 p-5'>
                        <h3 className='text-2xl font-semibold text-black mb-2'>Product Details:</h3>
                        <p className='text-base text-black font-medium'>{product_description}</p>
                    </div>
                </div>
                {/* product details end */}

                {/* Related product start */}
                {/* <div className='bg-white p-2'>
                     <RelatedProduct></RelatedProduct>
                </div> */}
                {/* Related product end */}
            </div>
            {/* product details page gird end*/}
        </div>
        <AddToCardLogin
            isOpen={isOpen}
            closeModal={closeModal}
        ></AddToCardLogin>
    </div>
  )
}

export default ProductCardDetails