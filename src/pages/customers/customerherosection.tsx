"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import BeaverTekCustomersV2 from "./beavertekcustomer";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";

export default function CustomersHeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <App_layout>
      <section
        className="relative text-white py-20 overflow-hidden"
       
      >
          <div className="absolute inset-0">
                  <Image
                    src="/product/global customers.jpg" // 🔹 replace with your actual bg image path
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
            Our Customers
          </p>

          {/* Hero Title */}
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-6"
          >
            Driving Success Through Partnership
          </h1>

          {/* Company Name */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-1xl md:text-2xl font-bold text-white mb-6"
          >
            Trusted by Global Enterprises
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            Our customers are at the heart of everything we do. From Fortune 500
            companies to fast-growing startups, BeaverTek empowers organizations
            with scalable IT solutions, deep technical expertise, and a
            commitment to long-term success. We build relationships that last 
            and deliver outcomes that matter.
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
          <Link href="/customers/beavertekcustomer">
          <div data-aos="fade-up" data-aos-delay="600" className="mt-10">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-[19px] font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group">
              Explore Customer Stories
              <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
          </Link>
        </div>
      </section>

      
    </App_layout>
  );
}
