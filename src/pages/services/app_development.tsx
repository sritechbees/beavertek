"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileAppDevelopment from "./mobileapp_development";

export default function App_development() {
  return (
    <App_layout>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center 
                          bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 px-6 py-16 overflow-hidden">

       
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -25, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold 
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black 
                     drop-shadow-lg text-center leading-tight"
        >
         Application Development
        </motion.h1>

        {/* Animated Logo */}
       <motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
  className="relative z-10 mt-8 flex items-center justify-center"
>
  {/* Rotating Border */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
    className="absolute w-44 h-44 rounded-full border-4 border-blue-400 border-t-transparent border-b-transparent"
  ></motion.div>

  {/* Logo Container */}
  <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center relative z-10">
    <Image
      src="/home/logo.svg"
      alt="BeaverTek Logo"
      width={120}
      height={120}
      className="rounded-full object-cover"
    />
  </div>
</motion.div>


        {/* Animated Bullet Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 mt-10 space-y-6 max-w-3xl text-center sm:text-left"
        >
          <p className="flex text-center items-start text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200">
           
           At the moment many businesses want to develop and manage applications themselves, thus minimizing the dependency on outside IT teams.
          </p>

          <p className="flex text-center items-start text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200">
            
           Consequently, there is tremendous demand for Application development, maintenance and support services that focuses on rapid application development, testing, deployment and support of quality products which are scalable and user friendly. Companies also need effective Application management and maintenance to enhance and upgrade these apps.    </p>
        
 <p className="flex text-center items-start text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200">
            
         At Beavertek, Inc. we help companies launch and manage all connected smart applications, which in turn provides greater user experience, while reducing cost for Application Development.</p>

 <p className="flex text-center items-start text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200">
            
          BeverTek’s service encompasses Application Development, maintenance and support services and rapid application development. We specialize in custom Application development, legacy modernization ‘Enterprise Application, Data Transformation and Integration. We engage with our clients throughout the development process, deployment and maintenance journey where we focus on Risk Governance and design approaches to deliver an unsurpassed user experience to clients.</p>
        </motion.div>
      </section>
      <MobileAppDevelopment/>
    </App_layout>
  );
}
