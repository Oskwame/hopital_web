"use client";
import React from "react";
import Image from "next/image";

const PartnersBar = () => {
  const partners = [
    { name: "NHIS", logo: "/nhis.png" },
    { name: "Glico", logo: "/glico.png" },
    { name: "Cosmopolitan", logo: "/cosmopolitan.png" },
    { name: "Nationwide Medical", logo: "/Nationwide_Medical.png" },
    { name: "Acacia", logo: "/acacia.png" },
    { name: "metropolitan", logo: "/metropolitan.png" },
    { name: "apex", logo: "/apex.png" },
    { name:"gab health ", logo:"/ghic.png"},
    { name:"ace", logo:"/ace_medical.png"},
    { name:"premier health", logo:"/premier.png"},
    { name:"Equity Health", logo:"/equity.png"}

  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 font-mono italic">
          Our Trusted Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-36 h-20 bg-white shadow-md rounded-md flex items-center justify-center p-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersBar;
