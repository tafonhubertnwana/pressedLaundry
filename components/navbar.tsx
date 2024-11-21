'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook, FaMapLocationDot, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';
import logo from '@/public/assets/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { LiaTimesSolid } from 'react-icons/lia';
import Modal from '@/components/modal'
import { RiTimerFill } from 'react-icons/ri';

const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <div className='w-full overflow-hidden fixed top-0 z-50 '>
        <div className="hidden bg-white lg:flex justify-between border-b-2">
          <div className=" lg:col-span-4 ">
            <div className='flex py-4'>
              <div className='px-4'>Central-Market, Buea</div>
              <div className='px-4'>Mon-Fri 08:00AM - 05:00PM</div>
              <div className='px-4'>tafonsoftwarespecialist@gmail.com</div>
            </div>
          </div>
          <div className="">
            <div className='flex justify-between'>
              <div className='flex py-4'>
                <span className='pr-4 text-[#18F0F0]'><FaPhoneVolume size={20}/></span>
                <span>+(237)679048674</span>
              </div>
              <div>
                <ul className='flex py-4'>
                  <Link href='/'><li className='px-2'><IoLogoWhatsapp size={25} /></li></Link>
                  <Link href='/'><li className='px-2'><FaInstagramSquare size={25} /></li></Link>
                  <Link href='/'><li className='px-2'><FaFacebook size={25} /></li></Link>
                  <Link href='/'><li className='px-2'><FaXTwitter size={25} /></li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* navbar */}
        <div className=" bg-white shadow-md">
          <div className="flex justify-between p-4">
            <div className='flex pr-2'>
              <Image src={logo} alt='logo' />
              <div className='self-center text-2xl px-2 font-bold'>
                <span className='text-[#18F0F0]'>Pressed</span><span>Perfect</span>
              </div>
            </div>
            <div className=''>
              <ul className='hidden lg:flex space-x-14 font-bold items-center py-4'>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About Us</li></Link>
                <Link href='/service'><li>Services</li></Link>
                <Link href='/price'><li>Prices</li></Link>
                <Link href='/faq'><li>FAQ</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
              </ul>
            </div>
            <div className='hidden lg:flex'>
              <button onClick={openModal} className='p-4 bg-[#18F0F0] text-white font-bold'>Schedule a Pickup</button>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className='lg:hidden md:flex space-x-4'>
              <div className='hidden md:flex md:py-4'>
                <span className='pr-4 text-[#18F0F0]'><FaPhoneVolume size={20}/></span>
                <span>+(237) 679-048-674</span>
              </div>
              <div className=" cursor-pointer self-center" onClick={handleNav}>
                <AiOutlineMenu size={30} />
              </div>
            </div>
          </div>
          <div
            className={`${
              nav ? 'fixed left-0 top-0 h-screen w-full bg-black/30 md:hidden dark:bg-slate-800 z-100' : ''
            }`}
          >
            <div
              className={`${
                nav
                  ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-8 py-1 transition-transform ease-in-out duration-300 dark:bg-slate-800 z-100 transform translate-x-0'
                  : 'md:hidden fixed left-[-100%] top-0 py-5 transition-transform ease-in-out duration-300 dark:bg-slate-800 z-100 transform -translate-x-full'
              }`}
            >
              <div className="flex w-full justify-between border-b">
                <div className='py-6'>
                  <button onClick={openModal} className='p-4 bg-[#18F0F0] text-white font-bold'>Schedule a Pickup</button>
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
                <div
                  onClick={handleNav}
                  className="self-center rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-3 shadow-lg"
                >
                  <LiaTimesSolid size={25} className='font-bold'/>
                </div>
              </div>
              <div className="py-4 flex flex-col border-b">
                <ul className="font-bold uppercase dark:text-white">
                  <Link href="/">
                    <li className="py-4 text-sm" onClick={() => setNav(false)}>Home</li>
                  </Link>
                  <Link href="/about">
                    <li className="py-4 text-sm" onClick={() => setNav(false)}>About Us</li>
                  </Link>
                  <Link href="/service">
                    <li className="py-4 text-sm" onClick={() => setNav(false)}>Services</li>
                  </Link>
                  <Link href="/price">
                    <li className="py-4 text-sm" onClick={() => setNav(false)}>Price</li>
                  </Link>
                  <Link href="/faq">
                    <li className="py-4 text-sm" onClick={() => setNav(false)}>Faq</li>
                  </Link>
                  <Link href="/contact">
                    <li className="py-4 text-sm" onClick={() => setNav(false)}>Contacts</li>
                  </Link>
                </ul>
              </div>
              <div>
                <ul className='py-4'>
                    <Link href='/'><li className=' flex py-2'>< FaMapLocationDot size={20} className='text-[#18F0F0]' /> <span className='text-black px-4'>Central-Market, Buea</span></li></Link>
                    <Link href='/'><li  className=' flex  py-2'><RiTimerFill size={20} className='text-[#18F0F0]' /><span className='text-black px-4'>Mon-Fri:8am - 5pm <br/> Sat-Sun:10am - 5pm</span></li></Link>
                    <Link href='/'><li  className=' flex  py-2'><IoIosMail size={20} className='text-[#18F0F0]' /><span className='text-black px-4'>tafonsoftwarespecialist@gmail.com</span></li></Link>
                    <Link href='/'><li  className=' flex  py-2'><FaPhoneVolume  size={20} className='text-[#18F0F0]'/><span className='text-black px-4'>+(237) 679-048-674</span></li></Link>
                  </ul>
                </div>
              {/* <div className="pt-10">
                <ul className="flex justify-between items-center py-4">
                  <Link href="/" target="_blank">
                    <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                      <IoLogoWhatsapp size={25}  className="text-green-500" />
                    </li>
                  </Link>
                  <Link href="/" target="_blank">
                    <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                      <FaInstagramSquare size={25}  className='text-red-800' />
                    </li>
                  </Link>
                  <Link href="mailto:tafonsoftwarespecialist@gmail.com" target="_blank">
                    <li className="rounded-full  cursor-pointer shadow-gray-300 p-6 shadow-lg">
                      <FaFacebook size={25}   className='text-blue-800'/>
                    </li>
                  </Link>
                  <Link href="/" target="_blank">
                    <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                      <FaXTwitter size={25}  />
                    </li>
                  </Link>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
