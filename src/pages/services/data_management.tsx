"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DataManagement() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 overflow-hidden px-6 py-12">
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Data Management
          </h1>
          <p className="text-base sm:text-lg md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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

        {/* Right Side - Parallelogram Image */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group w-72 h-80 md:w-[22rem] md:h-[24rem]">
            {/* Background Gradient Accent */}
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 4, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute -inset-2 bg-gradient-to-tr from-indigo-400 via-blue-500 to-cyan-400 rounded-xl blur-md opacity-60"
            ></motion.div>

            {/* Parallelogram Shape */}
            <div className="relative w-full h-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform skew-x-[-12deg] rounded-xl">
              <Image
                src="/services/Data Management.jpg"
                alt="Data Management"
                fill
                className="object-cover transform skew-x-[12deg] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
