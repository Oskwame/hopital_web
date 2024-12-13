"use client";
import React, { useRef } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

interface Staff {
  name: string;
  title: string;
  imageSrc: string;
}

const Management: Staff[] = [
  { name: "John Doe", title: "CEO", imageSrc: "/staffProfile.jpg" },
  { name: "William Boakye", title: "COO", imageSrc: "/staffProfile.jpg" },
  { name: "Patrice Owusu Kusi", title: "Manager", imageSrc: "/staffProfile.jpg" },
  { name: "Jane Smith", title: "Accountant", imageSrc: "/staffProfile.jpg" },
  { name: "Dr. Ransford Adom Amos", title: "", imageSrc: "/staffProfile.jpg" },
  { name: "Mrs. Regina Quashie", title: "Accountant", imageSrc: "/staffProfile.jpg" },
  { name: "Mr. Jame Bonsu", title: "Accountant", imageSrc: "/staffProfile.jpg" },
];

const MedicalTeam: Staff[] = [
  { name: "Mr. Anan Desmond", title: "Head Physician", imageSrc: "/staffProfile.jpg" },
  { name: "Dr. Clara Adams", title: "Head Surgeon", imageSrc: "/staffProfile.jpg" },
  { name: "Jane Smith", title: "Pharmacist", imageSrc: "/staffProfile.jpg" },
  { name: "Dr. Ransford Adom Amos", title: "Lab Tech", imageSrc: "/staffProfile.jpg" },
  { name: "Mrs. Regina Quashie", title: "Nurse", imageSrc: "/staffProfile.jpg" },
  { name: "Betty Larbi", title: "Nurse", imageSrc: "/staffProfile.jpg" },
  { name: "Anna Tetteh", title: "Pharmacist", imageSrc: "/staffProfile.jpg" },
  { name: "Attah Okyere", title: "Optometrist", imageSrc: "/staffProfile.jpg" },
  { name: "Adam Gyamfi", title: "Nurse Assistant", imageSrc: "/staffProfile.jpg" },
  { name: "Mr. Jame Oppong", title: "Nurse", imageSrc: "/staffProfile.jpg" },
];

const Support: Staff[] = [
  { name: "Emily Davis", title: "Customer Support", imageSrc: "/staffProfile.jpg" },
  { name: "Michael Brown", title: "IT Specialist", imageSrc: "/staffProfile.jpg" },
];

// Type for the scroll function
type Direction = "left" | "right";

const Page: React.FC = () => {
  const managementRef = useRef<HTMLDivElement>(null);
  const medicalTeamRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll
  const scroll = (direction: Direction, ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  const renderTeam = (team: Staff[], ref: React.RefObject<HTMLDivElement>) => (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden py-4"
    >
      {team.map((staff) => (
        <div
          key={staff.name}
          className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-xs mx-auto"
        >
          <Image
            src={staff.imageSrc}
            alt={staff.title || staff.name}
            width={150}
            height={120}
            className="rounded-t-lg object-cover w-full"
          />
          <div className="p-2">
            <h2 className="text-base font-semibold mb-1">{staff.name}</h2>
            <p className="text-gray-600 text-xs">{staff.title}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <NavBar />
      <div className="">

        {/* Management Team */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl text-left font-serif mb-4">Management Team</h1>
          {renderTeam(Management, managementRef)}
        </div>
        <hr/>

        {/* Medical Team */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-serif text-left mb-4">Medical Team</h1>
          {renderTeam(MedicalTeam, medicalTeamRef)}
        </div>
        <hr/>
        
        {/* Support Services */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-serif text-left mb-4">Support Services</h1>
          {renderTeam(Support, supportRef)}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Page;
