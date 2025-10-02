"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import MobileAppDevelopment from "./mobileapp_development";

const ApplicationDevelopment = () => {
  return (
    <App_layout>
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 mt-12">
        <div className="container mx-auto px-4 flex flex-col items-center gap-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
          >
            Application Development
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
              alt="Application Development Logo"
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
              At the moment many businesses want to develop and manage applications themselves, thus minimizing the dependency on outside IT teams.
            </p>
            <p>
              Consequently, there is tremendous demand for Application development, maintenance and support services that focuses on rapid application development, testing, deployment and support of quality products which are scalable and user friendly. Companies also need effective Application management and maintenance to enhance and upgrade these apps.
            </p>
            <p>
              At Beavertek, Inc. we help companies launch and manage all connected smart applications, which in turn provides greater user experience, while reducing cost for Application Development.
            </p>
            <p>
              BeaverTek’s service encompasses Application Development, maintenance and support services and rapid application development. We specialize in custom Application development, legacy modernization, Enterprise Application, Data Transformation and Integration. We engage with our clients throughout the development process, deployment and maintenance journey where we focus on Risk Governance and design approaches to deliver an unsurpassed user experience to clients.
            </p>
          </motion.div>
        </div>
      </section>
      <MobileAppDevelopment/>
    </App_layout>
  );
};

export default ApplicationDevelopment;
