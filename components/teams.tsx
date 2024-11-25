"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import team from "@/public/assets/team-img04.jpg"; // Replace with the actual image path

const Team = () => {
  const teamMembers = [
    { name: "John Doe", role: "Operational Manager" },
    { name: "Rozi", role: "Service Manager" },
    { name: "Levi", role: "Wash Expert" },
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Update screen size state on window resize
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    updateScreenSize(); // Check initial screen size
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Carousel settings for react-slick
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    dots: true, // Display dots for navigation
    infinite: true, // Loop the carousel
    speed: 500, // Animation speed
    slidesToShow: isLargeScreen ? 3 : 1, // Show 3 on large screens, 1 on small
    slidesToScroll: 1,
    arrows: false, // Hide arrows on both large and small screens
  };

  return (
    <div className="relative w-full">
  <Slider {...settings}>
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="flex mb-10 flex-col justify-center items-center transition-transform transform hover:scale-105 duration-300 ease-in-out"
      >
        {/* Container for the image */}
        <div className=" w-full flex-col  pt-10   overflow-hidden  shadow-xl hover:shadow-2xl transition-shadow duration-300 relative group flex justify-center items-center">
          <Image
            src={team}
            alt={`Team member: ${member.name}`}
            className="w-56 h-56 object-cover  rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        {/* Container for the name and role */}
        <div className="pt-6 pb-8 text-center">
          <h5 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {member.name}
          </h5>
          <span className="text-sm text-gray-600">{member.role}</span>
        </div>
        </div>

      </div>
    ))}
  </Slider>
</div>

  );
};

export default Team;
