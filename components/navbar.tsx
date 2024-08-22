import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '@/public/assets/logo.png'



const Navbar = () => {
  return (
    <>
      <div className='w-full'>
        <div className="hidden md:grid grid-cols-5 gap-8 border-b-2">
          <div className="md:col-span-2 lg:col-span-4">
            <div className='flex   py-4'>
              <div className='px-4'>Central-Market, Buea</div>
              <div  className='px-4'>Mon-Fri 08:00AM -  05:00PM</div>
              <div  className='px-4'>tafonsoftwarespecialist@gmail.com</div>
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <div className='flex justify-between'>
              <div className='flex py-4'><span className=' pr-4 text-[#18F0F0]'><FaPhoneVolume size={20}/></span><span>+(237) 679-048-674</span></div>
              <div>
                <ul className='flex py-4'>
                  <Link href='/'><li className='px-2'><IoLogoWhatsapp size={25} /></li></Link>
                  <Link href='/'><li className='px-2'><FaInstagramSquare  size={25}  /></li></Link>
                  <Link href='/'><li className='px-2'><FaFacebook size={25} /></li></Link>
                  <Link href='/'><li className='px-2'><FaXTwitter size={25} /></li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* navbar */}
        <div className="flex justify-between p-4">
          <div className='flex pr-2'>
            <Image src={logo} alt='logo' />
            <div className='self-center text-2xl px-2 font-bold'>
              <span className='text-[#18F0F0]'>Pressed</span><span >
                Perfect</span>
            </div>
          </div>
          <div>
            <ul className=' flex space-x-14 font-bold items-center py-4'>
              <Link href='/'><li className=' '>Home</li></Link>
              <Link href='/about'><li>About Us</li></Link>
              <Link href='/service'><li>Services</li></Link>
              <Link href='/price'><li>Prices</li></Link>
              <Link href='/faq'><li>FAQ</li></Link>
              <Link href='/contact'><li>Contact</li></Link>
            </ul>
          </div>
          <div>
            <Link href=''><button className='p-4 bg-[#18F0F0] text-white font-bold'>Schedule a Pickup</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar