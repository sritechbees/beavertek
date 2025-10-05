"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DataIntegration = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Image with Gradient Background */}
        <motion.div
          initial={{ scale: 0.8, rotate: -6, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="relative lg:w-1/2 flex justify-center"
        >
          {/* Gradient Accent Shape */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 1.2 }}
            className="absolute -inset-1 bg-gradient-to-tr from-indigo-400 via-blue-500 to-cyan-400 rounded-xl blur-md opacity-60"
          ></motion.div>

          {/* Image Container */}
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[22rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <Image
              src="/services/Data Integration1.jpg" // Replace with your image path
              alt="Data Integration"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Data Integration
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed">
           
            Data Integration involves combining data from several disparate sources, 
            to provide a unified, meaningful overview of the data.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed">
            Data integration becomes increasingly important in cases of merging 
            systems of multiple companies or consolidating applications within one 
            company to provide a unified view of the company’s data assets and to 
            enable Enterprises BI and Reporting capabilities.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg dark:text-gray-300 mb-4 leading-relaxed">
            BeaverTek’s Data Integration Services help and work with clients to 
            envision and execute the best strategies. We journey with our clients 
            in decision making and empower them to build and execute the winning 
            data strategies for their enterprise. Thus, help clients build their 
            facts based integrated BI and Analytics landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DataIntegration;
