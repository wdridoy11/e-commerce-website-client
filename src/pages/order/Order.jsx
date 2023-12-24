import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import Loader from '../../components/shared/loader/Loader';
import useProducts from '../../api/useProducts';

const Order = () => {
    const [orderInformation, setOrderInformation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orderProductId, setOrderProductId] = useState([]);
    const [products] = useProducts();

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/order`)
        .then((res)=>res.json())
        .then((data)=>{
                setOrderInformation(data)
            data?.map((product)=>{
                setOrderProductId(product.productId)
            })
            setLoading(false)
        })
    },[])

    // user ordered Id and our product id mathc if mathc the id it push orderedProduct array
    const orderedProduct =[] 
    for(let allProduct of products){
        let productId = allProduct._id;
        if(orderProductId.includes(productId)){
            orderedProduct.push(allProduct)
        }
    }
  return (
    <div>
        {loading ? <Loader></Loader>:
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className='bg-white p-5'>
                <div>
                    <OrderCard card={orderedProduct} />
                </div>
            </div>
        </div>}
        
    </div>
  )
}

export default Order