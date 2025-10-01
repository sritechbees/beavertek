"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import App_layout from "@/component/layout/app_layout";
import OpenLayer from "./openlayer";

export default function ProductHeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <App_layout>
    <section className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-bounce"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Section Label */}
        <p
          data-aos="fade-down"
          className="uppercase tracking-widest text-yellow-400 font-semibold mb-3"
        >
          Featured Product
        </p>

        {/* Product Title */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 bg-clip-text text-transparent mb-6"
        >
          BlazeGuard Pro Firewall
        </h1>

        {/* Tagline */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-2xl md:text-3xl font-bold text-white mb-6"
        >
          Next-Gen Security for Modern Networks
        </h2>

        {/* Product Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
        >
          BlazeGuard Pro is our flagship enterprise-grade firewall designed to protect your digital infrastructure with AI-powered threat detection, real-time analytics, and seamless cloud integration. Trusted by Fortune 500 companies for unmatched reliability and speed.
        </p>

        {/* Product Image */}
        <div data-aos="zoom-in" data-aos-delay="400" className="mt-10 flex justify-center">
          <Image
            src="/home/logo.png" // Update with your actual product image path
            alt="BeaverTek Logo"
            width={120}
            height={120}
            className="rounded-full border-4  border-cyan-400 shadow-lg hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="600" className="mt-10">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-pink-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 group">
            Explore Features
            <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
    <OpenLayer/>
    </App_layout>
  );
}
