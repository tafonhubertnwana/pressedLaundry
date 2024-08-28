// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default styles
// import Image from 'next/image'; // Import Image from next/image
// import team from '@/public/assets/team-img04.jpg'; // Replace with your image path
// import { StaticImageData } from 'next/image'; 

// // Define the type for team member
// interface TeamMember {
//   name: string;
//   role: string;
//   imgSrc: StaticImageData; // Make sure to use StaticImageData if importing images statically
// }

// // Define team members with `imgSrc` always present
// const teamMembers: TeamMember[] = [
//   {
//     name: 'John Doe',
//     role: 'Operational Manager',
//     imgSrc: team, // Ensure image path is correct and always available
//   },
//   {
//     name: 'Jane Smith',
//     role: 'Service Manager',
//     imgSrc: team,
//   },
//   {
//     name: 'Alice Johnson',
//     role: 'Wash Expert',
//     imgSrc: team,
//   },
// ];

// const TeamCarousel: React.FC = () => {
//   return (
//     <div className="w-full py-8">
//       <Carousel
//         infiniteLoop
//         autoPlay
//         showThumbs={false}
//         showStatus={false}
//         showArrows={true}
//         transitionTime={500}
//         interval={3000}
//         className="team-carousel"
//       >
//         {teamMembers.map((member, index) => (
//           <div key={index} className="flex flex-col items-center p-4">
//             <div className="relative w-64 h-64 overflow-hidden rounded-full">
//               {/* Use type assertion if necessary */}
//               <Image 
//                 src={member.imgSrc as StaticImageData} 
//                 alt={`Image of ${member.name}`} 
//                 layout="fill" 
//                 objectFit="cover" 
//               />
//             </div>
//             <div className="text-center pt-4">
//               <h5 className="text-xl font-semibold">{member.name}</h5>
//               <span className="text-gray-600">{member.role}</span>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default TeamCarousel;
