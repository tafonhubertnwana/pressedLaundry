import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import client from '@/public/assets/testimonials-img03.jpg'; // Adjust the path according to your project structure

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

const TestimonialCarousel = () => {
  return (
    <div className="p-10">
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-slate-100">
            <div className='flex items-center space-x-4 pt-3'>
              <div className='w-24 h-24 overflow-hidden rounded-full flex-shrink-0'>
                <Image src={testimonial.image} alt={`Testimonial image ${index}`} className='object-cover w-full h-full' />
              </div>
              <div className='flex flex-col'>
                <h5 className='text-lg font-semibold'>{testimonial.name}</h5>
                <p className='text-sm'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-6'>
              <p>{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
