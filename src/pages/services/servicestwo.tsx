"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Servicestwo() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 text-gray-950 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          data-aos="fade-right"
          className="flex justify-center"
        >
          <Image
            src="/services/Application Development.jpg"
            alt="Application Development"
            width={600}
            height={400}
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          data-aos="fade-left"
        >
          {/* Half Gray + Half Blue Heading */}
          <h1
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="zoom-in"
          >
            <span className="text-gray-950">Application</span>{" "}
            <span className="text-blue-500">Development</span>
          </h1>

          <ul
            className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>
              At the moment many businesses want to develop and manage
              applications themselves, thus minimizing the dependency on outside
              IT teams.
            </li>
            <li>
              At BeaverTek, Inc. we help companies launch and manage all
              connected smart applications, which in turn provides greater user
              experience, while reducing cost for Application Development.
            </li>
          </ul>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services/app_development">
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
      </div>
    </section>
  );
}
