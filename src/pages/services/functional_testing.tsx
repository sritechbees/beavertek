"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const FunctionalTesting = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50  flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 rounded-xl shadow-2xl max-w-4xl w-full flex flex-col lg:flex-row overflow-hidden"
      >
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-[320px] lg:h-auto">
          <Image
            src="/services/FunctionalTesting.jpg"
            alt="Functional Testing"
            fill
            className="object-cover"
          />
          {/* Top Quote */}
          <span className="absolute top-4 left-4 text-6xl text-white drop-shadow-lg font-serif">
            “
          </span>
        </div>

        {/* Text Section */}
        <div className="relative w-full lg:w-1/2 p-8 flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-3 md:text-4xl leading-snug">
            Functional Testing
          </h2>

         

          {/* Description */}
          <p className="ext-gray-700 text-base sm:text-md md:text-md dark:text-gray-300 mb-2 leading-relaxed mt-2">
            Having a pre-established feature specification, Functional Testing
            and Manual QA Services approaches software and applications from the
            user’s point of view. A must-have for every project, it covers 95%
            of product quality requirements and expectations.
          </p>
          <p className="ext-gray-700 text-base sm:text-md md:text-md dark:text-gray-300 mb-2 leading-relaxed mt-2">
            BeaverTek’s Quality Assurance and testing teams follow a
            well-defined process that has been developed and used for years. Our
            experts devise the optimum Quality Assurance strategy for the
            project, pick the best software tools, and plan the required testing
            activities.
          </p>
          <p className="ext-gray-700 text-base sm:text-md md:text-md dark:text-gray-300 mb-2 leading-relaxed mt-2">
            Our functional testing team then develops extensive test cases and
            checklists, executes them, and analyzes the output. By employing
            such black-box techniques as equivalence partitioning and boundary
            value analysis, our testers save time and improve testing efficiency
            to deliver outstanding results.
          </p>

          {/* Bottom Quote */}
          <span className="absolute bottom-4 right-6 text-6xl text-gray-200 font-serif">
            ”
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default FunctionalTesting;
