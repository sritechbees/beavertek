
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    image: "/about/Advanced Analytics.jpg",
    title: "Advanced Analytics",
    description:
      "Unlock powerful insights with predictive models and data-driven decision-making tools.",
    flowerClass: "flower-1",
  },
  {
    image: "/about/AI & AI Agents.jpg",
    title: "AI & AI Agents",
    description:
      "Automate tasks and enhance productivity with next-gen artificial intelligence solutions.",
    flowerClass: "flower-2",
  },
  {
    image: "/about/Business Intelligence & Reporting1.jpg",
    title: "Business Intelligence & Reporting",
    description:
      "Transform raw data into clear, actionable dashboards and reports for smarter decisions.",
    flowerClass: "flower-3",
  },
  {
    image: "/about/Data Integration.jpg",
    title: "Data Integration",
    description:
      "Seamlessly connect multiple systems and sources into a unified, consistent data pipeline.",
    flowerClass: "flower-4",
  },
  {
    image: "/about/Application Development.jpg",
    title: "Application Development",
    description:
      "Build scalable, secure, and high-performing applications tailored to business needs.",
    flowerClass: "flower-5",
  },
  {
    image: "/about/Mobile Applications.jpg",
    title: "Mobile Applications",
    description:
      "Deliver intuitive, cross-platform mobile apps with modern design and smooth performance.",
    flowerClass: "flower-6",
  },
  {
    image: "/about/Database Design & Performance Tuning1.jpg",
    title: "Database Design & Performance Tuning",
    description:
      "Design optimized databases with high performance, scalability, and secure architecture.",
    flowerClass: "flower-7",
  },
  {
    image: "/about/Maintenance & Support Services.jpg",
    title: "Maintenance & Support Services",
    description:
      "Ensure system stability, security, and performance with round-the-clock support.",
    flowerClass: "flower-8",
  },
  {
    image: "/about/Quality Assurance.jpg",
    title: "Quality Assurance",
    description:
      "Deliver flawless software with automated testing, bug prevention, and QA best practices.",
    flowerClass: "flower-9",
  },
];

function Services() {
  return (
    <div className="max-w-7xl mx-auto  py-8 min-h-screen">
       <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl mb-20 text-center font-bold b bg-clip-text"
          >
           At BeaverTek, we specialize in :
          </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 2 }}
            className={`relative group cursor-pointer overflow-hidden ${feature.flowerClass} shadow-2xl bg-gradient-to-tr from-blue-300 to-cyan-100`}
            style={{
              borderRadius: "50% 20% / 30% 40%",
              padding: "3rem",
            }}
          >
            {/* Image Display */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-64 object-cover opacity-80 rounded-full"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              <h2 className="text-xl font-semibold text-blue-500 w-60 text-center mb-2">
                {feature.title}
              </h2>
              <p className=" w-64 text-white font-medium text-center">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;

