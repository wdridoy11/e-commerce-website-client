import React, { useContext, useEffect, useState } from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import "./CheckoutForm.css"
import { AuthContext } from '../../../context/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({price,cardData}) => {

    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [cardError,setCardError] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);
    const {setOrderPayment} = useContext(AuthContext)
  // console.log(orderPayment);
    useEffect(()=>{
      if(price>20){
        fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({price})
        })
        .then((res)=>res.json())
        .then((data)=>{
          setClientSecret(data.clientSecret)
        })
      }
    },[])

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const form = event.target.value;

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card == null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type:"card",
          card
        })

        if(error){
          setCardError(error.message)
        }else{
          setCardError("")
          // console.log("paymentMethod",paymentMethod)
        }

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method:{
              card:card,
              billing_details:{
                email: user?.email || "unknown",
                name: user?.displayName || "anonymous",
              }
            }
          }
        );
        if(confirmError){
          console.log("confirmError",confirmError)
        }
        setProcessing(true)
        //TODO: product name 
        if(paymentIntent.status === "succeeded"){
          setTransactionId(paymentIntent.id)
          // payment data
          const payment={
            email: user?.email,
            transactionId :paymentIntent.id,
            price,
            date: new Date(),
            quantity: cardData.length,
            cardItems: cardData.map((item)=>item._id),
            productId: cardData.map((item)=>item.productId),
            status:"services pending",
            productName: cardData.map((item)=>item.productId)
          }

          fetch(`${process.env.REACT_APP_API_URL}/payment`,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(payment)
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log("data.insertedId",data.insertedId);
            if(data.insertedId){
              setOrderPayment(payment)
              Swal.fire(
                'Payment',
                'Congratulation! payment is successful',
                'success'
              )
            }
          })
        }
        form.reset();
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button 
            type="submit" 
            className="px-7 py-2 bg-blue-500 rounded-md text-white text-base hover:bg-black duration-500"
            disabled={!stripe || !clientSecret || processing}>Pay
        </button>
      </form>
        {cardError && <p className='text-red-500 mt-2'>{cardError}</p>}
        {transactionId && <p className='text-green-500 mt-2'>Your transactionId: {transactionId}</p>}
    </>
  )
}

export default CheckoutForm