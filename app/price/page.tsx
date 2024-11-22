'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import banner from '@/public/assets/dst-bg-img.jpg';
import prices from '@/data/prices.json'; // Import JSON file directly

interface PriceItem {
  category: string;
  count: number;
}

interface Prices {
  tops: PriceItem[];
  bottoms: PriceItem[];
  bedsheets: PriceItem[];
  underwears: PriceItem[];
}

const tabOptions: Record<keyof Prices, string> = {
  tops: 'Tops',
  bottoms: 'Bottoms',
  bedsheets: 'Bedsheets',
  underwears: 'Underwears',
};

const Price: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof Prices>('tops');

  return (
    <div>
      {/* Banner Section */}
      <div className="relative mt-36">
        <Image src={banner} alt="banner" className="lg:w-full" />
        <div className="absolute top-[20%] left-[15%]">
          <h5 className="text-white py-4">Home / Price</h5>
          <h1 className="text-white">Price</h1>
        </div>
      </div>

      {/* Price Package Placeholder */}
      <div className="mt-10">
        <div className="text-center">
          <h2>Price Package Component Placeholder</h2>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container m-auto my-8">
        <div className="flex flex-col mt-8 items-center">
          <p className="py-2 text-[#18F0F0] lg:text-lg font-bold">[ Our Service Prices ]</p>
          <div className="text-center md:w-[50%] py-4">
            <h5>Full Price Table</h5>
            <p>
              Laundry service pricing is volume-based. Dry cleaning is priced by item type. Give us a call to
              review pricing and services today!
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          {Object.entries(tabOptions).map(([key, label]) => (
            <div
              key={key}
              onClick={() => setActiveTab(key as keyof Prices)}
              className={`group bg-slate-100 w-full flex justify-center items-center ${
                activeTab === key ? 'bg-black text-white' : 'text-black'
              }`}
            >
              <button className="p-6 font-bold flex items-center justify-center">{label}</button>
            </div>
          ))}
        </div>

        {/* Dynamic Content Rendering */}
        <div className="w-full md:w-[75%] m-auto">
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="bg-slate-400 text-white p-2">Items</th>
                <th className="bg-slate-400 text-white p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {prices[activeTab]?.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-slate-400 text-white' : 'bg-slate-100'}
                >
                  <td className="p-2">{item.category}</td>
                  <td className="p-2">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Price;
