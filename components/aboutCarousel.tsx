import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import team from '@/public/assets/team-img04.jpg'; // Replace with your image path

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Operational Manager',
    imgSrc: team,
  },
  {
    name: 'Jane Smith',
    role: 'Service Manager',
    imgSrc: team,
  },
  {
    name: 'Alice Johnson',
    role: 'Wash Expert',
    imgSrc: team,
  },
];

const TeamCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Set to true if you want navigation arrows
  };

  return (
    <div className="w-full py-8">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <div className="w-64 h-64 overflow-hidden rounded-full">
              <Image src={member.imgSrc} alt={`Image of ${member.name}`} className="object-cover" />
            </div>
            <div className="text-center pt-4">
              <h5 className="text-xl font-semibold">{member.name}</h5>
              <span className="text-gray-600">{member.role}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
