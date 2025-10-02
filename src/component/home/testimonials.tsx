"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Brent",
      role: "Senior Vice President",
      text: `I wanted to take a moment to personally thank you for the exceptional work you have done on Tablu Reporting. Your dedication, attention to details, and willingness to go beyond expectations truly stood out.`,
      photo: "/home/logo.png",
    },
    {
      name: "Coraez",
      role: "CEO",
      text: `BeaverTek efforts not only contributed to the success of the project but also set a high standard for excellence with the team. It's rare to see such initiatives and commitment, and I want you to know that it has not gone unnoticed.`,
      photo: "/home/logo.png",
    },
    {
      name: "Ravi",
      role: "CEO",
      text: `I just wanted to give a big shoutout for the incredible work BeaverTek did on campus solutions. BeaverTek didn't just check the boxes – they went all in, and it made a huge difference.`,
      photo: "/home/logo.png",
    },
  ];

  return (
    <section className="px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Real Stories from Real Customers
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg mb-12"
        >
         Get inspired by these stories.
        </motion.p>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 text-left"
            >
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                {item.text}
              </p>

              {/* Name + Role */}
              <div className="text-center">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
