import React from 'react'
import Image from 'next/image'
import banner from '@/public/assets/dst-bg-img.jpg'
import service from '@/public/assets/Rectangle 40.png'
import serviceImg2 from '@/public/assets/Rectangle 41.png'
import serviceLaundry from '@/public/assets/Rectangle 42.png'
import laundry from '@/public/assets/laundry.webp'
import { GiHanger, GiWashingMachine, GiConverseShoe } from 'react-icons/gi'
import { PiShirtFoldedFill } from "react-icons/pi";
import Link from 'next/link'
import { TbIroningSteam, TbTruckDelivery } from "react-icons/tb";
import { HiClipboardDocumentList } from 'react-icons/hi2'
import { MdEco } from 'react-icons/md'

const Service = () => {
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
        <div className='flex flex-col items-center '>
          <h5 className=" font-bold py-4  text-[#18F0F0]">[ Our Services ]</h5>
          <div className='text-center md:w-[50%] py-4'>
            <h2>Dry Cleaning & Laundry, Free Delivery</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 p-10">
          <div className="flex flex-col items-center">
            <div className='relative'>
              <Image src={service} alt='About-us-img-4' className='w-full'/>

              <div className='absolute bottom-[-7%] left-[6%]  p-4 rounded-full bg-[#18F0F0] self-start shadow-gray-300 shadow-lg'>
                <GiWashingMachine size={40} className='text-white '/>
              </div>
            </div>
            <div className='pt-8 '>
              <h6 className='py-4'>Laundry Services</h6>
              <span>Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.</span>
              <div>
                <Link href=''><button className='font-bold bg-[#18F0F0] p-4 text-white mt-4'>More Info</button></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className='relative'>
              <Image src={serviceImg2} alt='About-us-img-4' />
              <div className='p-4 absolute bottom-[-7%] left-[6%] rounded-full bg-[#18F0F0] self-start shadow-gray-300 shadow-lg'>
                < GiHanger size={40} className='text-white '/>
              </div>
            </div>
            <div className='pt-8 '>
              <h6 className='py-4'>Dry cleaning Services</h6>
              <span>UB students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results.</span>
              <div>
                <Link href=''><button className='font-bold bg-[#18F0F0] p-4 text-white mt-4'>More Info</button></Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className='relative'>
              <Image src={serviceLaundry} alt='About-us-img-4' />
              <div className=' p-4 absolute bottom-[-7%] left-[6%]  rounded-full bg-[#18F0F0] self-start shadow-gray-300 shadow-lg'>
                <TbIroningSteam size={40} className='text-white '/>
              </div>
            </div>
            <div className='pt-8 '>
              <h6 className='py-4'>Steam Iron</h6>
              <span>These services are accomplished under the guidance of adroit personnel who have affluent industry proficiency.</span>
              <div>
                <Link href=''><button className='font-bold bg-[#18F0F0] p-4 text-white mt-4'>More Info</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="">
          <div className="grid md:grid-cols-2 relative py-8">
            <div className=''>
              <Image src={laundry} alt='About-us-img-4' />
            </div>
            <div className='flex bg-slate-100 w-full md:my-[3%] md:ml-[-15%] md:mr-[30%] '>
              <div className="content-center p-[6%]">
                <h6 className='text-[#18F0F0]'>[ Our Laundry service for your business]</h6>
                <h3 className='py-3'>Commercial Laundry Service</h3>
                <span className='text-lg w-full py-2 justify-center'>
                Large corporations have determined that there is a financial benefit to outsourcing back office work because it saves money. Allowing us to do your laundry is cost effective and will allow you and your employees to focus on your core business. We offer smart solutions to meet your commercial laundry needs. </span> 
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto">
        <div className='flex flex-col items-center '>
            <h5 className=" font-bold pt-2  text-[#18F0F0]">[ Why you'll love us ]</h5>
            <div className='text-center md:w-[50%] py-4'>
              <h2>Our Features</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex space-x-4 p-8">
                <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                <MdEco size={40} className='text-[#18F0F0]'/>
                </div>
                <div>
                  <h5 className='py-2'>Eco-Friendly Dry Cleaning</h5>
                  <span>
                  Our commitment to eco-friendly practices extends beyond our use of 100% toxin-free cleaning techniques. Our company is also incredibly proud to be a carbon-neutral business.                  </span>
                </div>
              </div>
              <div className="flex space-x-4 p-8">
                <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                <PiShirtFoldedFill size={40} className='text-[#18F0F0]'/>
                </div>
                <div>
                  <h5 className='py-2'>Wash & Fold</h5>
                  <span>
                  We are excited to offer quality shoe repair & bag services alongside our second to none dry cleaning and wash & fold service. Our staff use the highest quality products.                  </span>
                </div>
              </div>
              <div className="flex space-x-4 p-4">
                <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                <GiConverseShoe size={40} className='text-[#18F0F0]'/>
                </div>
                <div>
                  <h5 className='py-2'>Bag & Shoe Shines</h5>
                  <span>
                  Laundry services are considerably the most convenient services that people look for. Laundry is one of the most difficult chores that we have to deal with on a regular basis.                  </span>
                </div>
              </div>
              <div className="flex space-x-4 p-4">
                <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                <TbTruckDelivery size={40} className='text-[#18F0F0]'/>
                </div>
                <div>
                  <h5 className='py-2'>Package Delivery</h5>
                  <span>
                  We offer one-day day laundry service to customers in our service areas, combining the excellence of dry cleaning with the ultimate convenience in laundry service and laundry delivery.                  </span>
                </div>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Service