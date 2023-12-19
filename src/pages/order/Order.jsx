import React from 'react'

const Order = () => {
  return (
    <div>
        <div className='px-5'>
            <div>
                <div>
                    <h1 className='text-lg font-medium mb-5'>Your Order ID: <span>17135021605139</span> (2 items) | Payable Amount: TK. <span>713</span></h1>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='bg-white rounded-md p-5'>
                        <div>
                            <div className='w-full h-48 overflow-hidden'>
                                <img className='w-9/12 mx-auto pb-5 hover:scale-110 duration-500' src="https://adminapi.applegadgetsbd.com/storage/media/large/2324-41148.jpg" />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h4 className='text-base text-[#212121] font-medium'>MacBook Pro M1 8/256</h4>
                            <h4 className='text-xl font-semibold text-blue-500 mt-3 mb-3'>$100</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order