import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { MdLocalLaundryService } from 'react-icons/md';
import { TbIroningSteam, TbWashTemperature6 } from 'react-icons/tb';

// Define type for PackageCard props
interface PackageCardProps {
  Icon: React.ComponentType<{ size: number, className?: string }>;
  title: string;
  description: string;
  price: string;
  features: string[];
}

// Reusable PackageCard Component
const PackageCard: React.FC<PackageCardProps> = ({ Icon, title, description, price, features }) => (
  <div className='relative bg-slate-100 py-8 px-6 shadow-lg rounded-lg'>
    <div className='flex flex-col items-center'>
      <div className='absolute top-[-50px] left-1/2 transform -translate-x-1/2'>
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

// Define type for packages
interface Package {
  Icon: React.ComponentType<{ size: number, className?: string }>;
  title: string;
  description: string;
  price: string;
  features: string[];
}

// Main PricePackage Component
const PricePackage: React.FC = () => {
  const packages: Package[] = [
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
        <div className='text-center pb-10'>
          <h6 className=' text-[#18F0F0] '>
            [ What we offer ]
          </h6>
          <div className='text-center md:w-1/2 mx-auto py-4'>
            <h2 className='text-3xl md:text-4xl'>Price Packages</h2>
            <p className='mt-2'>
              Our prices are simple and affordable, making them easy on the pocket
              compared to high street prices.
            </p>
          </div>
        </div>

        <div className='grid gap-8 md:grid-cols-3 p-8'>
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
