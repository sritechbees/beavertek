"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/home/hero1.jpg",
    "/home/hero2.jpg",
    "/home/hero3.jpg",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`background-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/40 via-[#1e293b]/80 to-[#0f172a]/70"></div>
      </div>

      {/* AI glowing background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center">
        {/* Floating avatars */}
        <div data-aos="zoom-in" className="flex justify-center space-x-4 mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Person 1"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-cyan-400 shadow-lg hover:scale-110 transition-transform"
          />
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Person 2"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-cyan-400 shadow-lg hover:scale-110 transition-transform"
          />
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Person 3"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-cyan-400 shadow-lg hover:scale-110 transition-transform"
          />
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent leading-tight"
        >
          Empowering Businesses <br /> with Tailored IT Solutions
        </h1>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-6 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Your trusted partner in IT managed services, and innovative technology solutions. <br />
          At BeaverTek, we specialize in delivering customized IT services that are designed to grow with your business. 
          Whether you're modernizing your infrastructure or unlocking the power of your data, we provide the expertise to help you succeed.
        </p>

        {/* Button */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-10">
          <Link
            href="/services/servicesherosection"
            className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-base sm:text-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 animate-bounce"
          >
            Explore Service
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
