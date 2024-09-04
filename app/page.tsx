
'use client'
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
import { useState } from 'react';
import {TestimonialCarousel, Carousel }from '@/components/testimonials'

const faqs = [
  {
    question: "What if my clothes are heavily stained?",
    answer: "If your clothes are heavily stained, please inform us at the time of pickup. We will assess the stains and use specialized treatments to address them. Note that while we strive to remove all stains, some may be difficult to fully eliminate depending on the fabric and nature of the stain.",
    defaultChecked: true
  },
  {
    question: "How long do you take to return the garments?",
    answer: "The typical turnaround time for returning garments is 1 to 3 business days. For special or bulk orders, or if additional treatment is required, it may take slightly longer. We will provide an estimated return time at the time of pickup and keep you updated on the status of your order."
  },
  {
    question: "How can I pay for the services?",
    answer: "You can pay for our services through various methods, including cash, credit/debit cards, and mobile payment apps. For convenience, you can also set up automatic billing if you have a recurring service. Please check with our customer service team for specific payment options available in your area."
  },
  {
    question: "Does Dry cleaning process remove all the stains?",
    answer: "Dry cleaning is effective at removing many stains, but it may not remove all types. The success of stain removal depends on the type of stain, the fabric, and how long the stain has been set. Our team will use specialized treatments to address stains as effectively as possible, but some stains may be challenging to completely remove."
  }
]

export default function Home() {
  // State to manage which container is currently open
  const [activeTab, setActiveTab] = useState('approach');
  return (
    <>
      <div className="w-full">
        <div className='relative'>
          <Image src={banner} alt='banner' className='lg:w-full '/>
          <div className='absolute top-[20%] left-[15%]'>
            <h1 className='text-white py-4'>Laundry Service</h1>
            <h5 className='text-white'>We care for the clothes you wear</h5>
          </div>
        </div>
        <div className="container m-auto">
          <div className="grid md:grid-cols-2 gap-0 mb-[5%] mt-8">
            <div className='relative'>
              <div className=''>
                <Image src={homeImg} alt='home' className='w-full'/>
                <div className=''>
                  {/* <!-- Floating Circle --> */}
                  <div className='absolute bg-[#18F0F0] rounded-full w-28 h-28 flex items-center justify-center 
                    left-[90%] bottom-[10%] transform -translate-x-1/2 translate-y-1/2
                    md:left-[80%] md:top-[20%] lg:left-[80%] lg:top-[50%] md:w-56 md:h-56'>
                    <div className='text-center p-4 md:p-6'>
                      <h1 className='text-white text-2xl md:text-6xl'>5+</h1>
                      <h5 className='text-white text-sm md:text-2xl'>Years of Experience</h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex flex-cols m-6 md:w-[75%] w-full ">
              <div className="content-center">
                <h6 className='text-[#18F0F0]'>More than 5 years of  Experience </h6>
                <h3 className='py-3'>We are Passionate About Laundry</h3>
                <p className='w-full py-2'>
                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!
                </p>
                <div className='flex py-4'>
                  <div className='border-r-2 p-4'>
                    <ul className='py-4'>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <p className='pl-2'>100% Customer Satisfaction</p></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Free Collection & Delivery</p></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Affordable Prices</p></li>
                      <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Best Quality</p></li> 
                    </ul>
                  </div>
                  <div className=' group p-4'>
                    <div className="flex flex-col items-center">
                      <div  className='p-6 bg-slate-100  rounded-full my-4 shadow-gray-300 shadow-lg'>
                      < FaPhoneVolume size={30} className='text-[#18F0F0]' /> 
                      </div>
                      <span className='text-sm lg:text-xl font-bold'>Call for Quality Services</span>
                      <p className="text-sm group-hover:text-[#18F0F0]">+ (237) 670-048-674</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Carousel /> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
            {/* Laundry Services */}
            <div className=" group transition-colors duration-300 relative flex flex-col items-center">
              <Image src={service} alt='About-us-img-4' className='w-full h-auto' />
              <div className='absolute bottom-0 w-full'>
                <div className='group flex flex-row items-center space-y-4 md:space-y-0 space-x-4 bg-opacity-50 bg-black p-4 rounded-lg'>
                  <div className='p-4 rounded-full bg-[#18F0F0]'>
                    <GiWashingMachine size={40} className='text-white' />
                  </div>
                  <div className='text-white'>
                    <span className='py-2 text-lg font-bold group-hover:text-[#18F0F0] group-hover:underline group-hover:underline-offset-4'>Laundry Services</span>
                    <p className='text-white'>Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold, and deliver it back to you in one neat, easy package.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dry Cleaning Services */}
            <div className=" group transition-colors duration-300 relative flex flex-col items-center">
              <Image src={serviceImg2} alt='About-us-img-4' className='w-full h-auto' />
              <div className='absolute bottom-0 w-full'>
                <div className='flex flex-row items-center space-y-4 md:space-y-0 space-x-4 bg-opacity-50 bg-black p-4 rounded-lg'>
                  <div className='p-4 rounded-full bg-[#18F0F0]'>
                    <GiHanger size={40} className='text-white' />
                  </div>
                  <div className='text-white'>
                    <span className='py-2 text-lg font-bold group-hover:text-[#18F0F0] group-hover:underline group-hover:underline-offset-4'>Dry Cleaning Services</span>
                    <p className='text-white'>UB students and local residents love our reliable dry cleaning services for fast, accurate, top-quality results.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steam Iron */}
            <div className=" group transition-colors duration-300 relative flex flex-col items-center">
              <Image src={serviceLaundry} alt='About-us-img-4' className='w-full h-auto' />
              <div className='absolute bottom-0 w-full'>
                <div className='flex flex-row items-center space-y-4 md:space-y-0 space-x-4 bg-opacity-50 bg-black p-4 rounded-lg'>
                  <div className='p-4 rounded-full bg-[#18F0F0]'>
                    <TbIroningSteam size={40} className='text-white' />
                  </div>
                  <div className='text-white'>
                    <span className='py-2 text-lg font-bold group-hover:text-[#18F0F0] group-hover:underline group-hover:underline-offset-4'>Steam Iron</span>
                    <p className='text-white'>These services are accomplished under the guidance of adroit personnel who have affluent industry proficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex flex-col items-center '>
              <h6 className=" font-bold pt-4   text-[#18F0F0]">[ Laundry Made Easy ]</h6>
              <div className='text-center md:w-[50%] pb-4 pt-2'>
                <h2 className=''>How PressedPerfect works</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <h4 className='text-[#18F0F0] mb-4'>You Order</h4>
              <div className='relative flex items-center justify-center mb-8'>
                <div className='p-6 bg-slate-100 rounded-full w-32 h-32 md:w-48 md:h-48 shadow-gray-300 shadow-lg flex items-center justify-center'>
                  <Image src={hw} alt='phone' className='object-cover ' />
                </div>
                <div className='absolute top-[-10%] right-[-10%] md:top-[75%] md:right-[26%] bg-[#18F0F0] rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-gray-300 shadow-lg'>
                  <h3 className='text-center text-[#000] text-xs md:text-lg'>01</h3>
                </div>
              </div>
              <p className=" md:mt-6">Order via website</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <h4 className='text-[#18F0F0] mb-4'>We collect</h4>
              <div className='relative flex items-center justify-center mb-8'>
                <div className='p-6 bg-slate-100 rounded-full w-32 h-32 md:w-48 md:h-48 shadow-gray-300 shadow-lg flex items-center justify-center'>
                  <Image src={delivery} alt='delivery' className='object-cover ' />
                </div>
                <div className='absolute top-[-10%] right-[-10%] md:top-[75%] md:right-[26%] bg-[#18F0F0] rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-gray-300 shadow-lg'>
                  <h2 className='text-center text-[#000] text-xs md:text-lg'>02</h2>
                </div>
              </div>
              <p className="md:mt-6">Collection from your doorstep</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <h4 className='text-[#18F0F0] mb-4'>We Clean</h4>
              <div className='relative flex items-center justify-center mb-8'>
                <div className='p-6 bg-slate-100 rounded-full w-32 h-32 md:w-48 md:h-48 shadow-gray-300 shadow-lg flex items-center justify-center'>
                  <Image src={wash} alt='wash' className='object-cover ' />
                </div>
                <div className='absolute top-[-10%] right-[-10%] md:top-[75%] md:right-[26%] bg-[#18F0F0] rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-gray-300 shadow-lg'>
                  <h2 className='text-center text-[#000] text-xs md:text-lg'>03</h2>
                </div>
              </div>
              <p className="md:mt-6">Wash, dry & fold your items</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <h4 className='text-[#18F0F0]  mb-4'>We Return</h4>
              <div className='relative flex items-center justify-center mb-8'>
                <div className='p-6 bg-slate-100 rounded-full w-32 h-32 md:w-48 md:h-48 shadow-gray-300 shadow-lg flex items-center justify-center'>
                  <Image src={door} alt='door' className='object-cover ' />
                </div>
                <div className='absolute top-[-10%] right-[-10%] md:top-[75%] md:right-[26%] bg-[#18F0F0] rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-gray-300 shadow-lg'>
                  <h2 className='text-center text-[#000] text-xs md:text-lg'>04</h2>
                </div>
              </div>
              <p className=" md:mt-6">Order will be delivered</p>
            </div>
          </div>

          </div>
          <div className='pt-10'>
            <div className='flex flex-col items-center '>
              <h6 className=" font-bold pt-4  text-[#18F0F0]">[ important Information ]</h6>
              <div className='text-center md:w-[50%] py-2'>
                <h2>Trusted Laundry Service</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-8 gap-4 p-8">
              {/* Approach Tab */}
              <div className={`bg-slate-100 w-full flex justify-center items-center  ${activeTab === 'approach' ? '[#18F0F0] text-white' : 'bg-slate-100 text-black'}`}>
                <button
                  onClick={() => setActiveTab('approach')}
                  className='p-6 font-bold flex items-center justify-center'
                >
                  Our Approach
                </button>
              </div>
              {/* Question and Answers Tab */}
              <div className={` group bg-slate-100 w-full cursor-pointer  group-hover:text-[#18F0F0] flex justify-center items-center  ${activeTab === 'qa' ? 'bg-black text-white' : 'bg-slate-100 text-black'}`} onClick={() => setActiveTab('qa')}>  
                <button
                  
                  className='p-6  font-bold flex items-center justify-center '
                >
                  Question / Answers
                </button>
              </div>
              {/* Why Choose Us Tab */}
              <div className={`bg-slate-100 w-full flex justify-center items-center  ${activeTab === 'choose' ? 'bg-black text-white' : 'bg-slate-100 text-black'}`}>               
                <button
                  onClick={() => setActiveTab('choose')}
                  className='p-6 font-bold flex items-center justify-center'
                >
                  Why Choose Us
                </button>               
              </div>             
            </div>
            <div>
            {activeTab === 'approach' && <Approach />}
            {activeTab === 'qa' && <QuestionAndAnswer faqs={faqs} />}
            {activeTab === 'choose' && <ChooseUs />}
            </div>
              
            <div>
              <div className='flex flex-col items-center '>
                <h6 className=" font-bold pt-4  text-[#18F0F0]">[ Testimonials ]</h6>
                <div className='text-center md:w-[50%] py-2'>
                  <h2>Why Our Clients say</h2>
                </div>
              </div>
              
               <TestimonialCarousel /> 


            </div>
            <PricePackage />
          </div>
        </div>
      </div>
    </>
  );
}
