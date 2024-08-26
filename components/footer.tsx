import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/logo.png'
import Link from 'next/link'
import { IoLogoWhatsapp,IoIosMail } from "react-icons/io";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaMapLocationDot , FaPhoneVolume } from "react-icons/fa6";
import { RiTimerFill } from "react-icons/ri";



const Footer = () => {
  return (
    <>
      <div className='bg-[#1E1E1E]'>
        <div className='container m-auto py-[3%]'>
          <div>
            <div className='grid md:grid-cols-3 gap-8 p-4'>
              {/* first item */}
              <div>
                <div className='flex pr-2'>
                  <Image src={logo} alt='logo' />
                  <div className='self-center text-2xl px-2 font-bold'>
                    <span className='text-[#18F0F0]'>Pressed</span><span className='text-white'>
                      Perfect</span>
                  </div>
                </div>
                <div className='text-white py-4'>
                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies and cleaning methods.
                </div>
                <div>
                  <ul className='flex py-4'>
                    <Link href='/'><li className='px-2'><IoLogoWhatsapp size={25} className='text-white '/></li></Link>
                    <Link href='/'><li className='px-2'><FaInstagramSquare  size={25} className='text-white ' /></li></Link>
                    <Link href='/'><li className='px-2'><FaFacebook size={25} className='text-white '/></li></Link>
                    <Link href='/'><li className='px-2'><FaXTwitter size={25} className='text-white' /></li></Link>
                  </ul>
                </div>
              </div>
              {/* second item */}
              <div>
                <h4 className='text-white'>Contacts</h4>
                <div>
                <ul className='py-4'>
                    <Link href='/'><li className=' flex py-2'>< FaMapLocationDot size={20} className='text-[#18F0F0]' /> <span className='text-white px-4'>Central-Market, Buea</span></li></Link>
                    <Link href='/'><li  className=' flex  py-2'><RiTimerFill size={20} className='text-[#18F0F0]' /><span className='text-white px-4'>Mon-Fri:8am - 5pm <br/> Sat-SUn:10am - 5pm</span></li></Link>
                    <Link href='/'><li  className=' flex  py-2'><IoIosMail size={20} className='text-[#18F0F0]' /><span className='text-white px-4'>tafonsoftwarespecialist@gmail.com</span></li></Link>
                    <Link href='/'><li  className=' flex  py-2'><FaPhoneVolume  size={20} className='text-[#18F0F0]'/><span className='text-white px-4'>+(237) 679-048-674</span></li></Link>
                  </ul>
                </div>
              </div>
              {/* third item */}
              <div>
                <h4 className='text-white'>Newsletter Subscribe</h4>
                <div>
                  <div className='text-gray-400 py-4'>sign up and receive our special offers</div>
                <input type="email" placeholder='Your e-mail address'  className='p-4 w-full'/>
                <div>

                <Link href=''><button className='font-bold bg-[#18F0F0] p-4 text-white mt-4'>Subscribe Now</button></Link>
                </div>
                
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div className='bg-[#D9D9D9]'>
  <div className="container mx-auto px-4">
    <div className='flex flex-col md:flex-row md:justify-between items-center py-4'>
      {/* <!-- Footer Text --> */}
      <div className='text-center md:text-left'>
        <span className='text-gray-600'>&#169; 2022 
          <span className='text-[#18F0F0]'> Pressed</span>
          <span className='text-gray-600'> Perfect.</span> All rights reserved.
        </span>
      </div>
      {/* <!-- Links --> */}
      <div className='flex  gap-2 mt-4 md:mt-0'>
        <Link href='/'>
          <span  className='text-gray-600 hover:text-[#18F0F0]'>Terms & Conditions</span >
        </Link>
        <Link href='/'>
          <span className='text-gray-600 hover:text-[#18F0F0]'>Privacy Policy</span >
        </Link>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  )
}

export default Footer