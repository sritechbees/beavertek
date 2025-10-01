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

export default function WhyChooseBeaverTek() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const services = [
    "Advanced Analytics",
    "AI & AI Agents",
    "Business Intelligence & Reporting",
    "Data Integration",
    "Application Development",
    "Mobile Applications",
    "Database Design & Performance Tuning",
    "Maintenance & Support Services",
    "Quality Assurance",
  ];

  return (
    <App_layout>
      <AboutHeroSection />

      {/* Intro Section */}
      <section className=" relative bg-[#0f172a] text-white py-20 px-6 md:px-20 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>

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
            className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed"
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
            className="mt-6 text-lg text-gray-300 leading-relaxed"
          >
            What sets us apart is more than just our technical proficiency—
            technology is in our DNA. It fuels our contagious energy, drives our
            culture, and inspires our relentless pursuit to deliver solutions
            that truly make a difference.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={`/services/${index + 1}.svg`}
                alt={service}
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner + Mission Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Partner Info */}
          <div>
            <motion.h3
              data-aos="fade-right"
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              Partnering with ProPlus Open Layer Framework
            </motion.h3>
            <p
              data-aos="fade-left"
              className="mt-4 text-gray-600 text-lg leading-relaxed"
            >
              We proudly partner with the ProPlus Open Layer framework to
              support and modernize legacy applications, ensuring a seamless
              transition into future-ready systems.
            </p>
          </div>

          {/* Mission Block */}
          <motion.div
            data-aos="fade-up"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl shadow-xl p-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Empower our clients with accurate, actionable data—anytime,
              anywhere—so they can thrive in a data-driven world.
            </p>
          </motion.div>
        </div>
      </section>
       <WeExist />
      <AboutThird />
     
    </App_layout>
  );
}
