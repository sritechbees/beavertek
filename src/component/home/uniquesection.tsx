"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSuitcase, FaCogs, FaSyncAlt } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { RiCpuLine } from "react-icons/ri";
import Link from "next/link";

export default function UniqueSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaSuitcase className="text-cyan-400 text-5xl relative z-10" />,
      title: "Deep Industry Experience",
      desc: "80+ years combined with Fortune 500 companies, delivering strategic, high-impact solutions.",
      image: "/home/Deep Industry Experience.jpg",
    },
    {
      icon: <RiCpuLine className="text-purple-400 text-5xl relative z-10" />,
      title: "Technology is in Our DNA",
      desc: "Passion drives us. Innovation defines us. Our energy and focus are unmatched.",
      image: "/home/Data team.jpg",
    },
    {
      icon: <FaCogs className="text-green-400 text-5xl relative z-10" />,
      title: "Tailored, Future-Ready Solutions",
      desc: "Every solution we build is scalable, secure, and uniquely designed for your needs.",
      image: "/home/Deep Industry Experience.jpg",
    },
    {
      icon: <MdAnalytics className="text-blue-400 text-5xl relative z-10" />,
      title: "Data-Driven Decision Making",
      desc: "Transform data into insights with advanced analytics, BI, and real-time reporting.",
      image: "/home/Deep Industry Experience.jpg",
    },
    {
      icon: <FaSyncAlt className="text-pink-400 text-5xl relative z-10" />,
      title: "Legacy Modernization",
      desc: "Modernize with confidence. We bridge the gap between legacy infrastructure and modern frameworks.",
      image: "/home/Deep Industry Experience.jpg",
    },
  ];

  return (
    <section className="relative text-white mt-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          What makes us Unique?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-500 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-12"
        >
          We know you have plenty of options. Here’s why companies choose{" "}
          <span className="text-blue-500 font-semibold">BeaverTek</span>.
        </p>

        {/* Top row → 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {features.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={200 * idx}
              className="group relative rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl 
                         transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 
                         cursor-pointer overflow-hidden"
            >
              {/* Gradient Reveal Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-white 
                              transform scale-x-0 group-hover:scale-x-100 origin-left 
                              transition-transform duration-500 ease-out z-0 rounded-2xl" />

              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity 
                           duration-500 rounded-2xl z-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

          
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-700 
                                group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white 
                               group-hover:text-blue-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base 
                              leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Glow underline */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 
                               group-hover:w-full transition-all duration-500 rounded-full"></span>
            </div>
          ))}
        </div>

        {/* Bottom row → 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4 md:w-2/3 mx-auto">
          {features.slice(3).map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={600 + 200 * idx}
              className="group relative rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl 
                         transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 
                         cursor-pointer overflow-hidden"
            >
              {/* Gradient Reveal Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-white 
                              transform scale-x-0 group-hover:scale-x-100 origin-left 
                              transition-transform duration-500 ease-out z-0 rounded-2xl" />

              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity 
                           duration-500 rounded-2xl z-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

             
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-700 
                                group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white 
                               group-hover:text-blue-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base 
                              leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Glow underline */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 
                               group-hover:w-full transition-all duration-500 rounded-full"></span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="py-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link href="/contact/formone">
            <button
              data-aos="zoom-in"
              className="px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-blue-400 to-blue-500 
                         text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 
                         transition-all duration-300 group hover:scale-105"
            >
              Book a Consultation →
            </button>
          </Link>
          <Link href="/services/servicesherosection">
            <button
              data-aos="zoom-in"
              className="px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-blue-400 to-blue-500 
                         text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 
                         transition-all duration-300 group hover:scale-105"
            >
              Learn More About Our Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
