import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { MdLocalLaundryService } from 'react-icons/md';
import { TbIroningSteam, TbWashTemperature6 } from 'react-icons/tb';

interface PackageCardProps {
  Icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
  price: string;
  features: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({ Icon, title, description, price, features }) => (
  <div className='relative bg-white py-8 px-6  h-54 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'>
    <div className='flex flex-col items-center'>
      <div className='absolute top-[-40px] left-1/2 transform -translate-x-1/2'>
        <div className='p-4 bg-[#18F0F0] rounded-full shadow-lg transition-transform duration-300 hover:rotate-12'>
          <Icon size={70} className='text-white' />
        </div>
      </div>
      <div className='pt-16 text-center'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-gray-500 py-2 text-lg'>{description}</p>
        <ul className='py-4 space-y-2'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center'>
              <GiCheckMark size={20} className='text-[#18F0F0]' />
              <span className='pl-2 text-gray-700'>{feature}</span>
            </li>
          ))}
        </ul>
        <h3 className='text-[#18F0F0] text-xl font-bold'>{price}</h3>
      </div>
    </div>
  </div>
);

const PricePackage: React.FC = () => {
  const packages = [
    {
      Icon: TbWashTemperature6,
      title: 'Standard Package',
      description: '100 clothes Per Month',
      price: '25,000 CFA',
      features: [
        'Pick-up every 2 weeks',
        'Washing',
        'Ironing',
        'Perfume',
        'Free Home Delivery',
      ],
    },
    {
      Icon: MdLocalLaundryService,
      title: 'Premium Package',
      description: '150 clothes Per Month',
      price: '35,000 CFA',
      features: [
        'Pick-up every 10 days',
        'Washing',
        'Ironing',
        'Perfume',
        'Free Home Delivery',
      ],
    },
    {
      Icon: TbIroningSteam,
      title: 'Yearly Package',
      description: '150 clothes monthly',
      price: '250,000 CFA',
      features: [
        'Washing',
        'Ironing',
        'Perfume',
        'Free Home Delivery',
      ],
    },
  ];

  return (
    <div className='w-full'>
      <div className='container mx-auto px-4 mt-8'>
        <div className='text-center pb-8'>
          <h2 className='text-3xl font-bold text-gray-800'>Price Packages</h2>
          <p className='text-gray-600 mt-2'>Affordable and straightforward pricing for your convenience.</p>
        </div>

        <div className='grid gap-8 lg:grid-cols-3 p-10'>
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
