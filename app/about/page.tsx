import Image from 'next/image'
import React from 'react'
import banner from '@/public/assets/dst-bg-img.jpg'
import aboutImg from '@/public/assets/about-us-img01.jpg'
import aboutImg2 from '@/public/assets/about-us-img02.jpg'
import aboutImg4 from '@/public/assets/about_img.jpg'
import arrowRight from '@/public/assets/arrow-img-right.png'
import aboutImg3 from '@/public/assets/about-us-img04.jpg'
import team from '@/public/assets/team-img04.jpg'
import { GiCheckMark } from "react-icons/gi";
import { PiLightbulbFilamentBold, PiShirtFoldedFill  } from "react-icons/pi";
import { GiPriceTag, GiWashingMachine, GiHanger } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { BsPersonHearts } from "react-icons/bs";

import Link from 'next/link'
import TeamCarousel from '@/components/aboutCarousel'




const About = () => {
  return (
    <>
      <div className="w-full">
        <div className='relative'>
          <Image 
            src={banner} 
            alt='banner' 
            className='w-full object-cover'
            layout='responsive' // Ensure the image scales responsively
            width={1200} // Specify the aspect ratio width
            height={600} // Specify the aspect ratio height
          />
          <div className='absolute top-[20%] left-[15%] md:top-[30%] md:left-[10%] p-4 md:p-6'>
            <h5 className='text-white text-sm md:text-base'>Home / About Us</h5>
            <h1 className='text-white text-2xl md:text-6xl font-bold'>About Us</h1>
          </div>
        </div>
        <div className="container m-auto">

          <div className="grid lg:grid-cols-2 gap-0">
            <div className='relative w-full p-4'>
              <div className='relative'>
                <Image 
                  src={aboutImg} 
                  alt='about' 
                  layout='responsive' 
                  width={1200} 
                  height={800} 
                  className='object-cover'
                />
                <div className='absolute bottom-[-5%] left-[-5%] md:bottom-[-5%] md:left-[-5%]'>
                  <Image 
                    src={aboutImg2} 
                    alt='about-basket' 
                    width={340} 
                    height={400} 
                    className='object-cover w-[200px] md:w-[450px]'
                  />
                </div>
                {/* Uncomment and adjust for responsive arrow positioning */}
                {/* <div className='absolute top-1/2 md:top-[30%] lg:top-[25%] left-1/2 md:left-[40%] lg:left-[75%] transform -translate-x-1/2'>
                  <Image src={arrowRight} alt='arrow right' />
                </div> */}
              </div>
            </div>

            <div className="flex flex-cols m-4 md:pt-8 lg:pt-2">
              <div className="content-center">
                <p className='text-[#18F0F0] font-poppins lg:text-lg font-bold'>[ More than 5 years of  Experience ]</p>
                <h5 className='py-3'>Your Dry Cleaning and Laundry. Done.</h5>
                <p className=' w-full py-2'>
                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!
                </p>
                <div>
                  <ul className='py-4'>
                    <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <p className='pl-2'>100% Customer Satisfaction</p></li>
                    <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Free Collection & Delivery</p></li>
                    <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Affordable Prices</p></li>
                    <li className='flex'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <p className='pl-2'>Best Quality</p></li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 content-center">          
            <div className="flex">
              <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              < PiShirtFoldedFill  size={40} className='text-[#18F0F0] '/>
              </div>
              
              <div className='pl-2'>
                <h4>5000+</h4>
                <p>Shirts Washed</p> 
              </div>
            </div>
            <div className="flex">
            <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              <GiWashingMachine size={40} className='text-[#18F0F0] '/>
              </div>
              <div className='pl-2'>
                <h4>25</h4>
                <p>Shirts Machines</p> 
              </div>
            </div>
            <div className="flex">
            <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              <GiHanger  size={40} className='text-[#18F0F0] '/>
              </div>
              <div className='pl-2'>
                <h4>9000+</h4>
                <p>Dry Cleaned Items</p> 
              </div>
            </div>
            <div className="flex">
              <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              <BsPersonHearts  size={40} className='text-[#18F0F0] '/>
              </div>
              <div className='pl-2'>
                <h4>100%</h4>
                <p>Happy Customer</p> 
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="grid lg:grid-cols-2  p-8">
              <div className='flex bg-slate-100 w-full '>
                <div className="content-center p-[10%]">
                  <p className='text-[#18F0F0] lg:text-lg font-bold'>[ Our Guarantee ]</p>
                  <h5 className='py-3'>The best Guarantee in the Business</h5>
                  <p className=' w-full py-2 justify-center'>
                  The most trusted brand in clothing care since 2019. We will do everything we can to return your clothes to you in great shape. In the rare instance that an item goes missing or is damaged during the cleaning process, we’ll reimburse you up to the full value of the item with a $1,000 maximum per order. </p>
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
              <p className="  pt-4  text-[#18F0F0] lg:text-lg font-bold">[ Our Advantages ]</p>
              <div className='text-center lg:w-[50%] py-2'>
                <h5>Why Choose Us</h5>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 p-6">
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
              <PiLightbulbFilamentBold size={40} className='text-[#18F0F0] '/>
              </div>
              <div>
                <div className='font-bold md:text-xl'>Persionalized Experience</div>
                <p>
                We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <GiPriceTag  size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <div className='font-bold md:text-xl'>affordable Pricing</div>
                <p>
                Prices that suits your pocket is one of our USP. An option of choosing between 2 types of pricing is available.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <div className='font-bold md:text-xl'>Convenience</div>
                <p>
                With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <div className='font-bold md:text-xl'>Quality</div>
                <p>
                We use the best in class products, to assure that your favorite clothes are always there for you to wear.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <TbTruckDelivery size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <div className='font-bold md:text-xl'>Express Delivery</div>
                <p>
                With our super express delivery, we would get your laundry done in less than 8 hours
                </p>
              </div>
            </div>
            <div className="flex space-x-4 p-4">
              <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
              <HiClipboardDocumentList size={40} className='text-[#18F0F0]'/>
              </div>
              <div>
                <div className='font-bold md:text-xl'>Instant Order Update</div>
                <p>
                Regular updates of your order. to help you keep a track of your laundry and plan accordingly.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-2 relative py-8">
            <div className=''>
              <Image src={aboutImg4} alt='About-us-img-4' />
            </div>
            <div className='flex bg-slate-100 py-8 w-full lg:my-[3%] lg:ml-[-15%] lg:mr-[30%] '>
              <div className="content-center px-[6%]">
                <p className='text-[#18F0F0] lg:text-lg font-bold'>[ Our History ]</p>
                <h5 className='py-3'>Laundry & Dry Cleaning Foundation</h5>
                <p className=' w-full py-2 justify-center'>
                Founded in 2019, we follow a dream and an We aim to serve our customers in a way that far exceeds expectation. Being one of the leading laundry service providers, we know our customers’ mindset. It is not easy to come home from a hectic day at the office and rush to the nearest laundry service with your clothes. So, we have an array of services to make things easy for you.
                 </p><p className=' w-full py-2 justify-center'> You need not tolerate late deliveries, low standard of work merged with high prices. Our services cater to all your laundering and ironing, dry cleaning, shoe repairs, upholstery cleaning, etc.</p> 
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto">
          <div>
            <div className='flex flex-col items-center '>
              <p className="  pt-4  text-[#18F0F0] lg:text-lg font-bold">[ Our Teams ]</p>
              <div className='text-center lg:w-[50%] py-2'>
                <h5>Laundry Specialist</h5>
                <p className='py-2'>Our team’s goal each day is to earn your business with each visit and to make your experience with us the absolute best.</p>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className='w-64 h-64 overflow-hidden rounded-full'>
                <Image src={team} alt='About-us-img-4'  className="object-cover"/>
                </div>
                <div className='justify-center pb-10 pt-4'>
                  <h5 className='justify-center'>John Doe</h5>
                  <span>
                      Operational Manager
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className='w-64 h-64 overflow-hidden rounded-full'>
                <Image src={team} alt='About-us-img-4' className="object-cover" />
                </div>
                <div className='justify-center pb-10 pt-4'>
                  <h5>Rozi</h5>
                  <span>
                      Service Manager
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className='rounded-full w-64 h-64  overflow-hidden'>
                <Image src={team} alt='About-us-img-4' className="object-cover" />
                </div>
                <div className='justify-center pb-10 pt-4'>
                  <h5>Levi</h5>
                  <span>
                      Wash Expert
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div>

            <TeamCarousel /> 
          </div> */}
        </div>
       
        {/* <TeamCarousel />  */}

      </div>
    </>
  )
}

export default About