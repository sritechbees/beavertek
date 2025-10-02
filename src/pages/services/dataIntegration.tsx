"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DataIntegration = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Data Integration
          </h2>
          <p className="text-gray-700 mb-4">
            Data Integration involves combining data from several disparate sources, to provide a unified, meaningful overview of the data.
          </p>
          <p className="text-gray-700 mb-4">
            Data integration becomes increasingly important in cases of merging systems of multiple companies or consolidating applications within one company to provide a unified view of the company’s data assets and to enable Enterprises BI and Reporting capabilities.
          </p>
          <p className="text-gray-700">
            BeaverTek’s Data Integration Services help and work with clients to envision and execute the best strategies. We journey with our clients in decision making and empower them to build and execute the winning data strategies for their enterprise. Thus, help clients build their facts based integrated BI and Analytics landscape.
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2"
        >
          <Image
            src="/services/Data Integration1.jpg" // Replace with your image path
            alt="Data Integration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DataIntegration;
