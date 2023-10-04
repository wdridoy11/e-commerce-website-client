import React from 'react'
import useCard from '../../../../hooks/useCard'
import { FaTrash } from 'react-icons/fa';

const MyCard = () => {
    const [card, refetch] = useCard();
    console.log(card)
  return (
    <>
        <div className='w-full px-10'>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th className='capitalize text-base font-medium'>No</th>
                    <th className='capitalize text-base font-medium'>Image</th>
                    <th className='capitalize text-base font-medium'>Item Name</th>
                    <th className='capitalize text-base font-medium'>brand</th>
                    <th className='capitalize text-base font-medium'>Price</th>
                    <th className='capitalize text-base font-medium'>Activon</th>
                  </tr>
                </thead>
                <tbody>
                    {card.map((product)=><tr>
                        <th>1</th>
                        <td>
                            <img className='w-12' src={product?.image} alt="" />
                        </td>
                        <td>{product?.phone_name}</td>
                        <td>{product?.brand}</td>
                        <td>{product?.price}</td>
                        <th>
                            <div className=''>
                                <button className="text-xl bg-[#B91C1C] text-white p-3 rounded-md"><FaTrash></FaTrash></button>
                            </div>
                        </th>
                    </tr>)}
                </tbody>
              </table>
            </div>
        </div>
    </>
  )
}

export default MyCard