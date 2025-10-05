"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DataAnalytics() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center
                        bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 overflow-hidden px-6 py-16">

      {/* Content Wrapper with controlled max width */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative group w-80 h-80 md:w-[28rem] md:h-[28rem]">
            <motion.div
              initial={{ rotate: 6 }}
              whileHover={{ rotate: 12 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-blue-500 rounded-3xl blur-sm opacity-70"
            ></motion.div>

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
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center md:text-left px-4 md:px-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text drop-shadow-lg"
          >
            Data and Analytics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          >
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
          </motion.p>
        </motion.div>
      </div>

        </section>
  );
}
