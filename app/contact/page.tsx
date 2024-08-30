import Image from 'next/image'
import banner from '@/public/assets/dst-bg-img.jpg'
import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { FaPhoneVolume } from 'react-icons/fa'
import { RiTimerFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className='relative'>
        <Image 
          src={banner} 
          alt='Contact banner' 
          className='w-full object-cover'
          layout='responsive'
          width={1200}
          height={600}
        />
        <div className='absolute top-[20%] left-[15%] md:top-[30%] md:left-[10%] p-4 md:p-6'>
          <h5 className='text-white text-sm md:text-base'>Home / Contact</h5>
          <h1 className='text-white text-2xl md:text-6xl font-bold'>Contact</h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className='container mx-auto p-8'>
        <div className='flex flex-col items-center'>
          <h5 className="font-bold text-[#18F0F0] text-sm md:text-base">[ Get in Touch with Us ]</h5>
          <div className='text-center md:w-[50%] py-4'>
            <h2>Contact Information</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <FaMapLocationDot size={40} className='text-white' />, title: 'Post Address', content: 'Central Market, Buea' },
            { icon: <FaPhoneVolume size={40} className='text-white' />, title: 'Contact Phone', content: '+ (237) 670-048-674' },
            { icon: <IoIosMail size={40} className='text-white' />, title: 'E-mail Address', content: 'Tafonsoftwarespecialist@gmail.com' },
            { icon: <RiTimerFill size={40} className='text-white' />, title: 'Opening Hours', content: 'Mon-Fri 08:00am - 05:00pm\nSat-Sun 10:00am - 05:00pm' },
          ].map(({ icon, title, content }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className='p-6 bg-[#18F0F0] rounded-full my-4 shadow-lg'>
                {icon}
              </div>
              <h6 className='font-semibold'>{title}</h6>
              <p className="text-sm text-center">{content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col items-center pt-6">
        <div className='text-center w-full md:w-[50%]'>
          <h2>Get in Touch. We're Here to Help.</h2>
          <p className='text-lg py-4'>
            We look forward to helping you create and maintain a clean, healthy environment that’s as enjoyable as it is functional.
          </p>
        </div>

        <div className="w-full md:w-[50%] mx-auto">
          <div className="p-4">
            <form>
              <div className="flex flex-col py-2">
                <input
                  type="text"
                  name="senderName"
                  id="name"
                  className="border-2 rounded-lg p-3 border-gray-300"
                  placeholder='Your Name'
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 py-2">
                <div className="flex flex-col py-2">
                  <input
                    type="email"
                    name="senderEmail"
                    id="email"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    placeholder='E-mail'
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <input
                    type="tel"
                    name="senderPhone"
                    id="phone"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    placeholder='Phone'
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
              <div className='flex flex-col items-center py-4'>
                <div className='flex items-center mb-4'>
                  <input
                    type='checkbox'
                    id='privacy'
                    className='w-6 h-6 mr-2'
                    required
                  />
                  <label htmlFor='privacy' className='text-sm'>I accept the privacy and terms</label>
                </div>
                <button
                  type='submit'
                  className='bg-[#18F0F0] text-gray-100 p-4 mt-4 rounded-lg font-bold'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
