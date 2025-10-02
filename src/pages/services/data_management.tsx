
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DataManagement() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-rose-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden px-6 py-20">
      {/* Background Glow Shapes */}
      <div className="absolute -top-28 -left-24 w-80 h-80 bg-indigo-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-28 -right-24 w-96 h-96 bg-rose-300/40 rounded-full blur-3xl animate-pulse" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Data Management
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            We firmly believe that data and data management are important information
            assets for all enterprises. Managing data and providing insights is an art
            in which we excel.
            <br /><br />
            Our strength is working with the available data, utilizing the Data Governance
            principles and providing scalable solutions—be it building Data Lakes,
            designing Operational Data Stores (ODS), Data Warehouses, Data Marts, or
            Big Data platforms. 
            <br /><br />
            With the right data strategies, any enterprise should be able to convert
            this huge treasure cove into a core strategic asset.
          </p>
        </motion.div>

        {/* Right Side - Image with Different Design */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group w-72 h-72 md:w-96 md:h-96">
            {/* Decorative rotating ring */}
            <div className="absolute inset-0 border-4 border-dashed border-indigo-400 rounded-full animate-spin-slow"></div>
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/services/Data Management.jpg"
                alt="Data Management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

