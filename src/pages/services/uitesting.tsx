"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const UITesting = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-pink-50 via-white to-pink-100 py-24 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-pink-400/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center lg:justify-start relative overflow-visible"
        >
          {/* Image with rotation and shadow */}
          <div className="relative w-[320px] h-[400px] lg:w-[360px] lg:h-[440px] rounded-2xl shadow-2xl overflow-hidden animate-float">
            <Image
              src="/services/UITesting.jpg" // Replace with your UI Testing image
              alt="UI Testing"
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
          className="lg:w-1/2 text-gray-700 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            UI Testing
          </h2>
          <p>
            All UI components conform to UI mockups, visual prototypes, corporate guidelines, and user expectations.
          </p>
          <p>
            Window controls (buttons, toolbars, menus, lists, etc.) and graphical objects are well-organized, meaningfully labeled, and accessible.
          </p>
          <p>
            International considerations are followed (support for right-to-left languages, international fonts, enough onscreen space for translated text, etc.).
          </p>
          <p>
            On mobile devices, the UI adapts seamlessly to all resolutions, screen orientations, mobile network events and conditions, etc.
          </p>
        </motion.div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
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

export default UITesting;
