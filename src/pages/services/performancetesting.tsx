"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PerformanceTesting = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 py-24 overflow-hidden">
     
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-gray-700 space-y-4"
        >
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-snug">
            Performance Testing
          </h2>
          <p className="ext-gray-700 text-base sm:text-md md:text-lg dark:text-gray-300 mb-4 leading-relaxed mt-4">
            BeaverTek’s Performance Testing & Load testing practices provide a comprehensive solution for getting rich insights into software performance and its overall architecture. Our Performance Testing Services cater to your needs for developing or deploying business critical systems. In an ever-expanding business environment, setting up and delivering optimum customer experience has a direct connect with your competitive edge and sustenance in the technology marketplace.
          </p>
          <p className="ext-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed mt-4">
            Our Performance Testing Services Irvine, Orange County are designed to cater to the needs of various industries, including software vendors, web businesses and enterprises. Webload, Load Runner, Silk Performer, are some of the tools we use for providing Performance Testing Services.
          </p>
          <p className="ext-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed mt-4">
            Whether you are deploying mission critical applications or require manpower to manage your projects, our services are a one stop for all your testing needs.
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center lg:justify-end relative max-sm:ml-14 overflow-visible"
        >
          {/* Image container with floating animation */}
          <div className="relative w-[320px] h-[400px] lg:w-[360px] mr-14  lg:h-[460px] rounded-2xl shadow-2xl overflow-hidden animate-float">
            <Image
              src="/services/Performance Testing.jpg" // Replace with your image
              alt="Performance Testing"
              fill
              className="object-cover"
            />
          </div>

          {/* Optional Overlapping Secondary Image */}
          <div className="absolute -right-10 -bottom-12 w-[220px] mr-14 h-[300px] lg:w-[260px] lg:h-[340px] rounded-2xl shadow-xl overflow-hidden animate-float-fast z-20">
            <Image
              src="/services/Performance Testing1.jpg" // Replace with your secondary image
              alt="Performance Testing Tools"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default PerformanceTesting;
