"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Servicesthree() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 text-gray-950 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          data-aos="fade-right"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6" data-aos="zoom-in">
            <span className="text-gray-950">Quality</span>{" "}
            <span className="text-blue-500">Assurance</span>
          </h1>

          <ul
            className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>
              A positive experience with an application builds loyalty, enhances your company’s reputation and makes your team happier and more productive.
            </li>
            <li>
              At BeaverTek, we specialize in applications that build and transform relationships between people and technology. We deliver applications that empower employees and engage customers, through a relentless focus on design and user experience.
            </li>
          </ul>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services/quality_assurance">
              <button
                className="px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-blue-400 to-blue-500 
                rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/50 
                hover:scale-105 transition-all duration-300 group"
                data-aos="zoom-in"
              >
                Explore More →
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          data-aos="fade-left"
          className="flex justify-center"
        >
          <Image
            src="/services/Quality Assurance.jpg"
            alt="Quality Assurance"
            width={600}
            height={400}
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
