"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import UniqueSection from "./uniquesection";
import ExpertiseSection from "./expertisesection";
import TestimonialsSection from "./testimonials";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 py-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Section Subtitle */}
        <p
          data-aos="fade-down"
          className="uppercase tracking-widest text-blue-400 font-semibold mb-3"
        >
          Introduction
        </p>

        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-500 to-black drop-shadow-lg leading-snug mb-6"
        >
          Who we are? - BeaverTek IT Services
        </motion.h1>

        {/* Section Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          data-aos="fade-up"
          className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10"
        >
          We are an innovative Managed IT Services provider with a contagious
          passion to succeed and make a difference. BeaverTek, based in Orange
          County, California, leverages decades of experience working with
          Fortune 500 companies across multiple disciplines.
        </motion.p>

        {/* Company Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          data-aos="zoom-in"
          className="mt-10 flex justify-center"
        >
          <div className="p-3 rounded-full bg-white/90 dark:bg-gray-800 shadow-xl border border-cyan-400">
            <Image
              src="/home/logo.svg"
              alt="BeaverTek Logo"
              width={120}
              height={120}
              className="rounded-full hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Additional Sections */}
      <UniqueSection />
      <ExpertiseSection />
      <TestimonialsSection />
    </section>
  );
}
