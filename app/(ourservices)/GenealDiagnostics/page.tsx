"use client"
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import { IoMdPulse } from "react-icons/io";

const GeneralDiagnosticsPage = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation on page load
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Small delay for smooth entry
  }, []);

  // Data for diagnostics sections
  const diagnosticsSections = [
    {
      id: 'sonography',
      name: 'Sonography (Scan)',
      image: '/ultrascan.jpg',
      description:
        'Our sonography services provide accurate imaging for diagnostic purposes, ensuring precise and timely medical insights. From routine pregnancy scans to advanced imaging, we ensure your well-being is our priority.',
      extras: [
        {
          title: 'Key Benefits',
          points: [
            'High-resolution imaging for precise diagnostics.',
            'Safe and non-invasive procedures.',
            'Fast and reliable results.',
          ],
        },
        {
          title: 'Procedures Offered',
          points: [
            'Pregnancy ultrasounds.',
            'Abdominal and pelvic scans.',
            'Musculoskeletal sonography.',
          ],
        },
      ],
    },
    {
      id: 'ecg',
      name: 'ECG',
      image: '/ecg.jpg',
      description:
        'We offer advanced ECG services to monitor and diagnose heart health. Our state-of-the-art equipment ensures accurate results, empowering your cardiac care journey.',
      extras: [
        {
          title: 'Key Benefits',
          points: [
            'Real-time heart monitoring.',
            'Accurate detection of heart irregularities.',
            'Quick and painless procedure.',
          ],
        },
        {
          title: 'Common Uses',
          points: [
            'Detecting heart arrhythmias.',
            'Assessing the effectiveness of heart medications.',
            'Evaluating overall heart health.',
          ],
        },
      ],
    },
    {
      id: 'xray',
      name: 'X-Ray',
      image: '/surgeries.JPG',
      description:
        'Our X-Ray services utilize the latest imaging technology to deliver clear and detailed visuals for diagnosing a wide range of medical conditions.',
      extras: [
        {
          title: 'Key Benefits',
          points: [
            'Detailed imaging for accurate diagnosis.',
            'Wide range of applications in medical care.',
            'Quick and easy procedure.',
          ],
        },
        {
          title: 'Procedures Offered',
          points: [
            'Chest X-rays.',
            'Bone fracture imaging.',
            'Dental and jaw X-rays.',
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>General Diagnostics - Kasa Family Hospital</title>
      </Head>

      {/* Navigation */}
      <NavBar />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-white text-center py-6 shadow-lg flex items-center justify-between px-6">
        <h1 className="text-4xl font-extrabold">General Diagnostics</h1>
        <div className="text-7xl">
          <IoMdPulse />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto space-y-12 py-10 px-4">
        {diagnosticsSections.map((section, index) => (
          <div
            id={section.id} // Section ID added here
            key={index}
            className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            {/* Section Image */}
            <div
              className={`w-full md:w-1/2 transform transition-all duration-700 ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Image
                src={section.image}
                alt={section.name}
                width={500}
                height={300}
                className="rounded-lg shadow-lg object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Section Description */}
            <div
              className={`w-full md:w-1/2 bg-white p-6 rounded-lg shadow-sm transform transition-all duration-700 ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{section.description}</p>

              {/* Extras */}
              {section.extras.map((extra, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{extra.title}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {extra.points.map((point, pointIdx) => (
                      <li key={pointIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GeneralDiagnosticsPage;
