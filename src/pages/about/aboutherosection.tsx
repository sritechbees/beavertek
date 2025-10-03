"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutHeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 md:py-12 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/Digital.jpg" // Replace with your image path
          alt="Background"
          fill
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Background Animated Blobs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-3000 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <p
          data-aos="fade-down"
          className="uppercase tracking-widest text-green-400 font-semibold mb-3 text-sm sm:text-base"
        >
          About Us
        </p>

        {/* Hero Title */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          Empowering Innovation
        </h1>

        {/* Description (2 lines only) */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-2 overflow-hidden text-ellipsis line-clamp-2"
        >
          We deliver scalable, secure IT solutions with expertise and integrity for Fortune 500 clients.
        </p>

        {/* Company Logo */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mt-10 flex justify-center"
        >
          <Image
            src="/home/logo.png" // Update with your logo
            alt="BeaverTek Logo"
            width={110}
            height={110}
            className="rounded-full border-4 border-cyan-400 shadow-lg hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* CTA Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group">
            Learn More
            <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Blob Animation Keyframes */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
