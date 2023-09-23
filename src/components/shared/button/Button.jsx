import React from 'react'

const Button = ({buttonText}) => {
  return (
    <>
        <button className='text-base bg-[#ff523d] px-10 py-3 text-white 
        font-medium rounded-md hover:bg-black duration-500'>{buttonText}</button>
    </>
  )
}

export default Button