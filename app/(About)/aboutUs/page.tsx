"use client";
import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

type SectionItemProps = {
  title: string;
  description: string;
};

const SectionItem = ({ title, description }: SectionItemProps) => (
  <div className="bg-white border-b-2 border-blue-300  p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutUsPage = () => {
  const sections = [
    {
      title: "Who We Are",
      description:
        "Kasa Family Hospital is a leading healthcare institution dedicated to providing top-notch medical services with compassion and care. We pride ourselves on a patient-first approach, advanced facilities, and a team of experienced professionals.",
    },
    {
      title: "Our Mission",
      description:
        "To deliver exceptional healthcare services with a focus on excellence, empathy, and innovation, while fostering a healthy and thriving community.",
    },
    {
      title: "Our Vision",
      description:
        "To be a beacon of hope and trust, setting benchmarks in quality healthcare services and contributing to a healthier future for all.",
    },
  ];

  return (
     <> {/* Render the NavBar */}
      <NavBar/>
        <div className="container mx-auto p-4">
      {/* Grid Layout */}
      <div className="  gap-8 ">
        {/* Left: Image Section */}
       <div className=" grid grid-cols-2 lg:grid-cols-2"> 
        <div className="bg-white shadow-md rounded-md overflow-hidden pr-10">
          <Image
            src="/lab.JPG"
            alt="Kasa Family Hospital"
            width={1000}
            height={800}
            quality={100}
            className="object-cover w-full h-full"
          />
        </div >
        <div className=" shadow-md bg-slate-400 rounded-md right-0">
       
        </div>

        </div>
        {/* Right: Text Sections */}
        <div className="grid grid-cols-1 gap-6">
          {sections.map((section, index) => (
            <SectionItem
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUsPage;

