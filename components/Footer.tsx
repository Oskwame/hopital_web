"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Logo and About Section */}
        <div>
          <Image src="/kasa logo.jpg" alt="Company Logo" width={200} height={100} className="mb-4" />
          <p className="text-gray-400">
            Kasa Family Hospital is dedicated to providing exceptional healthcare services with
            compassion and innovation. We strive to build a healthier and stronger community.
          </p>
        </div>

        {/* Quick Links and Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                Home
              </a>
            </li>
            <li>
              <Link href="/AllService" className="text-gray-400 hover:text-white transition duration-200">
                All Services
              </Link>
            </li>
            <li>
                <a href="#" className=" text-gray-400 hover:text-white transition duration-200">
                    The Team
                </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Locations and Contact Info Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact & Locations</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Main Hospital:</span> Hospital RD,Comm 9 Tema, 
              <p>opposite ECG Office Taffic</p>
            </li>
            <li>
              <span className="font-medium"> Branch Clinic :</span> Ningo Prampram
            </li>
            <li>
              <span className="font-medium"></span>  
            </li>
          </ul>
          <p className="mt-4">
            <span className="font-medium">Phone:</span>+233 53 046 5689 / +233 545 251 707
          </p>
          <p>
            <span className="font-medium">Email:</span> kasafamilyhospital@gmail.com
          </p>
        </div>
      </div>
      <div className="text-center text-white bg-black text-sm mt-8">
        © {new Date().getFullYear()} Kasa Family Hospital. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
