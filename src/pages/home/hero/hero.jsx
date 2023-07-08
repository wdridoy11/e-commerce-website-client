import React from 'react'
const img = `https://www.cloud.ryanscomputers.com/cdn/sliders/META-Quest-2-128GB-All-in-One-VR-System-Banner_1688808664.webp`
const Hero = () => {
  return (
    <div>
        <div className='grid grid-cols-3 gap-x-3'>
            <div className='col-span-2'>
                <img className='w-full' src={img} alt="" />
            </div>
            <div className='flex flex-col gap-y-3'>
                <div>
                    <img className='w-full' src={img} alt="" />
                </div>
                <div>
                    <img className='w-full' src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero