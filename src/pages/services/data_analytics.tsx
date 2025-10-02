
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DataAnalytics() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-emerald-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden px-6 py-20">
      {/* Background Glow Circles */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-yellow-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-emerald-300/40 rounded-full blur-3xl animate-pulse" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image with Different Design */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative group w-72 h-72 md:w-96 md:h-96">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-blue-500 rounded-3xl rotate-6 blur-sm opacity-70 group-hover:rotate-12 transition-transform duration-500"></div>
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <Image
                src="/services/Data and Analytics.jpg"
                alt="Data Analytics"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Data and Analytics
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Information assets should help any business to establish a competitive advantage
            by capturing, analyzing and understanding the data in context to build models
            to make informed decisions. By analyzing the data, businesses can deliver
            comprehensive insights into customers, customer segmentation, sales and forecasts.
            For this very reason enterprises across the world are investing in their BI
            and Analytic capabilities.
            <br /><br />
            At BeaverTek we bring your data to life. Providing fast and actionable data driven
            Insights is our goal to bring organization closer to the single version of the truth
            and precise information, on time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
