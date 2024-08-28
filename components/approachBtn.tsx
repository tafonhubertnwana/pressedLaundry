// components/Approach.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import aboutImg3 from '@/public/assets/about-us-img04.jpg';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { PiLightbulbFilamentBold, PiShirtFoldedFill } from 'react-icons/pi';

// Define types for props if needed (currently not needed for this component)
interface ApproachProps {}

const Approach: React.FC<ApproachProps> = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center p-6 bg-slate-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold py-3">Our Approach</h3>
            <p className="text-lg py-2">
              We approach workforce accommodations with a property development mindset. Our “Develop. Own. Operate.” business model produces integrated solutions that enable clients to focus on their core business.
            </p>
            <p>
              Clients benefit from consistent service delivery with greater cost and quality control, as well as more efficient use of their operational and financial resources.
            </p>
            <Link href="/service">
              <div>
                <button className="font-bold bg-[#18F0F0] p-4 text-white rounded-lg mt-4">
                  Get Service Now
                </button>
              </div>
            </Link>
          </div>
          
          {/* Image */}
          <div className="w-full">
            <Image src={aboutImg3} alt="About us image" layout="responsive" />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 p-6">
          <Feature
            Icon={PiLightbulbFilamentBold}
            title="High Quality"
            description="We work hard to make sure that the clothes you get back are spotless and ready for action."
          />
          <Feature
            Icon={PiShirtFoldedFill}
            title="Cleaner & Greener"
            description="We work with the environment in mind. No harsh chemicals."
          />
          <Feature
            Icon={FaHandHoldingHeart}
            title="Happiness Guarantee"
            description="If you're not completely satisfied with the wash or dry cleaning, we will re-process your clothes for free!"
          />
        </div>
      </div>
    </section>
  );
};

// Reusable Feature Component
interface FeatureProps {
  Icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ Icon, title, description }) => (
  <div className="flex space-x-4 p-8 bg-slate-100 rounded-lg shadow-md">
    <div className="flex  self-start p-4 bg-white rounded-full shadow-lg">
      <Icon size={40} className="text-[#18F0F0]" />
    </div>
    <div>
      <h5 className="text-lg font-semibold py-2">{title}</h5>
      <p>{description}</p>
    </div>
  </div>

);

export default Approach;