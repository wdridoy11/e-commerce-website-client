import React from 'react'

const MyProduct = () => {
  return (
    <>
        <div className='w-full h-screen pt-10 lg:px-10'>
            <div className="bg-white pb-5">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th className='capitalize text-base font-medium'>No</th>
                    <th className='capitalize text-base font-medium'>Image</th>
                    <th className='capitalize text-base font-medium'>Info</th>
                    <th className='capitalize text-base font-medium'>Category</th>
                    <th className='capitalize text-base font-medium'>Description</th>
                    <th className='capitalize text-base font-medium'>Price</th>
                    <th className='capitalize text-base font-medium'>Activon</th>
                  </tr>
                </thead>
                <tbody>
                    {/* {card && card.map((product,index)=><tr key={product._id}>
                        <th>{index+1}</th>
                        <td>
                            <img className='w-16' src={product?.product_image} alt={product?.product_name} />
                        </td>
                        <td>
                          <h4 className='text-base font-medium'>{product?.product_name}</h4>
                          <p className='text-sm font-normal text-[#A5A5A5]'>Brand: {product?.brand}</p>
                        </td>
                        <td className='text-base font-medium'>{product?.quantity}</td>
                        <td className='text-base font-medium'>${product?.price}</td>
                        <td className='text-base font-medium'>${product?.price * product?.quantity}</td>
                        <th>
                            <div>
                                <button onClick={()=>handleDelete(product)} className="text-xl bg-[#B91C1C] text-white p-3 rounded-md"><FaTrash></FaTrash></button>
                            </div>
                        </th>
                    </tr>)} */}
                </tbody>
              </table>
              <div className='divider'></div>
              <div className='text-end w-40'>
                  {/* <Link to={'/dashboard/shopping'} className='blue-btn px-5 mr-10 flex items-center gap-2'>
                      Place Order<BsArrowRight className='text-xl'></BsArrowRight>
                  </Link> */}
              </div>
            </div>
        </div>
    </>
  )
}

export default MyProduct