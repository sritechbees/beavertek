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
      

      {/* Intro Section */}
      <section className="relative bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 py-12 px-6 md:px-12 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-600 to-gray-900 dark:from-cyan-400 dark:to-white 
                       drop-shadow-lg leading-snug"
          >
            Innovative IT Services with a Purpose-Driven Mission
          </motion.h1>

          <motion.p
            data-aos="fade-up"
            className="mt-8 text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-4xl mx-auto"
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
            className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            What sets us apart is more than just our technical proficiency—
            technology is in our DNA. It fuels our contagious energy, drives our
            culture, and inspires our relentless pursuit to deliver solutions
            that truly make a difference.
          </motion.p>
        </div>

        {/* Services Section */}
        <div className="mt-8">
          <Services />
        </div>

        {/* Partner Section */}
        <div className="relative z-10 max-w-6xl mx-auto text-center mt-16">
          <motion.p
            data-aos="fade-up"
            className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-4xl mx-auto"
          >
            We proudly partner with the ProPlus Open Layer framework to support
            and modernize legacy applications, ensuring a seamless transition
            into future-ready systems.
          </motion.p>

          <motion.p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Every solution we craft is designed to be scalable, robust, and
            perfectly aligned with the client’s specific business needs. By
            leveraging agile methodologies and industry best practices, we
            deliver timely, reliable, and impactful technology solutions.
          </motion.p>
        </div>

        {/* Mission Section */}
        <div className="relative z-10 max-w-7xl mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 bg-clip-text">
              Our Mission
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              At BeaverTek, we focus on giving clients precise and reliable data.
We ensure this information is accessible whenever and wherever they need it.
Our goal is to enable smarter decisions and drive meaningful growth.
Ultimately, we help businesses succeed in an increasingly data-driven world.
            </p>
            <p className="mt-6 text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
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
