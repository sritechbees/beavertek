"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const UITesting = () => {
  return (
    <section className="relative w-full  bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 overflow-hidden">
     
      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col items-center gap-12">
        {/* Top Image (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -80, y: -40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-12 left-0 lg:left-24 w-[220px] h-[280px] rounded-xl overflow-hidden shadow-2xl animate-float"
        >
          <Image
            src="/services/UITesting1.jpg" // replace with your top image
            alt="UI Testing Left"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Bottom Image (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 80, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-12 right-0 lg:right-24 w-[220px] h-[280px] rounded-xl overflow-hidden shadow-2xl animate-float-reverse"
        >
          <Image
            src="/services/UITesting.jpg" // replace with your bottom image
            alt="UI Testing Right"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Middle Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl text-center text-gray-700 space-y-4 bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 backdrop-blur-lg p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            UI Testing
          </h2>
          <p className="flex text-center items-start text-base sm:text-lg md:text-md text-gray-800 dark:text-gray-200">
            All UI components conform to UI mockups, visual prototypes,
            corporate guidelines, and user expectations.
          </p>
          <p className="flex text-center items-start text-base sm:text-lg md:text-md text-gray-800 dark:text-gray-200">
            Window controls (buttons, toolbars, menus, lists, etc.) and
            graphical objects are well-organized, meaningfully labeled, and
            accessible.
          </p>
          <p className="flex text-center items-start text-base sm:text-lg md:text-md text-gray-800 dark:text-gray-200">
            International considerations are followed (support for right-to-left
            languages, international fonts, enough onscreen space for translated
            text, etc.).
          </p>
          <p className="flex text-center items-start text-base sm:text-lg md:text-md text-gray-800 dark:text-gray-200">
            On mobile devices, the UI adapts seamlessly to all resolutions,
            screen orientations, mobile network events and conditions, etc.
          </p>
        </motion.div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
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
        @keyframes float-reverse {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default UITesting;
