'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '@/public/assets/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { LiaTimesSolid } from 'react-icons/lia';
import Modal from '@/components/modal'



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
      <div className='w-full'>
        <div className="hidden md:grid grid-cols-5 gap-0 border-b-2">
          <div className="md:col-span-3 lg:col-span-4">
            <div className='flex   py-4'>
              <div className='px-4'>Central-Market, Buea</div>
              <div  className='px-4'>Mon-Fri 08:00AM -  05:00PM</div>
              <div  className='px-4'>tafonsoftwarespecialist@gmail.com</div>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
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
          <div className=' '>
            <ul className=' hidden md:flex space-x-14 font-bold items-center py-4'>
              <Link href='/'><li className=' '>Home</li></Link>
              <Link href='/about'><li>About Us</li></Link>
              <Link href='/service'><li>Services</li></Link>
              <Link href='/price'><li>Prices</li></Link>
              <Link href='/faq'><li>FAQ</li></Link>
              <Link href='/contact'><li>Contact</li></Link>
            </ul>
          </div>
          <div className='hidden md:flex'>
            <button onClick={openModal} className='p-4 bg-[#18F0F0] text-white font-bold' >Schedule a Pickup</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
              <AiOutlineMenu size={30} />
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
                ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-8 py-1 ease-in duration-500 dark:bg-slate-800 z-100'
                : 'md:hidden fixed left-[-100%] top-0 py-5 ease-in duration-500 dark:bg-slate-800 z-100'
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
                <LiaTimesSolid size={14} />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase dark:text-white">
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
            <div className="pt-40">
              <ul className="flex justify-between items-center py-4">
                <Link href="/" target="_blank">
                  <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                    <IoLogoWhatsapp className="text-blue-500" />
                  </li>
                </Link>
                <Link href="/" target="_blank">
                  <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                    <FaInstagramSquare />
                  </li>
                </Link>
                <Link href="mailto:tafonsoftwarespecialist@gmail.com" target="_blank">
                  <li className="rounded-full cursor-pointer shadow-gray-300 p-6 shadow-lg">
                    <FaFacebook />
                  </li>
                </Link>
                <Link href="/" target="_blank">
                  <li className="hover:scale-110 ease-in duration-300 rounded-full cursor-pointer dark:bg-slate-400 shadow-gray-300 p-6 shadow-lg">
                    <FaXTwitter />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar