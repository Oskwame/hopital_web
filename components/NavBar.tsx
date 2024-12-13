"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaAngleDown } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import Image from "next/image";

type LinkItem = {
  href: string;
  label: string;
};

type SubMenuProps = {
  label: string;
  links: LinkItem[];
};

const NavBar = () => {
  const servicesLinks: LinkItem[] = [
    { href: "/GenealDiagnostics", label: "Diagnostics Services" },
    { href: "/PediatricService", label: "Pediatric Services" },
    { href: "/LaboratoryServices", label: "Laboratory Services" },
    { href: "/Pharmacy", label: "Pharmacy" },
    { href: "/GenealDiagnostics#sonography", label: "Sonography/Scan" },
    { href: "/GenealDiagnostics#ecg", label: "ECG" },
    { href: "/Dental", label: "Dental" },
    { href: "/GenealDiagnostics#xray", label: "X-Ray" },
    { href: "/MedicalScreen", label: "Medical Screening" },
    { href: "/Mother&Child", label: "Maternity & Child Care" },
    { href: "/EyeClinic", label: "Eye Clinic Services" },
    { href: "/Surgeries", label: "Major & Minor Surgeries" },
  ];

  const newsLinks: LinkItem[] = [
    { href: "/updates", label: "Latest Updates" },
    { href: "/Blog", label: "Health Tips / Blog" },
  ];

  const aboutLinks: LinkItem[] = [
    { href: "/aboutUs", label: "About Us" },
    { href: "/ourTeam", label: "Our Team" },
    { href: "/ourLocation", label: "Our Locations" },
  ];

  const SubMenu = ({ label, links }: SubMenuProps) => (
    <Popover className="relative">
      <Popover.Button className="flex items-center hover:text-blue-500 focus:outline-none">
        <span>{label}</span>
        <FaAngleDown className="ml-1 mt-1" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute   mt-2 w-60 bg-white shadow-lg rounded-md z-50">
          <div className="p-2 space-y-2 text-sm text-gray-700">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="block hover:text-blue-500">
                {link.label}
              </Link>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );

  return (
    <Popover className=" sticky container mx-auto flex items-center border-b-2 py-2 h-20 max-w-full px-0 top-0 bg-white z-50">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/kasa logo.jpg"
            alt="Kasa Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>
      </Link>
      <span className="ml-2 font-bold hidden lg:block hover:text-blue-500">
        Kasa Family Hospital
      </span>

      {/* Desktop Menu */}
      <div className="grow hidden sm:flex items-center justify-center gap-6 md:gap-8 font-semibold">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <SubMenu label="Our Services" links={servicesLinks} />
        <SubMenu label="News" links={newsLinks} />
        <SubMenu label="About Us" links={aboutLinks} />
        
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex grow top-0 left-0 z-50 items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button> 
        
      </div>

      <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-25 z-40" />

      <Transition
        as={Fragment}
        enter="duration-500 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-300 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Kasa Family Hospital</h1>
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <nav className="mt-6 grid gap-y-4">
                <Link href="/" className="block hover:text-blue-500 px-2">
                  Home
                </Link>
                <SubMenu label="Our Services" links={servicesLinks} />
                <SubMenu label="About Us" links={aboutLinks} />
                <SubMenu label="News" links={newsLinks} />
                
              </nav>
            </div>
            <div className="gap-2 flex px-3 pb-2">
              <Link href="https://facebook.com"> <FaFacebook /> </Link>
              <Link href="https://twitter.com"> <FaTwitter /></Link>
              <Link href="https://instagram.com"> <FaInstagram /></Link>
              <Link href="https://linkedin.com"> <FaLinkedin /></Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

      <div className="gap-1.5 hidden sm:flex">
        <Link href="https://facebook.com"> <FaFacebook /> </Link>
        <Link href="https://twitter.com"> <FaTwitter /></Link>
        <Link href="https://instagram.com"> <FaInstagram /></Link>
        <Link href="https://linkedin.com"> <FaLinkedin /></Link>
      </div>
    </Popover>
  );
};

export default NavBar;
