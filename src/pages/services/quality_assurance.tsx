"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import FunctionalTesting from "./functional_testing";
import PerformanceTesting from "./performancetesting";
import UITesting from "./uitesting";
import EndToEndTesting from "./endtoendtesting";

const QualityAssurance = () => {
  return (
    <App_layout>
    <section className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-24">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center gap-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
        >
          Quality Assurance
        </motion.h1>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/home/logo.png" // Replace with your logo
            alt="Quality Assurance Logo"
            width={150}
            height={150}
            className="rounded-full shadow-md"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:w-3/4 text-center lg:text-left space-y-4 text-gray-700"
        >
          <p>
            At BeaverTek we follow traditional waterfall processes or agile methodologies, depending on our customers request or if a project demands it. We do lean heavily towards agile and scrum-based QA testing to better mitigate risks, reduce time to market, and deal with changing requirements in a more efficient manner.
          </p>
          <p>
            With our experience and industry’s best practices, our approach emphasizes early testing, predictability, efficient communication, and detailed reporting.
          </p>
          <p>
            We are also big believers in QA automation, and advocate implementing a test automation strategy whenever it makes sense and benefits the project.
          </p>
        </motion.div>
      </div>
    </section>
    <FunctionalTesting/>
    <PerformanceTesting/>
    <UITesting/>
    <EndToEndTesting/>
    </App_layout>
  );
};

export default QualityAssurance;
