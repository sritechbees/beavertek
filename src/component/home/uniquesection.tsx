"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSuitcase, FaCogs, FaSyncAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import { RiCpuLine } from "react-icons/ri";

export default function UniqueSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaSuitcase className="text-cyan-400 text-4xl" />,
      title: "Deep Industry Experience",
      desc: "Over 80+ years of combined experience with Fortune 500 companies, delivering strategic, high-impact solutions.",
    },
    {
      icon: <RiCpuLine className="text-purple-400 text-4xl" />,
      title: "Technology is in Our DNA",
      desc: "Passion drives us. Innovation defines us. Our energy and focus are unmatched.",
    },
    {
      icon: <FaCogs className="text-green-400 text-4xl" />,
      title: "Tailored, Future-Ready Solutions",
      desc: "Every solution we build is scalable, secure, and uniquely designed for your needs.",
    },
    {
      icon: <MdAnalytics className="text-blue-400 text-4xl" />,
      title: "Data-Driven Decision Making",
      desc: "Transform data into insights with advanced analytics, BI, and real-time reporting.",
    },
    {
      icon: <FaSyncAlt className="text-pink-400 text-4xl" />,
      title: "Legacy System Modernization",
      desc: "Modernize with confidence. We bridge the gap between legacy infrastructure and modern frameworks.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 overflow-hidden">
      {/* Glowing background orbs */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-purple-500 bg-clip-text text-transparent mb-6"
        >
          What makes us Unique?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-300 text-lg max-w-3xl mx-auto mb-12"
        >
          We know you have plenty of options. Here’s why companies choose{" "}
          <span className="text-cyan-400 font-semibold">BeaverTek</span>.
        </p>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={200 * idx}
              className="bg-[#1e293b]/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 group"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-12 flex flex-col md:flex-row justify-center gap-6"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Book a Consultation
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
