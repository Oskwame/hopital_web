"use client";
import React from "react";
import { FaEye, FaStethoscope, FaXRay } from "react-icons/fa";
import { GiMicroscope, GiMedicalDrip } from "react-icons/gi";
import { IoMdPulse } from "react-icons/io";
import { MdOutlineLocalPharmacy, MdPregnantWoman,MdOutlineBabyChangingStation } from "react-icons/md";
import { TbDentalBroken } from "react-icons/tb";
import Link from "next/link";

type ServiceItemProps = {
  icon: React.ReactNode;
  name: string;
  description: string;
  href: string;
};

const ServiceItem = ({ icon, name, description, href }: ServiceItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition-shadow duration-300 ease-in-out group">
      <div className="text-gray-700 text-4xl mb-4 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <Link href={href}>
        <button className="mt-4 px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-400 transition-colors duration-300 ease-in-out">
          View More
        </button>
      </Link>
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      icon: <FaEye />,
      name: "Eye Clinic Service",
      description: "Comprehensive eye examinations and treatments.",
      href: "/EyeClinic",
    },
    {
      icon: <GiMicroscope />,
      name: "Laboratory",
      description: "Advanced diagnostic services for accurate results.",
      href: "/LaboratoryServices",
    },
    {
      icon: <MdOutlineLocalPharmacy />,
      name: "Pharmacy",
      description: "Reliable access to prescribed medications.",
      href: "/Pharmacy",
    },
    {
      icon: <MdOutlineBabyChangingStation />,
      name: "Pediatric",
      description: "High-quality imaging for accurate diagnoses.",
      href: "/PediatricService",
    },
    {
      icon: <IoMdPulse />,
      name: "Diagnostics",
      description: "Professional advice and diagnosis for all patients.",
      href: "/GenealDiagnostics",
    },

    {
      icon: <TbDentalBroken />,
      name: "Dental Services",
      description: "Expert dental care for all your oral health needs.",
      href: "/Dental",
    },
    {
      icon: <MdPregnantWoman />,
      name: "Maternity & Child Care",
      description: "Specialized care for mothers and their babies.",
      href: "/Mother&Child",
    },
    {
      icon: <GiMedicalDrip />,
      name: "Major & Minor Surgeries",
      description: "Safe and effective surgical procedures.",
      href: "/Surgeries",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Our Major Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            name={service.name}
            description={service.description}
            href={service.href}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
