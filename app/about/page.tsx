import Image from 'next/image'
import React from 'react'
import banner from '@/public/assets/dst-bg-img.jpg'


const About = () => {
  return (
    <>
      <div className="w-full">
        <div className='relative'>
          <Image src={banner} alt='banner' className='lg:w-full'/>
          <div className='absolute top-[20%] left-[15%]'>
            <h5 className='text-white py-4'>Home / About Us</h5>
            <h1 className='text-white'>About Us</h1>
          </div>
        </div>
        <div className="container m-auto">
          <div className="grid grid-cols-2">
            <div className='relative'>
              <div>
                <Image src='https://via.placeholder.com/250' alt='about' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About