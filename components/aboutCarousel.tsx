import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Adjust this import if you're not using Next.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for team members
const teamMembers = [
  { name: 'John Doe', role: 'Operational Manager', imgSrc: '/path/to/image1.jpg' },
  { name: 'Rozi', role: 'Service Manager', imgSrc: '/path/to/image2.jpg' },
  { name: 'Levi', role: 'Wash Expert', imgSrc: '/path/to/image3.jpg' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      }
    }
  ]
};

const TeamCarousel = () => (
  <div className="container mx-auto px-4">
    <Slider {...settings}>
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <div className='w-64 h-64 overflow-hidden rounded-full'>
            <Image src={member.imgSrc} alt={`About-us-img-${index}`} className="object-cover" layout="responsive" width={256} height={256} />
          </div>
          <div className='text-center pt-4'>
            <h5 className='text-lg font-semibold'>{member.name}</h5>
            <span className='text-sm'>{member.role}</span>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default TeamCarousel;
