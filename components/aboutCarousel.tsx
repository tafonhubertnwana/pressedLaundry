// import React from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image'; // Or use your own image component

// // Import slick-carousel CSS
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Define the carousel settings
// const carouselSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 768, // Tablets and below
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 1024, // Desktops and tablets in landscape
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//   ],
// };

// const TeamCarousel = () => {
//   return (
//     <div className="carousel-container">
//       <Slider {...carouselSettings}>
//         <div className="flex flex-col items-center p-4">
//           <div className="w-64 h-64 overflow-hidden rounded-full">
//             <Image src="/path/to/team.jpg" alt="About-us-img-1" className="object-cover" />
//           </div>
//           <div className="text-center mt-4">
//             <h5>John Doe</h5>
//             <span>Operational Manager</span>
//           </div>
//         </div>
//         <div className="flex flex-col items-center p-4">
//           <div className="w-64 h-64 overflow-hidden rounded-full">
//             <Image src="/path/to/team.jpg" alt="About-us-img-2" className="object-cover" />
//           </div>
//           <div className="text-center mt-4">
//             <h5>Jane Doe</h5>
//             <span>Service Manager</span>
//           </div>
//         </div>
//         <div className="flex flex-col items-center p-4">
//           <div className="w-64 h-64 overflow-hidden rounded-full">
//             <Image src="/path/to/team.jpg" alt="About-us-img-3" className="object-cover" />
//           </div>
//           <div className="text-center mt-4">
//             <h5>Jim Doe</h5>
//             <span>Wash Expert</span>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default TeamCarousel;
