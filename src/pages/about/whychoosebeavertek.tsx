
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import AboutThird from "./aboutthird";
import WeExist from "./weexist";
import AboutHeroSection from "./aboutherosection";
import Services from "@/component/common/services";

export default function WhyChooseBeaverTek() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <App_layout>
      <AboutHeroSection />

      {/* Intro Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-20 px-6 md:px-12 overflow-hidden">
        {/* Background Blobs */}
         <div className="absolute -top-28 -left-28 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-emerald-400/30 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-purple-500 bg-clip-text text-transparent"
          >
            Innovative IT Services with a Purpose-Driven Mission
          </motion.h2>

          <motion.p
            data-aos="fade-up"
            className="mt-8 text-lg md:text-xl text-gray-950 leading-relaxed overflow-hidden"
          >
            BeaverTek is a passionate and forward-thinking IT services provider
            based in Orange County, California, with an extended presence in
            Chennai, India. With over eight decades of collective consulting
            experience across Fortune 500 companies and diverse industries, we
            bring deep expertise, innovative thinking, and unwavering dedication
            to every client engagement.
          </motion.p>

          <motion.p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg text-gray-950 leading-relaxed overflow-hidden"
          >
            What sets us apart is more than just our technical proficiency—
            technology is in our DNA. It fuels our contagious energy, drives our
            culture, and inspires our relentless pursuit to deliver solutions
            that truly make a difference.
          </motion.p>
        </div>
         <Services />
     
     

     
      
       
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.p
            data-aos="fade-up"
            className="mt-8 text-lg md:text-xl text-gray-950 leading-relaxed overflow-hidden"
          >
            We proudly partner with the ProPlus Open Layer framework to support
            and modernize legacy applications, ensuring a seamless transition
            into future-ready systems.
          </motion.p>

          <motion.p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg text-gray-950 leading-relaxed overflow-hidden"
          >
            Every solution we craft is designed to be scalable, robust, and
            perfectly aligned with the client’s specific business needs. By
            leveraging agile methodologies and industry best practices, we
            deliver timely, reliable, and impactful technology solutions.
          </motion.p>
        </div>
     
       <div className="relative z-10 max-w-7xl mx-auto py-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
           {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/about/our mission.jpg"
              alt="BeaverTek Mission"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Our mission is simple yet powerful
            </h2>
            <p className="mt-6 text-lg text-gray-950 leading-relaxed">
              Empower our clients with accurate, actionable data anytime,
              anywhere so they can thrive in a data-driven world.
            </p>
          </motion.div>
        </div>
      

      {/* Additional Sections */}
      <WeExist />
       <AboutThird />
      </section>
     
    </App_layout>
  );
}

