import React from 'react'
const img = `https://www.cloud.ryanscomputers.com/cdn/sliders/META-Quest-2-128GB-All-in-One-VR-System-Banner_1688808664.webp`
const hero = () => {
  return (
    <div>
        <div className='grid grid-cols-3'>
            <div className='col-span-2'>
                <img src={img} alt="" />
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default hero