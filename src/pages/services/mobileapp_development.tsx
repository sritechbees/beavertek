'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MobileAppDevelopment() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 py-16">
   
      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center overflow-visible">
        {/* Left Content */}
        <div data-aos="fade-right" className="text-gray-900 dark:text-white">
          <span className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Mobile Application
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-snug">
            Mobile Application Development
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed mt-4">
            BeaverTek Inc., as an industry expert who has experience as a mobile application developer, has identified the top best practices to follow through in the development process for your application. Convenience, speed, and experience is the mantra behind Mobile Application Development at BeaverTek.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed">
            We help our clients find the best ways to design, develop, and deploy the app. We have the expertise and experience to work with our clients in the app development process from start to finish. We take mobile application development very seriously. Creating unique, rich, and immersive UX experiences for the app is our focus and passion.
          </p>
        </div>

        {/* Right Side – Overlapping Images */}
        <div className="relative flex justify-center items-center overflow-visible" data-aos="fade-left">
          {/* First Image */}
          <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[460px] rotate-[-3deg] shadow-2xl rounded-2xl overflow-hidden animate-float-slow z-10">
            <Image
              src="/services/Mobile Application Development.jpg" // Replace with your mobile app image
              alt="Mobile Application Development"
              fill
              className="object-cover"
            />
          </div>

          {/* Second Image (Overlapping) */}
          <div
            className="absolute -right-12 bottom-[-60px] w-[220px] h-[300px] md:w-[260px] md:h-[340px] lg:w-[280px] lg:h-[380px] rotate-[5deg] shadow-xl rounded-2xl overflow-hidden animate-float-fast z-20"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Image
              src="/services/Mobile Application Development1.jpg" // Replace with your mobile app image
              alt="Mobile App Development"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
