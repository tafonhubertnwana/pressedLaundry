import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import client from '@/public/assets/testimonials-img03.jpg'; 
import { MdEco } from 'react-icons/md';
import { RiTimerFill } from 'react-icons/ri';
import { FaMoneyBillWave } from 'react-icons/fa';

// Slick slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // Tablet
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768, // Mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480, // Smaller mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const testimonials = [
  {
    name: 'John Doe',
    role: 'Client',
    image: client,
    testimonial:
      'The new machines have had very few problems and their services are always done in a timely fashion. Our residents have been thrilled with the PressedPerfect team and we look forward to a long relationship with this first-class organization.',
  },
  {
    name: 'John Doe',
    role: 'Client',
    image: client,
    testimonial:
      'Over the last eight years they have proven, on several occasions that they are knowledgeable, prompt, and concerned about my immediate situation. I personally encourage any business associated with their laundry services.',
  },
  {
    name: 'John Doe',
    role: 'Client',
    image: client,
    testimonial:
      'Second to none for convenience, quality & turnaround time. Great prices and services. Amazing support team behind the service, if you ever need it. No more having to save up piles of dry cleaning to make it worth taking out.',
  },
];

const carouselItems = [
  {
    icon: <RiTimerFill size={40} className='text-[#18F0F0]' />,
    title: 'Save Time & Money',
    description: 'No more wasted time driving to the laundromats, we pickup and deliver for free!',
  },
  {
    icon: <FaMoneyBillWave size={40} className='text-[#18F0F0]' />,
    title: 'Pay Online in Seconds',
    description: 'Manage your Press account and billing online from your smartphone or computer',
  },
  {
    icon: <MdEco size={40} className='text-[#18F0F0]' />,
    title: 'Eco-Friendly',
    description: 'We use safe and clean perc-free solvents, so you, and the Earth, can look good.',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="container m-auto">
      <div className='my-10'>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" group hover:bg-[#18F0F0] transition-colors duration-300 h-[320px] items-center p-6 bg-slate-100">
              <div className='flex items-center space-x-4 pt-3'>
                <div className='w-24 h-24 overflow-hidden rounded-full flex-shrink-0'>
                  <Image src={testimonial.image} alt={`Testimonial image ${index}`} className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-col'>
                  <h5 className='text-lg font-semibold group-hover:text-white'>{testimonial.name}</h5>
                  <p className='text-sm group-hover:text-white'>{testimonial.role}</p>
                </div>
              </div>
              <div className='p-6 '>
                <p className='group-hover:text-white'>{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
     
    </div>
  );
};



const Carousel = () => {
  return (
    <div className="container m-auto">
      <div className='my-10 '>
        <Slider {...sliderSettings}>
          {carouselItems.map((item, index) => (
            <div key={index} className='h-[200px]'>             
              <div
                
                className="  group flex space-x-4 p-8 bg-slate-100 rounded-lg shadow-md hover:bg-slate-200 transition-colors duration-300"
              >
                <div className='p-4 rounded-full bg-white self-start shadow-gray-300 shadow-lg'>
                  {item.icon}
                </div>
                <div>
                  <h5 className='py-2 text-lg font-semibold group-hover:text-[#18F0F0] group-hover:underline group-hover:underline-offset-4'>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export {TestimonialCarousel, Carousel}