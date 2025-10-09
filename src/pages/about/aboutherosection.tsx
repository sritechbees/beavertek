"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import App_layout from "@/component/layout/app_layout";
import Head from "next/head";

export default function AboutHeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <App_layout>
      <Head>
      <title>Beavertek | About</title>
      </Head>
    <div>
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about/Digital.jpg" // 🔹 replace with your actual bg image path
            alt="Background"
            fill
            priority
            className="max-sm:object-cove object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-[#1e293b]/60 to-[#0f172a]/95"></div>
        </div>
        {/* Overlay for readability */}

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Section Label */}
          <p
            data-aos="fade-down"
            className="uppercase tracking-widest text-blue-400 font-semibold mb-3"
          >
            About Us
          </p>

          {/* Hero Title */}
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-6"
          >
            Empowering Innovation
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            We deliver scalable, secure IT solutions with expertise and
            integrity for Fortune 500 clients.
          </p>

          {/* Company Logo or Customer Badge */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mt-10 flex justify-center"
          >
            <Image
              src="/home/logo.svg" // Replace with customer badge/logo
              alt="Customer Trust Badge"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-400 shadow-lg hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* CTA Button */}
          <Link href="/about/whychoosebeavertek">
            <div data-aos="fade-up" data-aos-delay="600" className="mt-10">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-[19px] font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group">
                Learn More
                <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
    </App_layout>
  );
}
