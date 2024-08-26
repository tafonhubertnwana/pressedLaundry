import Image from 'next/image'
import React from 'react'
import banner from '@/public/assets/dst-bg-img.jpg'
import homeImg from '@/public/assets/home_laundry_services.png'
import hw from '@/public/assets/image 1.png'
import wash from '@/public/assets/image 3.png'
import delivery from '@/public/assets/image 2.png'
import door from '@/public/assets/image 4.png'
import { GiCheckMark, GiHanger, GiWashingMachine } from 'react-icons/gi';
import { FaPhoneVolume, FaMoneyBillWave } from 'react-icons/fa';
import { MdEco } from 'react-icons/md';
import { RiTimerFill } from 'react-icons/ri';
import { TbIroningSteam } from 'react-icons/tb';
import service from '@/public/assets/Rectangle 40.png'
import serviceImg2 from '@/public/assets/Rectangle 41.png'
import serviceLaundry from '@/public/assets/Rectangle 42.png'
import Link from 'next/link'
import Approach from '@/components/approachBtn'
import QuestionAndAnswer from '@/components/questionAndAnswerBtn'
import PricePackage from '@/components/pricePackage'
import ChooseUs from '@/components/chooseUsBtn'
import client from '@/public/assets/testimonials-img03.jpg'

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className='relative'>
          <Image src={banner} alt='banner' className='lg:w-full'/>
          <div className='absolute top-[20%] left-[15%]'>
            <h1 className='text-white py-4'>Laundry Service</h1>
            <h5 className='text-white'>We care for the clothes you wear</h5>
          </div>
        </div>
        <div className="container m-auto">
          <div className="grid grid-cols-2 gap-0 mb-[5%] mt-8">
            <div className='relative'>
              <div className=''>
                <Image src={homeImg} alt='home' />
                <div className='absolute  bg-[#18F0F0] left-[60%] bottom-[20%] rounded-full w-48  h-48 flex items-center justify-center '>
                  <div className='text-center p-8'>
                    <h1 className='text-white '>5+</h1>
                    <h5 className='text-white text-2xl'>Years of Experience</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-cols m-6 w-[75%] ">
              <div className="content-center">
                <h6 className='text-[#18F0F0]'>More than 5 years of  Experience </h6>
                <h3 className='py-3'>We are Passionate About Laundry</h3>
                <span className='text-lg w-full py-2'>
                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!
                </span>
                <div className='flex py-4'>
                  <div className='border-r-2 p-4'>
                    <ul className='py-4'>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <span className='pl-2'>100% Customer Satisfaction</span></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2'>Free Collection & Delivery</span></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2'>Affordable Prices</span></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2'>Best Quality</span></li> 
                    </ul>
                  </div>
                  <div className='p-4'>
                    <div className="flex flex-col items-center">
                      <div  className='p-6 bg-slate-100  rounded-full my-4 shadow-gray-300 shadow-lg'>
                      < FaPhoneVolume size={30} className='text-[#18F0F0]' /> 
                      </div>
                      <h6>Call for Quality Services</h6>
                      <p className="text-sm ">+ (237) 670-048-674</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3  gap-8 p-6">
            <div className="flex space-x-4 p-8 bg-slate-100 ">
              <div className='p-4 rounded-full self-start shadow-gray-300 shadow-lg'>
              <RiTimerFill size={40} className='text-[#18F0F0] '/>
              </div>
              <div>
                <h5 className='py-2'>Save Time & Money</h5>
                <span>
                No more wasted time driving to the laundromats, we pickup and deliver for free!                </span>
              </div>
            </div>
            <div className="flex space-x-4 p-8 bg-slate-100">
              <div className='p-4 rounded-full   self-start shadow-gray-300 shadow-lg'>
              <FaMoneyBillWave  size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5 className='py-2'>Pay Online in Seconds</h5>
                <span>
                Manage your Press account and billing online from your smartphone or computer                </span>
              </div>
            </div>
            <div className="flex space-x-4 p-8 bg-slate-100">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <MdEco size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5 className='py-2'>Eco-Friendly</h5>
                <span>
                We use safe and clean perc-free solvents, so you, and the Earth, can look good.                </span>
              </div>
            </div> 
          </div>
          <div className="grid grid-cols-3 gap-8 p-10">
            <div className="flex flex-col items-center">
              <div className='relative'>
                <Image src={service} alt='About-us-img-4' />
              </div>
              <div className='absolute bottom-[-82%] '>
                <div className='flex space-x-4 w-96'>
                  <div className='  p-4 rounded-full bg-[#18F0F0] self-center '>
                    <GiWashingMachine size={40} className='text-white '/>
                  </div>
                  <div className='text-white '>
                    <h6 className='py-2'>Laundry Services</h6>
                    <span>Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.</span>  
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className='relative'>
                <Image src={serviceImg2} alt='About-us-img-4' />
              </div>
              <div className='absolute bottom-[-82%] '>
                <div className='flex space-x-4 w-96'>
                  <div className='  p-4 rounded-full bg-[#18F0F0] self-center '>
                    <GiHanger size={40} className='text-white '/>
                  </div>
                  <div className='text-white '>
                    <h6 className='py-2'>Dry Cleaning Services</h6>
                    <span>UB students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results.</span>  
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className='relative'>
                <Image src={serviceLaundry} alt='About-us-img-4' /> 
              </div>
              <div className='absolute bottom-[-82%] '>
                <div className='flex space-x-4 w-96'>
                  <div className='  p-4 rounded-full bg-[#18F0F0] self-center '>
                    <TbIroningSteam size={40} className='text-white '/>
                  </div>
                  <div className='text-white '>
                    <h6 className='py-2'>Steam Iron</h6>
                    <span>These services are accomplished under the guidance of adroit personnel who have affluent industry proficiency.</span>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center '>
              <h5 className=" font-bold py-4  text-[#18F0F0]">[ Laundry Made Easy ]</h5>
              <div className='text-center md:w-[50%] py-4'>
                <h2>How PressedPerfect works</h2>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-8 content-center  p-8">
              <div className="flex flex-col items-center">
                <h4 className='text-[#18F0F0]'>You Order</h4>
                <div className='relative flex items-center justify-center mb-8'>
                  <div className='p-6 bg-slate-100 rounded-full my-4 w-48 h-48 shadow-gray-300 shadow-lg flex items-center justify-center'>
                    <Image src={hw} alt='phone' className='object-cover rounded-full' /> 
                  </div>
                  <div className='absolute top-[70%] right-[26%] bg-[#18F0F0] rounded-full w-24 h-24 flex items-center justify-center shadow-gray-300 shadow-lg'>
                    <h3 className=' text-center text-[#000]'>01</h3>
                  </div>
                </div>
                <p className="text-xl ">Order via website</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className='text-[#18F0F0]'>You Order</h4>
                <div className='relative flex items-center justify-center mb-8'>
                  <div className='p-6 bg-slate-100 rounded-full my-4 w-48 h-48 shadow-gray-300 shadow-lg flex items-center justify-center'>
                    <Image src={delivery} alt='phone' className='object-cover rounded-full' /> 
                  </div>
                  <div className='absolute top-[70%] right-[26%] bg-[#18F0F0] rounded-full w-24 h-24 flex items-center justify-center shadow-gray-300 shadow-lg'>
                    <h2 className=' text-center text-[#000]'>02</h2>
                  </div>
                </div>
                <p className="text-xl ">Collection from your doorstep</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className='text-[#18F0F0]'>We Collect</h4>
                <div className='relative flex items-center justify-center mb-8'>
                  <div className='p-6 bg-slate-100 rounded-full my-4 w-48 h-48 shadow-gray-300 shadow-lg flex items-center justify-center'>
                    <Image src={wash} alt='phone' className='object-cover rounded-full' /> 
                  </div>
                  <div className='absolute top-[70%] right-[26%] bg-[#18F0F0] rounded-full w-24 h-24 flex items-center justify-center shadow-gray-300 shadow-lg'>
                    <h2 className=' text-center text-[#000]'>03</h2>
                  </div>
                </div>
                <p className="text-xl ">Wash, dry & fold your items</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className='text-[#18F0F0]'>You Order</h4>
                <div className='relative flex items-center justify-center mb-8'>
                  <div className='p-6 bg-slate-100 rounded-full my-4 w-48 h-48 shadow-gray-300 shadow-lg flex items-center justify-center'>
                    <Image src={door} alt='phone' className='object-cover rounded-full' /> 
                  </div>
                  <div className='absolute top-[70%] right-[26%] bg-[#18F0F0] rounded-full w-24 h-24 flex items-center justify-center shadow-gray-300 shadow-lg'>
                    <h2 className=' text-center text-[#000]'>04</h2>
                  </div>
                </div>
                <p className="text-xl ">Order will be delivered</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center '>
              <h5 className=" font-bold py-4  text-[#18F0F0]">[ important Information ]</h5>
              <div className='text-center md:w-[50%] py-2'>
                <h2>Trusted Laundry Service</h2>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 p-8">
              <div className='bg-slate-100 w-full flex justify-center items-center'>
                <Link href=''>
                  <button className='p-6 text-black font-bold flex items-center justify-center'>
                    Our Approach
                  </button>
                </Link>
              </div>

              <div className='bg-slate-100 w-full flex justify-center items-center'>
                <Link href=''>
                  <button className='p-6 text-black font-bold flex items-center justify-center'>
                    Question / Answers
                  </button>
                </Link>
              </div>

              <div className='bg-[#18F0F0] w-full flex justify-center items-center'>
                <Link href=''>
                  <button className='p-6 text-white font-bold flex items-center justify-center'>
                    Why choose Us
                  </button>
                </Link>
              </div>
            </div>
              {/* <Approach /> */}
              {/* <QuestionAndAnswer /> */}
              <ChooseUs />
            <div>
              <div className='flex flex-col items-center '>
                <h5 className=" font-bold py-4  text-[#18F0F0]">[ Testimonials ]</h5>
                <div className='text-center md:w-[50%] py-4'>
                  <h2>Why Our Clients say</h2>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 p-10">
                <div className="flex flex-col items-center bg-[#18F0F0]">
                    <div className='flex items-center space-x-4 pt-3'>
                      <div className='w-24 h-24 overflow-hidden rounded-full flex-shrink-0'>
                        <Image src={client} alt='About-us-img-4' className='object-cover w-full h-full' />
                      </div>
                      <div className='flex flex-col'>
                        <h5 className='text-lg font-semibold'>John Doe</h5>
                        <span className='text-sm '>Client</span>
                      </div>
                    </div>

                  <div className='p-6'>
                    <span>
                    The new machines have had very few problems and their services are always done in a timely fashion. Our residents have been thrilled with the PressedPerfect team and we look forward to a long relationship with this first-class organization.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-slate-100">
                    <div className='flex items-center space-x-4 pt-3'>
                      <div className='w-24 h-24 overflow-hidden rounded-full flex-shrink-0'>
                        <Image src={client} alt='About-us-img-4' className='object-cover w-full h-full' />
                      </div>
                      <div className='flex flex-col'>
                        <h5 className='text-lg font-semibold'>John Doe</h5>
                        <span className='text-sm '>Client</span>
                      </div>
                    </div>

                  <div className='p-6'>
                    <span>
                    Over the last eight years they have proven, on several occasions that they are knowledgeable, prompt, and concerned about my immediate situation. I personally encourage any business associated with their laundry services.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-slate-100">
                    <div className='flex items-center space-x-4 pt-3'>
                      <div className='w-24 h-24 overflow-hidden rounded-full flex-shrink-0'>
                        <Image src={client} alt='About-us-img-4' className='object-cover w-full h-full' />
                      </div>
                      <div className='flex flex-col'>
                        <h5 className='text-lg font-semibold'>John Doe</h5>
                        <span className='text-sm '>Client</span>
                      </div>
                    </div>

                  <div className='p-6'>
                    <span>
                    Second to none for convenience, quality & turnaround time. Great prices and services. Amazing support team behind the service, if you ever need it. No more having to save up piles of dry cleaning to make it worth taking out.
                    </span>
                  </div>
                </div>
              </div>


            </div>
            <PricePackage />
          </div>
        </div>
      </div>
    </>
  );
}
