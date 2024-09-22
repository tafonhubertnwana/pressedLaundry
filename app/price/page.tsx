'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PricePackage from '@/components/pricePackage';
import Tops from '@/components/tops';
import Bottoms from '@/components/bottoms';
import Bedsheets from '@/components/bedsheets';
import Underwears from '@/components/underwears';
import banner from '@/public/assets/dst-bg-img.jpg';

const tabOptions = {
  top: 'Tops',
  bottom: 'Bottoms',
  bedsheet: 'Bedsheets',
  underwear: 'Underwear'
};

const Price = () => {
  const [activeTab, setActiveTab] = useState('top');

  return (
    <>
      <div className='relative'>
        <Image src={banner} alt='banner' className='lg:w-full' />
        <div className='absolute top-[20%] left-[15%]'>
          <h5 className='text-white py-4'>Home / Price</h5>
          <h1 className='text-white'>Price</h1>
        </div>
      </div>
      <div className="mt-10">

        <PricePackage />
      </div>
      <div className='container m-auto my-8'>
        <div className='flex flex-col mt-8 items-center'>
          <p className=' py-2 text-[#18F0F0] lg:text-lg font-bold'>[ Our Service Prices ]</p>
          <div className='text-center md:w-[50%] py-4'>
            <h5>Full Price Table</h5>
            <p>Laundry service pricing is volume-based. Dry cleaning is priced by item type. Give us a call to review pricing and services today!</p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8'>
          {Object.entries(tabOptions).map(([key, label]) => (
            <div
              key={key}
              onClick={() => setActiveTab(key)}
              className={`group bg-slate-100 w-full flex justify-center items-center ${activeTab === key ? 'bg-black text-white' : 'text-black'}`}
            >
              <button
                
                className='p-6 font-bold flex items-center justify-center'
              >
                {label}
              </button>
            </div>
          ))}
        </div>
        {activeTab === 'top' && <Tops />}
        {activeTab === 'bottom' && <Bottoms />}
        {activeTab === 'bedsheet' && <Bedsheets />}
        {activeTab === 'underwear' && <Underwears />}
      </div>
    </>
  );
};

export default Price;
