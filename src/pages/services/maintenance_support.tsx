"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import SoftwareMaintenance from "./softwaremaintenance";
import DatabaseManagement from "./databasemanagement";

const MaintenanceSupport = () => {
  return (
    <App_layout>
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 py-24 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col items-center gap-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
        >
          Maintenance & Support
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
            alt="Maintenance & Support Logo"
            width={150}
            height={150}
            className="rounded-full shadow-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:w-3/4 text-center text-gray-700 text-lg leading-relaxed"
        >
          <p>
            BeaverTek believes that professional maintenance and support is the right way to reduce software system TCO.
          </p>
          <p className="mt-4">
            It is not about availability of a single unit or module but making sure that all of IT infrastructure and software runs smoothly and reliably meeting the SLAs.
          </p>
        </motion.div>
      </div>
    </section>
    <SoftwareMaintenance/>
    <DatabaseManagement/>
    </App_layout>
  );
};

export default MaintenanceSupport;
