import Image from 'next/image'
import React from 'react'
import banner from '@/public/assets/dst-bg-img.jpg'
import aboutImg from '@/public/assets/about-us-img01.jpg'
import aboutImg2 from '@/public/assets/about-us-img02.jpg'
import aboutImg4 from '@/public/assets/about_img.jpg'
import arrowRight from '@/public/assets/arrow-img-right.png'
import aboutImg3 from '@/public/assets/about-us-img04.jpg'
import { GiCheckMark } from "react-icons/gi";
import { PiLightbulbFilamentBold, PiShirtFoldedFill  } from "react-icons/pi";
import { GiPriceTag, GiWashingMachine, GiHanger } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { BsPersonHearts } from "react-icons/bs";

import Link from 'next/link'


const About = () => {
  return (
    <>
      <div className="w-full">
        <div className='relative'>
          <Image src={banner} alt='banner' className='lg:w-full'/>
          <div className='absolute top-[20%] left-[15%]'>
            <h5 className='text-white py-4'>Home / About Us</h5>
            <h1 className='text-white'>About Us</h1>
          </div>
        </div>
        <div className="container m-auto">

          <div className="grid grid-cols-2 gap-0">
            <div className='relative'>
              <div className='m-8'>
                <Image src={aboutImg} alt='about' />
                <div className='absolute bottom-2 left-[-1%]'>
                  <Image src={aboutImg2} alt='about-basket' width={'340'} height={'400'} />
                </div>
                <div className='absolute top-[30%] md:left-[40%] lg:left-[75%]'>
                  <Image src={arrowRight} alt='arrow right'  />
                </div>
              </div>
            </div>
            <div className="flex flex-cols m-6 ">
              <div className="content-center">
                <h6 className='text-[#18F0F0]'>[ More than 5 years of  Experience ]</h6>
                <h3 className='py-3'>Your Dry Cleaning and Laundry. Done.</h3>
                <span className='text-lg w-full py-2'>
                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!
                </span>
                <div>
                  <ul className='py-4'>
                    <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <span className='pl-2'>100% Customer Satisfaction</span></li>
                    <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2'>Free Collection & Delivery</span></li>
                    <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2'>Affordable Prices</span></li>
                    <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2'>Best Quality</span></li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 p-6">          
            <div className="flex">
              <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              < PiShirtFoldedFill  size={40} className='text-[#18F0F0] '/>
              </div>
              
              <div className='pl-2'>
                <h2>5000+</h2>
                <span>Shirts Washed</span> 
              </div>
            </div>
            <div className="flex">
            <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              <GiWashingMachine size={40} className='text-[#18F0F0] '/>
              </div>
              <div className='pl-2'>
                <h2>25</h2>
                <span>Shirts Machines</span> 
              </div>
            </div>
            <div className="flex">
            <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              <GiHanger  size={40} className='text-[#18F0F0] '/>
              </div>
              <div className='pl-2'>
                <h2>9000+</h2>
                <span>Dry Cleaned Items</span> 
              </div>
            </div>
            <div className="flex">
              <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              <BsPersonHearts  size={40} className='text-[#18F0F0] '/>
              </div>
              <div className='pl-2'>
                <h2>100%</h2>
                <span>Happy Customer</span> 
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-2 p-8">
              <div className='flex bg-slate-100 '>
                <div className="content-center p-[10%]">
                  <h6 className='text-[#18F0F0]'>[ Our Guarantee ]</h6>
                  <h3 className='py-3'>The best Guarantee in the Business</h3>
                  <span className='text-lg w-full py-2 justify-center'>
                  The most trusted brand in clothing care since 2019. We will do everything we can to return your clothes to you in great shape. In the rare instance that an item goes missing or is damaged during the cleaning process, we’ll reimburse you up to the full value of the item with a $1,000 maximum per order. </span>
                  <div>
                  <Link href=''><button className='font-bold bg-[#18F0F0] p-4 text-white mt-4'>Get Service Now</button></Link>
                  </div>
                </div>
              </div>
              <div className=''>
                <Image src={aboutImg3} alt='About-us-img-2' />
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center '>
              <h5 className=" font-bold py-4  text-[#18F0F0]">[ Our Advantages ]</h5>
              <div className='text-center md:w-[50%] py-4'>
                <h2>Why Choose Us</h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 p-6">
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              <PiLightbulbFilamentBold size={40} className='text-[#18F0F0] '/>
              </div>
              <div>
                <h5>Persionalized Experience</h5>
                <span>
                We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.
                </span>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <GiPriceTag  size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5>affordable Pricing</h5>
                <span>
                Prices that suits your pocket is one of our USP. An option of choosing between 2 types of pricing is available.
                </span>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5>Convenience</h5>
                <span>
                With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.
                </span>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5>Quality</h5>
                <span>
                We use the best in class products, to assure that your favorite clothes are always there for you to wear.
                </span>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <TbTruckDelivery size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5>Express Delivery</h5>
                <span>
                With our super express delivery, we would get your laundry done in less than 8 hours
                </span>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <HiClipboardDocumentList size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <h5>Instant Order Update</h5>
                <span>
                Regular updates of your order. to help you keep a track of your laundry and plan accordingly.
                </span>
              </div>
            </div>
            
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 relative py-8">
            <div className=''>
              <Image src={aboutImg4} alt='About-us-img-4' />
            </div>
            <div className='flex bg-slate-100 my-[3%] ml-[-15%] mr-[30%] '>
              <div className="content-center px-[6%]">
                <h6 className='text-[#18F0F0]'>[ Our History ]</h6>
                <h3 className='py-3'>Laundry & Dry Cleaning Foundation</h3>
                <span className='text-lg w-full py-2 justify-center'>
                Founded in 2019, we follow a dream and an We aim to serve our customers in a way that far exceeds expectation. Being one of the leading laundry service providers, we know our customers’ mindset. It is not easy to come home from a hectic day at the office and rush to the nearest laundry service with your clothes. So, we have an array of services to make things easy for you. <br/> You need not tolerate late deliveries, low standard of work merged with high prices. Our services cater to all your laundering and ironing, dry cleaning, shoe repairs, upholstery cleaning, etc.</span> 
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto">
          <div>
            <div className='flex flex-col items-center '>
              <h5 className=" font-bold py-4  text-[#18F0F0]">[ Our Teams ]</h5>
              <div className='text-center md:w-[50%] py-4'>
                <h2>Laundry Specialist</h2>
                <span>Our team’s goal each day is to earn your business with each visit and to make your experience with us the absolute best.</span>
              </div>
            </div>
          </div>
          <div className="carousel carousel-center">
            <div id="slide1" className="carousel-item relative w-full">
            <Image src={aboutImg4} alt='About-us-img-4' />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <Image src={aboutImg4} alt='About-us-img-4' />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <Image src={aboutImg4} alt='About-us-img-4' />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <Image src={aboutImg4} alt='About-us-img-4' />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About