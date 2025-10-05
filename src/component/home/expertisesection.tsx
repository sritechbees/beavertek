"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDatabase, FaRobot, FaUsers } from "react-icons/fa";
import { MdOutlineReviews, MdOutlineStarRate } from "react-icons/md";
import Link from "next/link";

export default function ExpertiseSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative text-gray-900 dark:text-white py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        
        {/* Top: WHAT WE OFFER */}
        <h3 className="uppercase text-blue-400 tracking-wider font-semibold text-center">
          WHAT WE OFFER
        </h3>

        {/* Animated Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-2xl md:text-4xl font-extrabold text-center mb-6"
        >
         Expertise Across Core IT Services
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Left Content */}
          <div
            data-aos="fade-right"
            className="flex-1 flex flex-col justify-center text-center md:text-left"
          >
            {/* Subheading */}
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-950 mb-6">
              Data Analytics and Application Development
            </h4>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <FaDatabase className="text-cyan-500 text-2xl mt-1" />
                <p className="text-[16px] sm:text-[17px] leading-relaxed">
                  BeaverTek IT Services provides data analytics by collecting, cleaning, transforming, and analyzing data to extract useful insights and support decision-making.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaRobot className="text-green-500 text-2xl mt-1" />
                <p className="text-[16px] sm:text-[17px] leading-relaxed">
                  Our IT Team develops applications to meet user needs with designing, building, testing, and deploying using models like Waterfall, Agile, and DevOps.
                </p>
              </li>
            </ul>

            {/* CTA Button */}
            <Link href="/customers/customerherosection">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mx-auto md:mx-0"
              >
                Explore More →
              </motion.button>
            </Link>
          </div>

          {/* Right Content - Image with floating badges */}
          <div
            className="flex-1 relative flex justify-center items-center mt-10 md:mt-0"
            data-aos="fade-left"
          >
            <motion.img
              src="/home/Data team.jpg"
              alt="Analytics"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="rounded-2xl shadow-2xl border border-cyan-300/30 w-full max-w-md"
            />

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 left-4 bg-white/20 backdrop-blur-md border border-cyan-300/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-md"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MdOutlineReviews className="text-yellow-400 text-xl" />
              <span className="text-sm sm:text-base">2K+ Reviews</span>
            </motion.div>

            <motion.div
              className="absolute top-12 -right-4 bg-white/20 backdrop-blur-md border border-purple-300/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-md"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <MdOutlineStarRate className="text-green-400 text-xl" />
              <span className="text-sm sm:text-base">4.8 Satisfaction</span>
            </motion.div>

            <motion.div
              className="absolute bottom-4 -left-4 bg-white/20 backdrop-blur-md border border-green-300/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-md"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <FaUsers className="text-cyan-400 text-xl" />
              <span className="text-sm sm:text-base">World Wide Users</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
