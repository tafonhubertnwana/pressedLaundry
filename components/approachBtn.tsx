import Link from 'next/link'
import React from 'react'
import aboutImg3 from '@/public/assets/about-us-img04.jpg'
import Image from 'next/image'
import { FaHandHoldingHeart } from "react-icons/fa6";
import { PiLightbulbFilamentBold, PiShirtFoldedFill } from 'react-icons/pi';


const Approach = () => {
  return (
    <>
      <div className="w-full">
        <div className="container m-auto">
        <div className="">
            <div className="grid grid-cols-2 p-8">
              <div className='flex bg-slate-100 '>
                <div className="content-start p-[10%]">
                  
                  <h3 className='py-3'>Our Approach</h3>
                  <span className='text-lg w-full py-2 justify-center'>
                  We approach workforce accommodations with a property development mindset. Our “Develop. Own. Operate.” business model produces integrated solutions that enable clients to focus on their core business. </span>
                  <span>Clients benefit from consistent service delivery with greater cost and quality control as well as more efficient use of their operational and financial resources.</span>
                  <div>
                  <Link href=''><button className='font-bold bg-[#18F0F0] p-4 text-white mt-4'>Get Service Now</button></Link>
                  </div>
                </div>
              </div>
              <div className=''>
                <Image src={aboutImg3} alt='About-us-img-2' />
              </div>
            </div>
            <div className="grid grid-cols-3  gap-8 p-6">
            <div className="flex space-x-4 p-8 bg-slate-100 ">
              <div className='p-4 rounded-full self-start shadow-gray-300 shadow-lg'>
              <PiLightbulbFilamentBold size={40} className='text-[#18F0F0] '/>
              </div>
              <div>
                <h5 className='py-2'>High Quality</h5>
                <span>
                We work hard to make sure that the clothes you get back are spotless and ready for action.                </span>
              </div>
            </div>
            <div className="flex space-x-4 p-8 bg-slate-100">
              <div className='p-4 rounded-full   self-start shadow-gray-300 shadow-lg'>
              <PiShirtFoldedFill size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5 className='py-2'>Cleaner & Greener</h5>
                <span>
                We work with the environment in mind. No harsh chemicals        </span>
              </div>
            </div>
            <div className="flex space-x-4 p-8 bg-slate-100">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <FaHandHoldingHeart  size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5 className='py-2'>Happiness Guarantee</h5>
                <span>
                if you're not completely satisfied with the wash or dry cleaning, we will re-process tour clothes for free! </span>
              </div>
            </div> 
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Approach