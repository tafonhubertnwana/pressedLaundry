import Image from 'next/image'
import banner from '@/public/assets/dst-bg-img.jpg'
import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { FaPhoneVolume } from 'react-icons/fa'
import { RiTimerFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <>
      <div className="w-full">
        <div className='relative'>
          <Image src={banner} alt='banner' className='lg:w-full'/>
          <div className='absolute top-[20%] left-[15%]'>
            <h5 className='text-white py-4'>Home / Contact</h5>
            <h1 className='text-white'>Contact</h1>
          </div>
        </div>
        <div className='container m-auto py-4'>
          <div className='flex flex-col items-center '>
            <h5 className=" font-bold py-4  text-[#18F0F0]">[ get in Touch with Us ]</h5>
            <div className='text-center md:w-[50%] py-4'>
              <h2>Contact Information</h2>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 content-center">
            <div className="flex flex-col items-center">
              <div className='p-6 bg-[#18F0F0] rounded-full my-4'>
              < FaMapLocationDot size={40} className='text-white' /> 
              </div>
              <h6>Post Address</h6>
              <p className="text-sm ">Central Market, Buea</p>
            </div>
            <div className="flex flex-col items-center">
              <div  className='p-6 bg-[#18F0F0] rounded-full my-4'>
              < FaPhoneVolume size={40} className='text-white' /> 
              </div>
              <h6>Contact Phone</h6>
              <p className="text-sm ">+ (237) 670-048-674</p>
            </div>
            <div className="flex flex-col items-center">
              <div  className='p-6 bg-[#18F0F0] rounded-full my-4'>
              <IoIosMail size={40} className='text-white' /> 
              </div>
              <h6>E-mail Address</h6>
              <p className="text-sm ">Tafonsoftwarespecialist@gmail</p>
            </div>
            <div className="flex flex-col items-center">
              <div  className='p-6 bg-[#18F0F0] rounded-full my-4'>
              <RiTimerFill size={40} className='text-white' />
              </div>
              <h6>Opening Hours</h6>
              <span className="text-sm ">Mon-Fri 08:00am - 05:00pm<br/>Sat-Sun 10:00am - 05:00pm</span>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="flex flex-col items-center py-6">
         <div className='text-center md:w-[25%] pt-4'>
            <h2>Get in Touch. We're Here to Help.</h2>
            <p className='text-lg py-4'>We look forward to helping you create and maintain a clean, healthy environment that’s as enjoyable as it is functional.</p>
          </div>
        </div> 
        <div className="md:w-[50%] m-auto">
          <div className="p-4">
            <form>
              <div className="flex flex-col py-2">
                <input
                  type="text"
                  name="senderName"
                  id="name"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  placeholder='Your Name'
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col py-2">
                    <input
                      type="email"
                      name="senderEmail"
                      id="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      placeholder='E-mail'
                      required
                    />
                  </div>
                <div className="flex flex-col py-2">
                  <input
                    type="tel"
                    name="senderPhone"
                    id="phone"
                    placeholder='Phone'
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                
              </div>
              <div className="flex flex-col py-2">
                <textarea
                  name="message"
                  id="message"
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows={10}
                  placeholder='Your Message'
                  required
                />
              </div>
              <div className=' flex flex-col items-center py-4'>
                <div className='flex items-center '>
                  <span><input type='checkbox' className='w-6 h-6 ' /></span>
                  <span className='px-4'> I accept the privacy and terms</span>
                </div>
                <div>
                  <button type='submit' className='bg-[#18F0F0] dark:bg-slate-100   p-4 mt-4 text-gray-100 font-bold' 
                    
                >Send Message</button>
                </div>
              </div>
            </form>
            
          </div>
        </div>        
      </div>
    </>
  )
}

export default Contact