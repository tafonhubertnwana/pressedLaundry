"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook, FaMapLocationDot, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';
import logo from '@/public/assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { LiaTimesSolid } from 'react-icons/lia';
import Modal from '@/components/modal';
import { RiTimerFill } from 'react-icons/ri';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname(); // Use usePathname

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if the link is active
  const isActiveLink = (path: string) => pathname === path; // Check against pathname

  return (
    <>
      <div className={`w-full overflow-hidden fixed top-0 z-50 transition-shadow duration-300 ${scrolling ? 'shadow-md' : ''}`}>
        <div className="hidden bg-white lg:flex justify-between border-b-2">
          <div className="lg:col-span-4">
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
        <div className="bg-white">
          <div className="flex justify-between p-4">
            <div className='flex pr-2'>
              <Image src={logo} alt='logo' />
              <div className='self-center text-2xl px-2 font-bold'>
                <span className='text-[#18F0F0]'>Pressed</span><span>Perfect</span>
              </div>
            </div>
            <div className=''>
              <ul className='hidden lg:flex space-x-14 font-bold items-center py-4'>
                <Link href='/'><li className={isActiveLink('/') ? 'text-[#18F0F0]' : ''}>Home</li></Link>
                <Link href='/about'><li className={isActiveLink('/about') ? 'text-[#18F0F0]' : ''}>About Us</li></Link>
                <Link href='/service'><li className={isActiveLink('/service') ? 'text-[#18F0F0]' : ''}>Services</li></Link>
                <Link href='/price'><li className={isActiveLink('/price') ? 'text-[#18F0F0]' : ''}>Prices</li></Link>
                <Link href='/faq'><li className={isActiveLink('/faq') ? 'text-[#18F0F0]' : ''}>FAQ</li></Link>
                <Link href='/contact'><li className={isActiveLink('/contact') ? 'text-[#18F0F0]' : ''}>Contact</li></Link>
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
              <div className="cursor-pointer self-center" onClick={handleNav}>
                <AiOutlineMenu size={30} />
              </div>
            </div>
          </div>
          {/* Mobile Navigation */}
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
                <div className='py-6 flex justify-between'>
                  <button onClick={openModal} className='p-4 bg-[#18F0F0] text-white fond-sm font-bold'>Schedule a Pickup</button>
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
                    <li className={`py-4 text-sm ${isActiveLink('/') ? 'text-[#18F0F0]' : ''}`} onClick={() => setNav(false)}>Home</li>
                  </Link>
                  <Link href="/about">
                    <li className={`py-4 text-sm ${isActiveLink('/about') ? 'text-[#18F0F0]' : ''}`} onClick={() => setNav(false)}>About Us</li>
                  </Link>
                  <Link href="/service">
                    <li className={`py-4 text-sm ${isActiveLink('/service') ? 'text-[#18F0F0]' : ''}`} onClick={() => setNav(false)}>Services</li>
                  </Link>
                  <Link href="/price">
                    <li className={`py-4 text-sm ${isActiveLink('/price') ? 'text-[#18F0F0]' : ''}`} onClick={() => setNav(false)}>Price</li>
                  </Link>
                  <Link href="/faq">
                    <li className={`py-4 text-sm ${isActiveLink('/faq') ? 'text-[#18F0F0]' : ''}`} onClick={() => setNav(false)}>Faq</li>
                  </Link>
                  <Link href="/contact">
                    <li className={`py-4 text-sm ${isActiveLink('/contact') ? 'text-[#18F0F0]' : ''}`} onClick={() => setNav(false)}>Contacts</li>
                  </Link>
                </ul>
              </div>
              <div>
                <ul className='py-4'>
                  <Link href='/'><li className='flex py-2'><FaMapLocationDot size={20} className='text-[#18F0F0]' /> <span className='text-black px-4'>Central-Market, Buea</span></li></Link>
                  <Link href='/'><li className='flex py-2'><RiTimerFill size={20} className='text-[#18F0F0]' /><span className='text-black px-4'>Mon-Fri:8am - 5pm <br/> Sat-Sun:10am - 5pm</span></li></Link>
                  <Link href='/'><li className='flex py-2'><IoIosMail size={20} className='text-[#18F0F0]' /><span className='text-black px-4'>tafonsoftwarespecialist@gmail.com</span></li></Link>
                  <Link href='/'><li className='flex py-2'><FaPhoneVolume size={20} className='text-[#18F0F0]' /><span className='text-black px-4'>+(237) 679-048-674</span></li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;