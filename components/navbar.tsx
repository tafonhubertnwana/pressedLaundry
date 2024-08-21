import Link from 'next/link';
import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from 'react-icons/io';


const Navbar = () => {
  return (
    <>
      <div className='w-full'>
        <div className="grid grid-cols-5 gap-8 border-b-2">
          <div className="col-span-3">
            <div className='flex justify-evenly  py-4'>

              <div className='px-4'>Central-Market, Buea</div>
              <div  className='px-4'>Mon-Fri 08:00AM -  05:00PM</div>
              <div  className='px-4'>tafonsoftwarespecialist@gmail.com</div>
            </div>
          </div>
          <div className="col-span-2">
            <div className='flex justify-evenly
            '>

              <div className='flex py-4'><span className=' pr-4 text-[#18F0F0]'><FaPhoneVolume size={20}/></span><span>+(237) 679-048-674</span></div>
              <div>
                    <ul className='flex py-4'>
                      <Link href='/'><li className='px-4'><IoLogoWhatsapp size={25} /></li></Link>
                      <Link href='/'><li className='px-4'><FaInstagramSquare  size={25}  /></li></Link>
                      <Link href='/'><li className='px-4'><FaFacebook size={25} /></li></Link>
                      <Link href='/'><li className='px-4'><FaXTwitter size={25} /></li></Link>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Navbar