"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SoftwareMaintenance = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 py-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          data-aos="fade-right"
          className="lg:w-1/2 text-gray-700 space-y-5"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Software & Application Maintenance
          </h2>
          <p className="ext-gray-700 text-base sm:text-md md:text-md dark:text-gray-300 mb-4 leading-relaxed mt-4">
            We provide multi-level maintenance and support for enterprise applications. BeaverTek assists with monitoring, troubleshooting, and delivering workarounds, hotfixes, security audits, and application enhancements.
          </p>
          <ul className=" ext-gray-700 text-base sm:text-md md:text-md dark:text-gray-300 mb-4 leading-relaxed mt-4 list-disc list-inside space-y-2">
            <li><strong className="text-blue-500">L1 Support :</strong> user guidance, standard issue resolution, system monitoring.</li>
            <li><strong className="text-blue-500">L2 Support :</strong> server administration, IT infrastructure support, proactive monitoring setup.</li>
            <li><strong className="text-blue-500">L3 Support :</strong> code issue resolution, optimization, and new functionality implementation.</li>
          </ul>
        </motion.div>

        {/* Right Side Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-left"
          className="lg:w-1/2 relative flex justify-center lg:justify-end items-center"
        >
          {/* Rectangular Image */}
          <div className="relative w-[440px] h-[340px] lg:w-[580px] lg:h-[380px] rounded-3xl shadow-2xl overflow-hidden animate-float">
            <Image
              src="/services/Software & Application Maintenance.jpg"
              alt="Software Maintenance"
              fill
              className="object-cover"
            />
          </div>

          {/* Circular Image overlapping top-left */}
          <div className="absolute -top-10 -left-10 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full shadow-xl overflow-hidden border-4 border-white animate-float-fast">
            <Image
              src="/services/softwaretool.jpg"
              alt="Maintenance Tools"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite alternate;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-8px) rotate(-1deg) scale(1.03); }
          100% { transform: translateY(0px) rotate(0deg) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default SoftwareMaintenance;
