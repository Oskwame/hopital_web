"use client"
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import { FaEye,} from "react-icons/fa";
import Footer from '@/components/Footer';

const EyeClinicPage = () => {
  const service = {
    name: 'Comprehensive Eye Care',
    images: [
      '/eye_surgery.jpg' ,// Replace with your first image path
      '/eye_care.jpg', // Replace with your second image path
    ],
    description:
      'At our eye clinic, we provide top-notch comprehensive eye care services. From routine check-ups and vision testing to advanced treatments and surgeries, we ensure your eyes get the care they deserve. Our experienced team is dedicated to maintaining and improving your vision.',
  };

  const [animate, setAnimate] = useState(false);

  // Trigger animation on page load
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Small delay for smooth entry
  }, []);

  return (
    <div>
      {/* Render the NavBar */}
      <NavBar />

      {/* Main Service Content */}
      <div className=" mx-auto  space-y-8">
        {/* Service Name Bar */}
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-white text-center p-6 shadow-lg flex justify-between items-center">
          <h1 className="text-4xl font-extrabold row-span-1">{service.name} </h1>
            <div className=' text-7xl'>
              <FaEye/> 
            </div>   
        </div>

        {/* Service Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-1/2 px-3 h-72">
          {service.images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // Stagger animation
            >
              <img
                src={image}
                alt={`${service.name} Image ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Service Description */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-700 ${
            animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg leading-relaxed text-gray-700">
            {service.description}
          </p>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default EyeClinicPage;
