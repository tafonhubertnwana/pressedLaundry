import Image from 'next/image'
import banner from '@/public/assets/dst-bg-img.jpg'
import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="w-full">
        <div className='relative'>
          <Image src={banner} alt='banner' className='lg:w-full'/>
          <div className='absolute top-[20%] left-[15%]'>
            <h5 className='text-white py-4'>Home / Contact</h5>
            <h1 className='text-white'>Contact</h1>
          </div>
        </div>
        <div className='container m-auto py-4'>
          <div className='flex flex-col items-center '>
            <h5 className=" font-bold py-4  text-[#18F0F0]">[ get in Touch with Us ]</h5>
            <div className='text-center md:w-[50%] py-4'>
              <h2>Contact Information</h2>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-8">
            div.flex.flex-col
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact