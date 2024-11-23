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
        <div className='relative mt-36'>
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
        <div className="container mx-auto">
  <section className="grid lg:grid-cols-2 gap-0">
    <div className="relative w-full p-4">
      <div className="relative">
        <Image 
          src={aboutImg} 
          alt="About our services" 
          layout="responsive" 
          width={1200} 
          height={800} 
          className="object-cover"
        />
        <div className="absolute bottom-[-5%] left-[-5%] md:bottom-[-5%] md:left-[-5%]">
          <Image 
            src={aboutImg2} 
            alt="About basket" 
            width={340} 
            height={400} 
            className="object-cover w-[200px] md:w-[450px]"
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col m-4 md:pt-8 lg:pt-2">
      <div className="content-center">
        <p className="text-[#18F0F0] font-poppins lg:text-lg font-bold">
          [ More than 5 Years of Experience ]
        </p>
        <h5 className="py-3">Your Dry Cleaning and Laundry. Done.</h5>
        <p className="w-full py-2">
          We are professionals in the laundry and dry cleaning business, keeping up to date with the latest technologies, cleaning methods, and solutions for stains or delicate fabrics. We maintain high standards of integrity by following all regulations and environmental safety rules. We are passionate about transforming your laundry experience!
        </p>
        <ul className="py-4">
          <li className="flex">
            <GiCheckMark size={20} className="text-[#18F0F0]" />
            <p className="pl-2">100% Customer Satisfaction</p>
          </li>
          <li className="flex">
            <GiCheckMark size={20} className="text-[#18F0F0]" />
            <p className="pl-2">Free Collection & Delivery</p>
          </li>
          <li className="flex">
            <GiCheckMark size={20} className="text-[#18F0F0]" />
            <p className="pl-2">Affordable Prices</p>
          </li>
          <li className="flex">
            <GiCheckMark size={20} className="text-[#18F0F0]" />
            <p className="pl-2">Best Quality</p>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 content-center">
    {[
      { icon: <PiShirtFoldedFill size={40}  className='text-[#18F0F0]'/>, count: "5000+", label: "Shirts Washed" },
      { icon: <GiWashingMachine size={40} className='text-[#18F0F0]'/>, count: "25", label: "Shirts Machines" },
      { icon: <GiHanger size={40} className='text-[#18F0F0]'/>, count: "9000+", label: "Dry Cleaned Items" },
      { icon: <BsPersonHearts size={40} className='text-[#18F0F0]'/>, count: "100%", label: "Happy Customers" }
    ].map(({ icon, count, label }, index) => (
      <div className="flex" key={index}>
        <div className="p-4 rounded-full bg-slate-100 shadow-gray-300 shadow-lg">
          {icon}
        </div>
        <div className="pl-2">
          <h4 className='text-[#18F0F0]'>{count}</h4>
          <p>{label}</p>
        </div>
      </div>
    ))}
  </section>

  <section className="w-full">
    <div className="grid lg:grid-cols-2 md:p-8">
      <div className="flex bg-slate-100 w-full">
        <div className="content-center p-[10%]">
          <p className="text-[#18F0F0] lg:text-lg font-bold">[ Our Guarantee ]</p>
          <h5 className="py-3">The Best Guarantee in the Business</h5>
          <p className="w-full py-2">
            The most trusted brand in clothing care since 2019. We will do everything we can to return your clothes in great shape. In the rare instance that an item goes missing or is damaged during cleaning, we’ll reimburse you up to $1,000 maximum per order.
          </p>
          <Link href="">
            <button className="font-bold bg-[#18F0F0] p-4 text-white mt-4">Get Service Now</button>
          </Link>
        </div>
      </div>
      <div>
        <Image src={aboutImg3} alt="About us image" />
      </div>
    </div>
  </section>

  <section>
    <div className="flex flex-col items-center">
      <p className="pt-4 text-[#18F0F0] lg:text-lg font-bold">[ Our Advantages ]</p>
      <div className="text-center lg:w-[50%] py-2">
        <h5>Why Choose Us</h5>
      </div>
    </div>
  </section>

  <section className="grid lg:grid-cols-3 gap-6 p-6">
    {[
      { icon: <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>, title: "Personalized Experience", description: "We take utmost care of your clothes, segregating based on the cloth type." },
      { icon: <GiPriceTag size={40} className='text-[#18F0F0]'/>, title: "Affordable Pricing", description: "Prices that suit your pocket with multiple pricing options." },
      { icon: <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>, title: "Convenience", description: "Just a tap of a button, and your laundry gets done." },
      { icon: <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>, title: "Quality", description: "We use the best products, ensuring your clothes are always ready." },
      { icon: <TbTruckDelivery size={40} className='text-[#18F0F0]'/>, title: "Express Delivery", description: "Get your laundry done in less than 8 hours." },
      { icon: <HiClipboardDocumentList size={40} className='text-[#18F0F0]'/>, title: "Instant Order Update", description: "Regular updates to help you track your laundry." }
    ].map(({ icon, title, description }, index) => (
      <div className="flex space-x-4 p-4" key={index}>
        <div className="p-4 rounded-full bg-slate-100 shadow-gray-300 shadow-lg">
          {icon}
        </div>
        <div>
          <div className="font-bold md:text-xl">{title}</div>
          <p>{description}</p>
        </div>
      </div>
    ))}
  </section>
</div>
        <div className="container mx-auto py-8">
  <div className="grid lg:grid-cols-2 gap-8">
    <div className="flex justify-center">
      <Image src={aboutImg4} alt="About Us Image" className="rounded shadow-lg" />
    </div>
    <div className="flex flex-col bg-slate-100 p-6 lg:p-8 rounded-lg shadow-md">
      <div className="content-center">
        <p className="text-teal-500 lg:text-lg font-bold">[ Our History ]</p>
        <h5 className="py-3 text-xl font-semibold">Laundry & Dry Cleaning Foundation</h5>
        <p className="py-2">
          Founded in 2019, we follow a dream to serve our customers in a way that far exceeds expectations. As one of the leading laundry service providers, we understand our customers’ needs. It can be challenging to come home from a hectic day at the office and rush to the nearest laundry service.
        </p>
        <p className="py-2">
          You shouldn't have to tolerate late deliveries or low standards of work at high prices. Our comprehensive services include laundering, ironing, dry cleaning, shoe repairs, upholstery cleaning, and more, all designed to make your life easier.
        </p>
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
          <div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="flex flex-col items-center transition-transform transform hover:scale-105">
      <div className='w-64 h-64 overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <Image src={team} alt='About-us-img-4' className="object-cover w-full h-full" />
      </div>
      <div className='text-center pb-10 pt-4'>
        <h5 className='text-lg font-semibold'>John Doe</h5>
        <span className='text-sm text-gray-600'>Operational Manager</span>
      </div>
    </div>
    <div className="flex flex-col items-center transition-transform transform hover:scale-105">
      <div className='w-64 h-64 overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <Image src={team} alt='About-us-img-4' className="object-cover w-full h-full" />
      </div>
      <div className='text-center pb-10 pt-4'>
        <h5 className='text-lg font-semibold'>Rozi</h5>
        <span className='text-sm text-gray-600'>Service Manager</span>
      </div>
    </div>
    <div className="flex flex-col items-center transition-transform transform hover:scale-105">
      <div className='w-64 h-64 overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <Image src={team} alt='About-us-img-4' className="object-cover w-full h-full" />
      </div>
      <div className='text-center pb-10 pt-4'>
        <h5 className='text-lg font-semibold'>Levi</h5>
        <span className='text-sm text-gray-600'>Wash Expert</span>
      </div>
    </div>
  </div>
</div> 
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