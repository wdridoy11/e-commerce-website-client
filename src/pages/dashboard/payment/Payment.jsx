import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'
import useCard from '../../../hooks/useCard';
const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_PK_KEY);

const Payment = ({price,card}) => {

  return (
    <div>
        <h3 className='text-2xl'>Payment</h3>
        <Elements stripe={stripePromise}>
            <CheckoutForm price={price} cardData={card}></CheckoutForm>
        </Elements>
    </div>
  )
}

export default Payment