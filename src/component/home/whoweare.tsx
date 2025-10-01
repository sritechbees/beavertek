"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <p
          data-aos="fade-down"
          className="uppercase tracking-widest text-green-400 font-semibold mb-3"
        >
          Introduction
        </p>
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-purple-500 bg-clip-text text-transparent mb-6"
        >
          Who we are ? <span className="text-white">- BeaverTek IT Services</span>
        </h2>

        {/* Text Content */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
        >
          We are an innovative Managed IT Services provider. We are enthusiastic and have a contagious fire burning deep within us to succeed and make a difference. 
          BeaverTek is an IT Services provider located in Orange County, California. 
          We leverage all the experience we have gained over 8+ decades as consultants working for Fortune 500 companies across many disciplines.
        </p>

        {/* Company Logo / Image */}
        <div data-aos="zoom-in" data-aos-delay="400" className="mt-10 flex justify-center">
          <Image
            src="/home/logo.png" // replace with your logo path
            alt="BeaverTek Logo"
            width={120}
            height={120}
            className="rounded-full border-4 border-cyan-400 shadow-lg hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Call To Action Button */}
        <div data-aos="fade-up" data-aos-delay="600" className="mt-10">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
            Learn More
            <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
