"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaMapLocationDot } from "react-icons/fa6";
interface Location {
  name: string;
  address: string;
  city: string;
  country: string;
  imageSrc: string;
  contact?: string;
}

const locations: Location[] = [
  {
    name: "Main Office",
    address: "123 Main Street",
    city: "Accra",
    country: "Ghana",
    imageSrc: "/kasa img 1.jpg",
    contact: "+233 123 456 7890",
  },
  {
    name: "Medical Center",
    address: "456 Medical Rd",
    city: "Kumasi",
    country: "Ghana",
    imageSrc: "/office2.jpg",
    contact: "+233 234 567 8901",
  },
  {
    name: "Branch Office",
    address: "789 Branch Ave",
    city: "Takoradi",
    country: "Ghana",
    imageSrc: "/office3.jpg",
    contact: "+233 345 678 9012",
  },
];

const LocationsPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      
      {/* Banner/Header Section */}
      <div className="relative w-full h-52 bg-cover bg-center" style={{ backgroundImage: 'url("/banner.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute z-10 items-center text-white py-20">
          <h1 className="text-5xl font-semibold flex justify-between">Our Locations <FaMapLocationDot/></h1>
          <p className="text-xl mt-4">Discover our health care  and services across Ghana.</p>
        </div>
      </div>

      <div className="*:">

        {/* Locations Section */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl text-left font-serif mb-4 text-white">Our Locations</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div
                key={location.name}
                className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <Image
                  src={location.imageSrc}
                  alt={location.name}
                  width={350}
                  height={250}
                  className="rounded-t-lg object-cover w-full"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{location.name}</h2>
                  <p className="text-gray-600">{location.address}</p>
                  <p className="text-gray-600">{location.city}, {location.country}</p>
                  {location.contact && (
                    <p className="text-gray-600">Contact: {location.contact}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default LocationsPage;
