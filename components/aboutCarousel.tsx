import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import team from '@/public/assets/team-img04.jpg' // Adjust this import if you're not using Next.js

// Sample data for team members
const teamMembers = [
  { name: 'John Doe', role: 'Operational Manager', imgSrc: team },
  { name: 'Rozi', role: 'Service Manager', imgSrc: team },
  { name: 'Levi', role: 'Wash Expert', imgSrc: team},
];

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

const TeamCarousel = () => {
  return(
    <div className="container mx-auto px-4">
    <div className='mb-10 mt-8'>
      <Slider {...sliderSettings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <div className='w-64 h-64 overflow-hidden rounded-full'>
              {/* If not using Next.js, use <img> instead */}
              <Image
                src={member.imgSrc} 
                alt={`About-us-img-${index}`} 
                className="object-cover w-full h-full" 
              />
            </div>
            <div className='text-center pt-4'>
              <h5 className='text-lg font-semibold'>{member.name}</h5>
              <span className='text-sm'>{member.role}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
    )};

export default TeamCarousel;
