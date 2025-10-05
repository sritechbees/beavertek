"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Brent",
      role: "Senior Vice President",
      text: `I wanted to take a moment to personally thank you for the exceptional work you have done on Tablu Reporting. Your dedication, attention to details, and willingness to go beyond expectations truly stood out.`,
      photo: "/home/one.jpeg",
    },
    {
      name: "Cooraez",
      role: "CEO",
      text: `BeaverTek efforts not only contributed to the success of the project but also set a high standard for excellence with the team. It's rare to see such initiatives and commitment, and I want you to know that it has not gone unnoticed.`,
      photo: "/home/three.jpeg",
    },
    {
      name: "Ravi Rajagopal",
      role: "CEO",
      text: `I just wanted to give a big shoutout for the incredible work BeaverTek did on campus solutions. BeaverTek didn't just check the boxes they went all in, and it made a huge difference.`,
      photo: "/home/two.jpeg",
    },
  ];

  return (
    <section className="relative py-8 px-6 lg:px-24 bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Real Stories from Real Customers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 text-xl sm:text-xl mb-12"
        >
          Get inspired by these stories.
        </motion.p>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Circular Image */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-400 mb-4">
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name & Role */}
              <p className="font-semibold text-gray-900 dark:text-white text-lg">
                {item.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {item.role}
              </p>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
