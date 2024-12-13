"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500 })]);

  return (
    <div className="container mx-auto border overflow-hidden w-full h-80 mt-4 relative z-10" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {/* Slide 1 */}
        <div className="flex-none w-full min-w-0 flex items-center justify-center relative">
          <img src="/kasa img 1.jpg" alt="Welcome Slide" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl sm:text-3xl font-bold">Welcome to Kasa Family Hospital</h1>
              <p className="mt-2 text-sm sm:text-base">
                Your Health, Nothing Else! Explore our services, meet our dedicated team, and stay updated with the latest news.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex-none w-full min-w-0 flex items-center justify-center relative">
          <img src="/medical lab.jpg" alt="Our Services Slide" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl sm:text-3xl font-bold">Comprehensive Services</h1>
              <p className="mt-2 text-sm sm:text-base">
                From general consultation to advanced diagnostics, we're here for you.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex-none w-full min-w-0 flex items-center justify-center relative">
          <img src="/Team-of-doctors.jpg" alt="Meet Our Team Slide" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl sm:text-3xl font-bold">Meet Our Dedicated Team</h1>
              <p className="mt-2 text-sm sm:text-base">
                Highly skilled professionals working together to provide the best care.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="flex-none w-full min-w-0 flex items-center justify-center relative">
          <img src="/screening.jpg" alt="Community Outreach Slide" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-2xl sm:text-3xl font-bold">Community Outreach</h1>
              <p className="mt-2 text-sm sm:text-base">
                Engaging with our community for a healthier tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
