import React from 'react'
import PricePackage from '@/components/pricePackage'
import Image from 'next/image'
import banner from '@/public/assets/dst-bg-img.jpg'
import Link from 'next/link'
import Tops from '@/components/tops'

const Price = () => {
  return (
    <>
      <div className='relative'>
          <Image src={banner} alt='banner' className='lg:w-full'/>
          <div className='absolute top-[20%] left-[15%]'>
            <h5 className='text-white py-4'>Home / Price</h5>
            <h1 className='text-white'>Price</h1>
          </div>
        </div>
      <PricePackage />
      <div className='container m-auto'>
        <div className='flex flex-col mt-8 items-center '>
          <h5 className=" font-bold py-2  text-[#18F0F0]">[ Our Service Prices ]</h5>
          <div className='text-center md:w-[50%] py-4'>
            <h2>Full Price Table</h2>
            <span>Laundry service pricing is volume based. Dry cleaning is priced by item type. Give us a call to review pricing and services today!</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 p-8">
              <div className='bg-slate-100 w-full flex justify-center items-center'>
                <Link href=''>
                  <button className='p-6 text-black font-bold flex items-center justify-center'>
                    Tops
                  </button>
                </Link>
              </div>

              <div className='bg-slate-100 w-full flex justify-center items-center'>
                <Link href=''>
                  <button className='p-6 text-black font-bold flex items-center justify-center'>
                    Bottoms
                  </button>
                </Link>
              </div>

              <div className='bg-[#18F0F0] w-full flex justify-center items-center'>
                <Link href=''>
                  <button className='p-6 text-white font-bold flex items-center justify-center'>
                    Bedsheets
                  </button>
                </Link>
              </div>
              <div className='bg-[#18F0F0] w-full flex justify-center items-center'>
                <Link href=''>
                  <button className='p-6 text-white font-bold flex items-center justify-center'>
                    Underwears
                  </button>
                </Link>
              </div>
            </div>
            <Tops />
      </div>
      
    </>
  )
}

export default Price