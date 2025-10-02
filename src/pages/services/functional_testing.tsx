"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FunctionalTesting = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-purple-50 via-white to-purple-100 py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-right lg:text-right text-gray-700 space-y-4"
        >
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Functional Testing
          </h2>

          <p>
            Having a pre-established feature specification, Functional Testing and Manual QA Services approaches software and applications from the user’s point of view. A must-have for every project, it covers 95% of product quality requirements and expectations.
          </p>
          <p>
            BeaverTek’s Quality Assurance and testing teams follow a well-defined process that has been developed and used for years. Our experts devise the optimum Quality Assurance strategy for the project, pick the best software tools, and plan the required testing activities.
          </p>
          <p>
            Our functional testing team then develops extensive test cases and checklists, executes them, and analyzes the output. By employing such black-box techniques as equivalence partitioning and boundary value analysis, our testers save time and improve testing efficiency to deliver outstanding results.
          </p>
        </motion.div>

        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center lg:justify-start relative"
        >
          <div className="relative w-[320px] h-[400px] lg:w-[360px] lg:h-[440px] rounded-2xl overflow-hidden shadow-2xl animate-float">
            <Image
              src="/services/FunctionalTesting.jpg" // Replace with your image
              alt="Functional Testing"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Animation */}
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

export default FunctionalTesting;
