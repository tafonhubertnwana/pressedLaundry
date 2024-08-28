// components/ChooseUs.tsx

import React from 'react'
import Link from 'next/link'
import { PiLightbulbFilamentBold } from 'react-icons/pi'
import { GiPriceTag } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import { HiClipboardDocumentList } from 'react-icons/hi2'

// Define types for the Feature component props
interface FeatureProps {
  Icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
}

// Reusable Feature Component
const Feature: React.FC<FeatureProps> = ({ Icon, title, description }) => (
  <div className="flex space-x-4 p-4 md:p-4">
    <div className='p-4 rounded-full bg-slate-100 self-start shadow-gray-300 shadow-lg'>
      <Icon size={40} className='text-[#18F0F0]' />
    </div>
    <div>
      <h5 className=''>{title}</h5>
      <p>{description}</p>
    </div>
  </div>
);

const ChooseUs: React.FC = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Introduction */}
          <div className="flex flex-col items-start p-6">
            <div className='pb-6'>
              <h2 className='text-2xl font-bold py-2'>Why Choose Us</h2>
              <p>
                We know that a strong, client-focused business is a smart business. We have a 20,000-square-foot, state-of-the-art workshop where all cleaning, specialized spot removal, pressing, inspection, and packaging of your items take place.
              </p>
            </div>
            <div className='mb-6'>
              <h4 className='text-xl font-semibold'>Values & Experience</h4>
              <p>
                We know that a strong, client-focused business is a smart business. We have a 20,000-square-foot, state-of-the-art workshop where all cleaning, specialized spot removal, pressing, inspection, and packaging of your items take place.
              </p>
            </div>
            <Link href='/service'>
              <div>
                <button className='p-4 bg-[#18F0F0] text-white font-bold rounded-lg'>
                  Get Service Now
                </button>
              </div>
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-col space-y-8">
            <Feature
              Icon={PiLightbulbFilamentBold}
              title="Personalized Experience"
              description="We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement."
            />
            <Feature
              Icon={GiPriceTag}
              title="Affordable Pricing"
              description="Prices that suit your pocket are one of our USPs. An option of choosing between 2 types of pricing is available."
            />
            <Feature
              Icon={PiLightbulbFilamentBold}
              title="Convenience"
              description="With just a tap of a button, your laundry gets done, giving you leisure time to spend with family and friends."
            />
          </div>

          {/* More Features */}
          <div className="flex flex-col space-y-8">
            <Feature
              Icon={PiLightbulbFilamentBold}
              title="Quality"
              description="We use the best-in-class products to ensure that your favorite clothes are always there for you to wear."
            />
            <Feature
              Icon={HiClipboardDocumentList}
              title="Instant Order Update"
              description="Regular updates on your order to help you keep track of your laundry and plan accordingly."
            />
            <Feature
              Icon={TbTruckDelivery}
              title="Express Delivery"
              description="With our super express delivery, we get your laundry done in less than 8 hours."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs;
