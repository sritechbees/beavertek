"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DatabaseManagement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-right"
          className="lg:w-1/2 flex justify-center lg:justify-start items-center"
        >
          <div className="relative w-[380px] h-[440px] lg:w-[480px] lg:h-[350px] overflow-hidden shadow-2xl animate-float rounded-r-full">
            <Image
              src="/services/Database Management Services.jpg"
              alt="Database Management"
              fill
              className="object-cove"
            />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          data-aos="fade-left"
          className="lg:w-1/2 text-gray-700 space-y-5"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Database Management Services
          </h2>
          <p className="ext-gray-700 text-base sm:text-md md:text-md dark:text-gray-300 mb-4 leading-relaxed mt-4">
            We ensure mission-critical databases are highly reliable and accessible. Our team provides monitoring, maintenance, and expert support for databases like Oracle, SQL Server, MySQL, Netezza, and Teradata.
          </p>
          <p className="ext-gray-700 text-base sm:text-md md:text-md dark:text-gray-300 mb-4 leading-relaxed mt-4">
            BeaverTek Database Management includes upgrades, performance optimization, disaster recovery, and security, providing a smooth, secure, and cost-effective solution.
          </p>
        </motion.div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default DatabaseManagement;
