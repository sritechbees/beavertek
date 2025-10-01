"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WeExist() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Type-safe Framer Motion Variants
  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative py-16 px-6 md:px-20 bg-[linear-gradient(270deg,#f0f0f0,#ffffff,#f0f0f0)] bg-[length:600%_600%] animate-[gradientShift_10s_ease_infinite]">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        We Exist to Serve Our Clients
      </motion.h2>

      {/* Content + Images */}
      <div className="max-w-7xl mx-auto mt-14 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          data-aos="fade-right"
          className="space-y-6 text-gray-700"
        >
          <p className="text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
            At BeaverTek, our purpose is simple—but powerful. We believe we
            have a responsibility to deliver the right solutions that are
            robust, scalable, and built to last. Everything we do is driven by
            our commitment to quality, integrity, and outcomes that matter.
          </p>

          <p className="text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
            From our clients to our partners and employees, our focus is
            unwavering—delivering excellence, consistently. When our clients
            succeed, we succeed. That’s the BeaverTek way.
          </p>
        </motion.div>

        {/* Double Image Section with Staggered Animation */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {[ "/about/exist-1.jpg", "/about/exist-2.jpg" ].map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-2xl shadow-xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 transition-all duration-500"
            >
              <Image
                src={src}
                alt={`BeaverTek Service ${i + 1}`}
                width={320}
                height={220}
                className="rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
