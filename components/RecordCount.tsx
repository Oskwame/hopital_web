"use client";
import React from "react";
import { FaHospital, FaStethoscope, FaUserMd, FaUsers, FaHandshake } from "react-icons/fa";

type RecordProps = {
  icon: React.ReactNode;
  count: number;
  label: string;
};

const RecordItem = ({ icon, count, label }: RecordProps) => (
  <div className="flex flex-col items-center justify-center bg-white  rounded-md p-3 text-center">
    <div className="text-3xl text-blue-500 mb-2">{icon}</div>
    <h2 className="text-4xl font-bold text-gray-800">{count}+ </h2>
    <p className="text-gray-600">{label}</p>
  </div>
);

const RecordCount = () => {
  const records = [
    { icon: <FaHospital />, count: 2, label: "Facilities" },
    { icon: <FaStethoscope />, count: 30, label: "Services" },
    { icon: <FaUserMd />, count: 25, label: "Medical Team" },
    { icon: <FaUsers />, count: 300, label: "Patients" },
    { icon: <FaHandshake />, count: 8, label: "Partners" },
  ];

  return (
    <div className="container grow mx-auto mt-[-5px] p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {records.map((record, index) => (
        <RecordItem key={index} icon={record.icon} count={record.count} label={record.label} />
      ))}
    </div>
  );
};

export default RecordCount ;
