"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EndToEndTesting = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-right"
          className="relative flex justify-center lg:justify-start items-center gap-6"
        >
          {/* Rectangular Image */}
          <div className="relative w-[280px] h-[380px] lg:w-[340px] lg:h-[440px] rounded-2xl overflow-hidden shadow-2xl animate-float z-20">
            <Image
              src="/services/end to end testing.jpg"
              alt="End-to-End Main"
              fill
              className="object-cover"
            />
          </div>

          {/* Circular Image */}
          <div className="relative w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden shadow-xl animate-float-fast z-10 -translate-y-12">
            <Image
              src="/services/end to end testing1.jpg"
              alt="End-to-End Side"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-left"
          className="text-gray-700 space-y-5"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            End-to-End Testing
          </h2>
          <p className="ext-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed mt-4">
            During development, every software product is tested multiple times to
            verify that all functions work correctly, that performance requirements
            are met, and that the GUI ensures a superior user experience.
          </p>
          <p className="ext-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed mt-4">
            Sometimes, passing these tests isn’t enough to make the user journey
            flawless. That’s where end-to-end testing comes in.
          </p>
          <p className="ext-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed mt-4">
            Our QA teams simulate real user behavior covering all integrated components,
            such as interfaces, databases, networks, external systems, and other applications.
          </p>
        </motion.div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 5s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-fast {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default EndToEndTesting;
