"use client";

import { motion } from "framer-motion";

export default function SmartSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 lg:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
        >
          🚀 Your Smart Title Here
        </motion.h2>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Your content paragraph comes here. Make it descriptive, clear and modern. 
          You can explain features, services, or product highlights in a short and
          smart way so that it looks trending and engaging.
        </motion.p>

        {/* Animated Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { title: "Feature One", desc: "Short modern description." },
            { title: "Feature Two", desc: "Another useful highlight." },
            { title: "Feature Three", desc: "Smart and trending content." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-yellow-400/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-yellow-300">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
