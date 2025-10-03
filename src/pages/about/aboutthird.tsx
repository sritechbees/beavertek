"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutThird() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative mt-16 px-6">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-900"
      >
        It Makes Sense
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl text-center text-gray-600 mt-3"
      >
        Aligning Strategy with Purpose for Meaningful Impact
      </motion.p>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto mt-14 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          data-aos="fade-right"
          className="flex justify-center"
        >
          <Image
            src="/about/Meaningful Impact.jpg" // 🔹 Put your image inside public/about/
            alt="BeaverTek Strategy"
            width={600}
            height={450}
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          data-aos="fade-left"
          className="space-y-6 text-gray-700"
        >
          <p className="text-lg leading-relaxed">
            At BeaverTek, we’re more than an IT services company—we’re your
            strategic technology partner. We bring a dynamic blend of extensive
            experience, deep technical expertise, and a genuine passion for both
            technology and business process transformation. While we’re hard at
            work delivering smart, scalable technical solutions, our focus
            remains crystal clear—helping our clients achieve their business
            goals.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900">
            What Sets Us Apart
          </h3>
          <p className="text-lg leading-relaxed">
            Unlike traditional IT firms, technology doesn’t just inspire us—it
            defines us. This passion has shaped a high-performance culture that
            forms the very foundation and cornerstone of how we operate. It’s
            the energy that fuels our people, our process, and our promise to
            deliver meaningful results. At BeaverTek, we align strategy with
            purpose—because that’s what drives real impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
