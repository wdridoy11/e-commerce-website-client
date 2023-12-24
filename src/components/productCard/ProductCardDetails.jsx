import React, {useContext, useState, } from 'react'
import Swal from 'sweetalert2';
import { MdAdd } from 'react-icons/md';
import '@smastrom/react-rating/style.css';
import useCard from '../../hooks/useCard';
import SliderImage from "react-zoom-slider";
import { BsSuitHeart } from 'react-icons/bs';
import { DiGitCompare } from 'react-icons/di';
import RelatedProduct from './RelatedProduct';
import { Rating } from '@smastrom/react-rating';
import { FaMinus, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useWishlist from '../../hooks/useWishlist';
import AddToCardLogin from '../Modal/AddToCardLogin';
import { AuthContext } from '../../context/AuthProvider';
import "./productSlider.css"
// import SliderImage from "react-zoom-slider";

const ProductCardDetails = () => {
    // by default quantity
    const [quantity,setQuantity]= useState(1);
    // if user not login but user click add to card or buy btn then show popup
    const [isOpen, setIsOpen] = useState(false);
    // only user add to card data load from useCard hook
    const [card,refetch] = useCard();
    const {user}= useContext(AuthContext)
    // data loading form routes
    const productsData = useLoaderData();
    const { brand, product_name, price, _id, product_image, category, product_description,user_rating, small_description, product_imageGallery } = productsData;
    // wishlist
    const [wishlist] = useWishlist();

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
                fetch(`${process.env.REACT_APP_API_URL}/carts`,{
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
    
    // wishlist button
    const handleWishlist=(id)=>{
         // check privous card data id and new data id
         const cardIdMatch = wishlist.find((item)=> item.productId === id && item.email === user?.email);
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
                 fetch(`${process.env.REACT_APP_API_URL}/wishlist`,{
                     method:"POST",
                     headers:{
                         "content-type": "application/json"
                     },
                     body: JSON.stringify(productItem)
                 })
                 .then((res)=>res.json())
                 .then((data)=>{
                     if(data.insertedId){

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
    const handleBuyNow=(e)=>{
        console.log(e)
    }

    // image gallery get array and conver object
    const result = product_imageGallery.map((url,index)=>{
        return{
            id: index+1,
            image: url
        }
    })

  return (
    <div className='pt-10 pb-20 bg-[#F8F8F8] border-t'>
        <div className='container mx-auto px-5'>
            <div>
                <div>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div>
                            <div className='w-full p-10 bg-white'>
                                <SliderImage
                                    data={result}
                                    showDescription={false}
                                    direction="right"
                                />
                            </div>
                        </div>
                        <div className='bg-white p-7'>
                            <h3 className='text-2xl font-semibold text-[#333] mb-3'>{product_name}</h3>
                            <div className='flex gap-1 items-center'>
                                <div>
                                    <Rating style={{ maxWidth: 90 }} value={user_rating} readOnly />
                                </div>
                                <div className='text-base font-medium text-[#777]'>(10 customer reviews)</div>
                            </div>
                            <p className='text-base text-[#777] font-normal mt-3'>{small_description}</p>

                            <div className='mt-3'>
                                <p className='text-sm text-[#9e9e9e] font-medium'>Brand: <span className='text-black'>{brand}</span> </p>
                                <p className='text-sm text-[#9e9e9e] font-medium'>Category: <span className='text-black'>{category}</span></p>
                            </div>
                            <div>
                            </div>
                            <div className="border-b pt-2"></div> 
                            <p className='text-4xl font-medium text-blue-500 mb-5 mt-3'>$<span>{price}</span></p>
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
                            <div className="border-b pt-5"></div> 
                            <div className='flex items-center gap-10 mt-3'>
                                <div>
                                    <button className='flex items-center gap-1 text-lg font-medium text-black hover:text-[#FF5039]
                                    duration-500'>
                                        <DiGitCompare></DiGitCompare> Compare
                                    </button>
                                </div>
                                <div>
                                    <button onClick={()=>handleWishlist(_id)} className='flex items-center gap-1 text-lg font-medium text-black hover:text-[#FF5039]
                                    duration-500'>
                                        <BsSuitHeart></BsSuitHeart> Add to wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden mt-5'>
                        <div className='bg-white p-5 h-auto float-left lg:w-[68.5%] mr-3 mb-5'>
                            <h3 className='text-2xl font-semibold text-black mb-2'>Product Details:</h3>
                            <p className='text-base text-black font-medium'>{product_description}</p>
                        </div>
                        {/* Related product start */}
                        <div className='bg-white p-4 lg:w-[30%] float-right'>
                            <RelatedProduct category={category} Id={_id}></RelatedProduct>
                        </div>
                        {/* Related product start */}
                    </div>
                </div>
            </div>
            {/* product details page gird end*/}
        </div>
        {/* login modal */}
        <AddToCardLogin
            isOpen={isOpen}
            closeModal={closeModal}
        ></AddToCardLogin>
    </div>
  )
}

export default ProductCardDetails