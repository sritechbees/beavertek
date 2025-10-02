"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EndToEndTesting = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-green-50 via-white to-green-100 py-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-gray-700 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            End-to-End Testing
          </h2>
          <p>
            During development, every software product is tested multiple times to verify that all the functions work correctly, that the solution complies with performance requirements, that the GUI ensures superior quality of experience on all devices, etc.
          </p>
          <p>
            However, in some cases successful completion of these tests is not enough to make a user’s entire journey through the application trouble-free. This is where end-to-end testing comes into play.
          </p>
          <p>
            Our Quality Assurance and testing teams use test scenarios that simulate real user behavior and involve all integrated components such as interfaces, databases, network, external systems, and other applications.
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center lg:justify-end relative overflow-visible"
        >
          <div className="relative w-[320px] h-[400px] lg:w-[360px] lg:h-[460px] rounded-2xl shadow-2xl overflow-hidden animate-float">
            <Image
              src="/services/end to end testing.jpg" // Replace with your image
              alt="End-to-End Testing"
              fill
              className="object-cover"
            />
          </div>

          {/* Optional Overlapping Secondary Image */}
          <div className="absolute -right-10 -bottom-12 w-[220px] h-[300px] lg:w-[260px] lg:h-[340px] rounded-2xl shadow-xl overflow-hidden animate-float-fast z-20">
            <Image
              src="/services/end to end testing.jpg" // Replace with secondary image
              alt="Testing Scenario"
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

export default EndToEndTesting;
