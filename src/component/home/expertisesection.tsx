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
    <section className="relative  text-white py-16 overflow-hidden">
      {/* AI floating glow effects
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-emerald-400/30 rounded-full blur-3xl animate-pulse pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <h3 className="uppercase text-green-400 tracking-wider font-semibold mb-2">
            What We Offer
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug bg-gradient-to-r from-cyan-400 via-green-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Expertise<span className="text-gray-950"> Across Core</span>  IT Services
          </h2>
          <h4 className="text-2xl font-semibold text-cyan-300 mb-6">
            Data Analytics and Application Development
          </h4>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <FaDatabase className="text-cyan-400 text-2xl mt-1" />
              <p className="text-gray-600 text-[17px]">
                BeaverTek IT Services provides data analytics by collecting,
                cleaning, transforming, and analyzing data to extract useful
                insight and support decision-making.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaRobot className="text-green-400 text-2xl mt-1" />
              <p className="text-gray-600 text-[17px]">
                Our IT Team develops applications to meet user needs with
                designing, building, testing, and deploying using models like
                Waterfall, Agile, and DevOps.
              </p>
            </li>
          </ul>

          {/* CTA Button with animation */}
          <Link href="/customers/customerherosection">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Explore More →
          </motion.button>
          </Link>
        </div>

        {/* Right Content - Image with floating badges */}
        <div className="relative flex justify-center" data-aos="fade-left">
          <motion.img
            src="/home/Data team.jpg" // 🔹 replace with your image
            alt="Analytics"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-[2.5rem] shadow-2xl border border-cyan-400/20"
          />

          {/* Floating badges */}
          <motion.div
            className="absolute -top-6 left-6 bg-white/10 backdrop-blur-xl border border-cyan-400/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-md"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MdOutlineReviews className="text-yellow-400 text-xl" />
            <span>2K+ Reviews</span>
          </motion.div>

          <motion.div
            className="absolute top-12 -right-6 bg-white/10 backdrop-blur-xl border border-purple-400/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-md"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MdOutlineStarRate className="text-green-400 text-xl" />
            <span>4.8 Satisfaction</span>
          </motion.div>

          <motion.div
            className="absolute bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-green-400/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-md"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <FaUsers className="text-cyan-400 text-xl" />
            <span>World Wide Users</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
