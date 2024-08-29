import React from 'react';
import Image from 'next/image';
import { StaticImageData } from "next/image"
import Link from 'next/link';
import { GiHanger, GiWashingMachine, GiConverseShoe } from 'react-icons/gi';
import { PiShirtFoldedFill } from 'react-icons/pi';
import { TbIroningSteam, TbTruckDelivery } from 'react-icons/tb';
import { MdEco } from 'react-icons/md';

import banner from '@/public/assets/dst-bg-img.jpg';
import service from '@/public/assets/Rectangle 40.png';
import serviceImg2 from '@/public/assets/Rectangle 41.png';
import serviceLaundry from '@/public/assets/Rectangle 42.png';
import laundry from '@/public/assets/laundry.webp';

// Define types for props
interface ServiceCardProps {
  image: StaticImageData;
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
}

// ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps> = ({ image, icon: Icon, title, description }) => (
  <div className="flex flex-col items-center">
    <div className='relative'>
      <Image src={image} alt={title} className='w-full'/>
      <div className='absolute bottom-[-7%] left-[6%] p-4 rounded-full bg-[#18F0F0] shadow-gray-300 shadow-lg'>
        <Icon size={40} className='text-white' />
      </div>
    </div>
    <div className='pt-8'>
      <h6 className='py-4'>{title}</h6>
      <p>{description}</p>
      <Link href=''>
        <button className='font-bold bg-[#18F0F0] p-4 text-white mt-4'>More Info</button>
      </Link>
    </div>
  </div>
);

// FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex space-x-4 p-8">
    <div className='p-4 rounded-full bg-slate-100 shadow-gray-300 shadow-lg'>
      <Icon size={40} className='text-[#18F0F0]' />
    </div>
    <div>
      <h5 className='py-2'>{title}</h5>
      <p>{description}</p>
    </div>
  </div>
);

// Service Component
const Service: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <div className='relative'>
          <Image src={banner} alt='banner' className='lg:w-full'/>
          <div className='absolute top-[20%] left-[15%]'>
            <h5 className='text-white py-4'>Home / Services</h5>
            <h1 className='text-white'>Services</h1>
          </div>
        </div>
        <div className="container m-auto">
          <div className='flex flex-col items-center'>
            <h5 className="font-bold py-4 text-[#18F0F0]">[ Our Services ]</h5>
            <div className='text-center md:w-[50%] py-4'>
              <h2>Dry Cleaning & Laundry, Free Delivery</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 p-10">
            <ServiceCard 
              image={service} 
              icon={GiWashingMachine} 
              title="Laundry Services" 
              description="Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package." 
            />
            <ServiceCard 
              image={serviceImg2} 
              icon={GiHanger} 
              title="Dry Cleaning Services" 
              description="UB students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results." 
            />
            <ServiceCard 
              image={serviceLaundry} 
              icon={TbIroningSteam} 
              title="Steam Iron" 
              description="These services are accomplished under the guidance of adroit personnel who have affluent industry proficiency." 
            />
          </div>
        </div>
        <div className="">
          <div className="grid md:grid-cols-2 relative py-8">
            <div>
              <Image src={laundry} alt='Commercial Laundry Service' />
            </div>
            <div className='flex bg-slate-100 w-full md:my-[3%] md:ml-[-15%] md:mr-[30%]'>
              <div className="content-center p-[6%]">
                <h6 className='text-[#18F0F0]'>[ Our Laundry service for your business]</h6>
                <h3 className='py-3'>Commercial Laundry Service</h3>
                <p className='text-lg w-full py-2'>
                  Large corporations have determined that there is a financial benefit to outsourcing back office work because it saves money. Allowing us to do your laundry is cost effective and will allow you and your employees to focus on your core business. We offer smart solutions to meet your commercial laundry needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto">
          <div className='flex flex-col items-center'>
            <h5 className="font-bold pt-2 text-[#18F0F0]">[ Why you'll love us ]</h5>
            <div className='text-center md:w-[50%] py-4'>
              <h2>Our Features</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <FeatureCard 
              icon={MdEco} 
              title="Eco-Friendly Dry Cleaning" 
              description="Our commitment to eco-friendly practices extends beyond our use of 100% toxin-free cleaning techniques. Our company is also incredibly proud to be a carbon-neutral business." 
            />
            <FeatureCard 
              icon={PiShirtFoldedFill} 
              title="Wash & Fold" 
              description="We are excited to offer quality shoe repair & bag services alongside our second to none dry cleaning and wash & fold service. Our staff use the highest quality products." 
            />
            <FeatureCard 
              icon={GiConverseShoe} 
              title="Bag & Shoe Shines" 
              description="Laundry services are considerably the most convenient services that people look for. Laundry is one of the most difficult chores that we have to deal with on a regular basis." 
            />
            <FeatureCard 
              icon={TbTruckDelivery} 
              title="Package Delivery" 
              description="We offer one-day laundry service to customers in our service areas, combining the excellence of dry cleaning with the ultimate convenience in laundry service and laundry delivery." 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
