"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import Link from "next/link";
import Servicestwo from "./servicestwo";
import Servicesthree from "./servicesthree";
import Servicesfour from "./servicesfour";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Servicesone() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <App_layout>
      <section className="bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 text-gray-950 py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* 🔹 Stylish Centered Heading */}
        <div className="relative text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase text-xs sm:text-sm tracking-widest text-blue-500 font-semibold mb-3"
            data-aos="fade-up"
          >
            Managed IT Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -25, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            data-aos="zoom-in"
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold 
                       bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black 
                       drop-shadow-lg leading-snug"
          >
            Smart IT Solutions. <br className="hidden md:block" />
            Exceptional Digital Experiences. <br className="hidden md:block" />
            Proven Business Value.
          </motion.h1>

          {/* Decorative Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto mt-4 w-20 sm:w-24 h-1 bg-blue-500 rounded-full animate-pulse"
            data-aos="fade-right"
          />
        </div>

        {/* 🔹 Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            {/* Half Blue, Half Gray Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gray-900">Advance Analytics</span>{" "}
              <span className="text-blue-500">&amp; BI</span>
            </h2>

            <ul
              className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li>
                A positive experience with an application builds loyalty,
                enhances your company’s reputation and makes your team happier
                and more productive.
              </li>
              <li>
                At BeaverTek, we specialize in applications that build and
                transform relationships between people and technology. We
                deliver applications that empower employees and engage
                customers, with a relentless focus on design and user
                experience.
              </li>
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services/analytics_bi">
                <button
                  data-aos="zoom-in"
                  className="px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-blue-400 to-blue-500 
                                 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 
                                 transition-all duration-300 group hover:scale-105"
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
            className="flex justify-center"
            data-aos="fade-left"
          >
            <Image
              src="/services/Advance Analytics.jpg"
              alt="Analytics & BI"
              width={500}
              height={400}
              className="rounded-xl hover:scale-105 transition-transform duration-500 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 🔹 Following Sections */}
      <Servicestwo />
      <Servicesthree />
      <Servicesfour />
    </App_layout>
  );
}
