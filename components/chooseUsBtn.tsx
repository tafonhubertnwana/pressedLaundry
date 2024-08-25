import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiLightbulbFilamentBold } from 'react-icons/pi'
import { GiPriceTag } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import { HiClipboardDocumentList } from 'react-icons/hi2'


const ChooseUs = () => {
  return (
    <>
       <div className="w-full">
        <div className="container m-auto">
          <div className="">
            <div className="grid grid-cols-3 p-8">
              <div className='flex flex-col items-start p-6'>
                <div className='pb-6'>
                  <h2 className='py-2'>Why Choose Us</h2>
                  <span>
                  We know that a strong, client-focused business is a smart business. We have a 20,000-square-foot, state-of-the-art workshop where all cleaning, specialized spot removal, pressing, inspection and packaging of your items take place.
                  </span>
                </div>
                <div>
                  <h4>Values & Experience</h4>
                  <span>
                  We know that a strong, client-focused business is a smart business. We have a 20,000-square-foot, state-of-the-art workshop where all cleaning, specialized spot removal, pressing, inspection and packaging of your items take place.
                  </span>
                </div>
                <div className='my-6'>
                  <Link href=''><button className='p-4 bg-[#18F0F0] text-white font-bold'>Get Service Now</button></Link>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex space-x-4 p-4">
                  <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
                  <PiLightbulbFilamentBold size={40} className='text-[#18F0F0] '/>
                  </div>
                  <div>
                    <h5>Persionalized Experience</h5>
                    <span>
                    We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4 p-4">
                  <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                  <GiPriceTag  size={40} className='text-[#18F0F0]'/>
                  </div>
                  <div>
                    <h5>affordable Pricing</h5>
                    <span>
                    Prices that suits your pocket is one of our USP. An option of choosing between 2 types of pricing is available.
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4 p-4">
                  <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                  <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>
                  </div>
                  <div>
                    <h5>Convenience</h5>
                    <span>
                    With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className="flex space-x-4 p-4">
                  <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                  <PiLightbulbFilamentBold size={40} className='text-[#18F0F0]'/>
                  </div>
                  <div>
                    <h5>Quality</h5>
                    <span>
                    We use the best in class products, to assure that your favorite clothes are always there for you to wear.
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4 p-4">
                  <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                  <HiClipboardDocumentList size={40} className='text-[#18F0F0]'/>
                  </div>
                  <div>
                    <h5>Instant Order Update</h5>
                    <span>
                    Regular updates of your order. to help you keep a track of your laundry and plan accordingly.
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4 p-4">
                  <div className='p-4 rounded-full bg-slate-100  self-start shadow-gray-300 shadow-lg'>
                  <TbTruckDelivery size={40} className='text-[#18F0F0]'/>
                  </div>
                  <div>
                    <h5>Express Delivery</h5>
                    <span>
                    With our super express delivery, we would get your laundry done in less than 8 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            
      </div>
    </>
  )
}

export default ChooseUs