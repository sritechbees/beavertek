"use client";

import App_layout from "@/component/layout/app_layout";
import { motion } from "framer-motion";
import Image from "next/image";
import DataAnalytics from "./data_analytics";
import DataManagement from "./data_management";
import DataIntegration from "./dataIntegration";



export default function AnalyticsHero() {
  return (
    <App_layout>
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-emerald-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden mt-12 px-6">
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-tr from-green-200 via-white to-blue-200 rounded-full blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-cyan-200 via-white to-purple-200 rounded-full blur-3xl opacity-70 animate-pulse" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-center"
      >
        Advance Analytics & BI
      </motion.h1>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 mt-8"
      >
        <div className="p-6 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
          <Image
            src="/home/logo.png" // replace with your logo path
            alt="BeaverTek Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
      </motion.div>

      {/* Bullet Points */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 mt-10 space-y-6 max-w-3xl"
      >
        <p className="flex items-start text-lg md:text-xl text-gray-700 dark:text-gray-300">
          <span className="w-3 h-3 mt-2 mr-3 rounded-full bg-green-500 shadow-lg"></span>
          At the moment many businesses want to develop and manage applications themselves,
          thus minimizing the dependency on outside IT teams.
        </p>

        <p className="flex items-start text-lg md:text-xl text-gray-700 dark:text-gray-300">
          <span className="w-3 h-3 mt-2 mr-3 rounded-full bg-green-500 shadow-lg"></span>
          At Beavertek, Inc. we help companies launch and manage all connected smart applications,
          which in turn provides greater user experience, while reducing cost for Application Development.
        </p>
      </motion.div>
    </section>
  <DataAnalytics/>
  <DataManagement/>
  <DataIntegration/>
    </App_layout>
  );
}
