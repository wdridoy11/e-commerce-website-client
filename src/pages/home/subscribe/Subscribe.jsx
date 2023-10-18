import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <div className='container mx-auto px-5 bg-red-400 py-20 rounded-md relative -bottom-20'>
            <div className='grid grid-cols-2 items-center gap-5 px-10'>
                <div>
                    <p className='text-lg text-white font-medium'>Join our email list & get free unlimeted offer</p>
                    <h2 className='text-3xl font-medium text-white mt-3'>Subscribe now & get free 20% discount</h2>
                </div>
                <div>
                    <form className='flex gap-3'>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            className='w-full py-3 px-5 rounded-md'
                            placeholder='Enter your email'
                            required
                        />
                        <input 
                            type="submit" 
                            value="Submit" 
                            className='px-8 py-3 bg-black text-lg text-white font-medium rounded-md cursor-pointer'
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe