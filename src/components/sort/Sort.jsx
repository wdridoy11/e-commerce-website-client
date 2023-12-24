import React, { useContext, useEffect, useState } from 'react'
import useProducts from '../../api/useProducts';
import { AuthContext } from '../../context/AuthProvider';


const Sort = ({products}) => {

    const [selectedValue, setSelectedValue] = useState('');
    const {setSortByPrice } = useContext(AuthContext);

    // handle filter low price to High and high to low
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value; 
        if (selectedValue === "LH") {
            const priceLowToHigh = products.slice().sort((productOne, productTwo) => productOne.price - productTwo.price);
            setSortByPrice(priceLowToHigh);
        } else if (selectedValue === "HL") {
            const priceHighToLow = products.slice().sort((productOne, productTwo) => productTwo.price - productOne.price);
            setSortByPrice(priceHighToLow);
        } else{
            setSortByPrice(products);
        }
        setSelectedValue(selectedValue);
    };

  return (
    <>
        <div className='bg-white px-5 py-2 mb-5 grid grid-cols-2'>
            <div></div>
            <div className='text-end'>
                <span className='text-lg font-medium'>Sort By</span>
                <select value={selectedValue} onChange={handleSelectChange} className="select select-bordered w-full max-w-xs focus:outline-none ml-2">
                    <option value={"default"}>Default</option>
                    <option value={"LH"}>Low to High (Price)</option>
                    <option value={"HL"}>High to Low (Price)</option>
                </select>
            </div>
        </div>
    </>
  )
}

export default Sort
