import React from 'react';
import Image from 'next/image';
import { StaticImageData } from "next/image"
import Link from 'next/link';
import { GiHanger, GiWashingMachine, GiConverseShoe, GiCheckMark } from 'react-icons/gi';
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
  <div className=" group transition-colors duration-300 flex flex-col items-center">
    <div className='relative'>
      <Image src={image} alt={title} className='w-full'/>
      <div className='absolute bottom-[-7%] left-[6%] p-4 rounded-full bg-[#18F0F0] shadow-gray-300 shadow-lg'>
        <Icon size={40} className='text-white' />
      </div>
    </div>
    <div className=' px-2  pt-8 md:px-1 md:pt-8 '>
      <span className='py-2 text-lg font-bold group-hover:text-[#18F0F0] group-hover:underline group-hover:underline-offset-4'>{title}</span>
      <p>{description}</p>
      <Link href=''>
        <button className='font-bold bg-[#18F0F0] p-4 text-white mt-4'>More Info</button>
      </Link>
    </div>
  </div>
);

// FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className=" group  transition-colors duration-300 flex space-x-4 p-6">
    <div className='p-4 self-start rounded-full bg-slate-100 shadow-gray-300 shadow-lg'>
      <Icon size={40} className='text-[#18F0F0]' />
    </div>
    <div className=''>
      <div className='py-2 group-hover:text-[#18F0F0] lg:text-lg font-bold group-hover:underline group-hover:underline-offset-4'>{title}</div>
      <p>{description}</p>
    </div>
  </div>
);

// Service Component
const Service: React.FC = () => {
  return (
    <>
      <div className="w-full">
      
      {/* Banner Section */}
      <div className='relative mt-36'>
        <Image 
          src={banner} 
          alt='Contact banner' 
          className='w-full object-cover'
          layout='responsive'
          width={1200}
          height={600}
        />
        <div className='absolute top-[20%] left-[15%] md:top-[30%] md:left-[10%] p-4 md:p-6'>
          <h5 className='text-white text-sm md:text-base'>Home / Service</h5>
          <h1 className='text-white text-2xl md:text-6xl font-bold'>Service</h1>
        </div>
      </div>
        <div className="md:container lx:w-2/3 m-auto">
          <div className='flex flex-col items-center'>
            <p className="font-bold pt-8 text-[#18F0F0] lg:text-lg ">[ Our Services ]</p>
            <div className='text-center lg:w-[50%] p-4'>
              <h5>Dry Cleaning & Laundry, Free Delivery</h5>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 p-5">
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
          <div className="grid lg:grid-cols-2 relative py-8">
            <div>
              <Image src={laundry} alt='Commercial Laundry Service' />
            </div>
            <div className='flex bg-slate-100 w-full lg:my-[0%] lg:ml-[-15%] lg:mr-[30%]'>
              <div className="content-center p-[6%]">
                <p className='text-[#18F0F0] lg:text-lg font-bold'>[ Our Laundry service for your business]</p>
                <h5 className='py-3'>Commercial Laundry Service</h5>
                <p className=' w-full py-2'>
                  Large corporations have determined that there is a financial benefit to outsourcing back office work because it saves money. Allowing us to do your laundry is cost effective and will allow you and your employees to focus on your core business. We offer smart solutions to meet your commercial laundry needs. Our Commercial Laundry Clients include:
                </p>
                <div className='border-r-2'>
                    <ul className='py-4'>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <p className='pl-2'>Salons & Spas</p></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Assisted Living / Nursing Homes</p></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Restaurants and Caterers</p></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Hotels & Motels</p></li> 
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Religious Organizations</p></li> 
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Daycare centers</p></li> 
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Athletic Facilities / Gyms</p></li> 
                    </ul>
                  </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="container m-auto">
          <div className='flex flex-col items-center'>
            <p className="font-bold pt-2 text-[#18F0F0] lg:text-lg ">[ Why you'll love us ]</p>
            <div className='text-center md:w-[50%] pt-4'>
              <h5>Our Features</h5>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 pb-8 pt-4">
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
