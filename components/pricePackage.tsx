import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { MdLocalLaundryService } from "react-icons/md";
import { TbIroningSteam, TbWashTemperature6 } from "react-icons/tb";


// Reusable Package Component
const PackageCard = ({ Icon, title, description, price, features }) => {
  return (
    <div className='relative bg-slate-100 py-8 px-4 shadow-lg rounded-lg'>
      <div className='flex flex-col items-center'>
        <div className='absolute top-[-10%] left-1/2 transform -translate-x-1/2'>
          <div className='p-4 bg-[#18F0F0] rounded-full'>
            <Icon size={80} className='text-white' />
          </div>
        </div>
        <div className='pt-16 text-center'>
          <h4 className='text-xl font-semibold'>{title}</h4>
          <h6 className='text-[#18F0F0] py-2 text-lg'>{description}</h6>
          <div className='border-b-2 border-gray-300'>
            <ul className='py-4 space-y-2'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-center'>
                  <GiCheckMark size={20} className='text-[#18F0F0]' />
                  <span className='pl-2'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <h3 className='text-[#18F0F0] text-xl font-bold'>{price}</h3>
        </div>
      </div>
    </div>
  );
};

const PricePackage = () => {
  const packages = [
    {
      Icon: TbWashTemperature6,
      title: "Standard Package",
      description: "100 clothes Per Month",
      price: "25,000 CFA",
      features: [
        "Pick-up every 2 weeks",
        "Washing",
        "Ironing",
        "Perfume",
        "Free Home Delivery"
      ]
    },
    {
      Icon: MdLocalLaundryService,
      title: "Premium Package",
      description: "150 clothes Per Month",
      price: "35,000 CFA",
      features: [
        "Pick-up every 10 days",
        "Washing",
        "Ironing",
        "Perfume",
        "Free Home Delivery"
      ]
    },
    {
      Icon: TbIroningSteam,
      title: "Yearly Package",
      description: "150 clothes monthly",
      price: "250,000 CFA",
      features: [
        "Washing",
        "Ironing",
        "Perfume",
        "Free Home Delivery"
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className='text-center pb-12'>
          <h5 className="font-bold text-[#18F0F0] text-xl md:text-2xl">[ What we offer ]</h5>
          <div className='text-center md:w-1/2 mx-auto py-4'>
            <h2 className="text-3xl md:text-4xl">Price Packages</h2>
            <p className="">
              Our prices are simple and affordable, which are easy on the pocket
              compared to high street prices.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 p-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              Icon={pkg.Icon}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              features={pkg.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePackage;
