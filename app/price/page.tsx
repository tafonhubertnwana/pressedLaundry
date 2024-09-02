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
      <PricePackage />
      <div className='container m-auto'>
        <div className='flex flex-col mt-8 items-center'>
          <h5 className='font-bold py-2 text-[#18F0F0]'>[ Our Service Prices ]</h5>
          <div className='text-center md:w-[50%] py-4'>
            <h2>Full Price Table</h2>
            <span>Laundry service pricing is volume-based. Dry cleaning is priced by item type. Give us a call to review pricing and services today!</span>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-8 p-8'>
          {Object.entries(tabOptions).map(([key, label]) => (
            <div
              key={key}
              className={`group bg-slate-100 w-full flex justify-center items-center ${activeTab === key ? 'text-[#18F0F0]' : 'text-black'}`}
            >
              <button
                onClick={() => setActiveTab(key)}
                className={`p-6 font-bold flex items-center justify-center ${activeTab === key ? 'text-white' : 'text-black'}`}
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
