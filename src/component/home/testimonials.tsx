"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Brent",
      role: "Senior Vice President",
      text: `I wanted to take a moment to personally thank you for the exceptional work you have done on Tablu Reporting. You're dedication, attention to details, and willingness to go beyond expectations truly stood out.`
    },
    {
      name: "Coraez",
      role: "CEO",
      text: `BeaverTek efforts not only contributed to the success of the project but also set a high standard for excellence with the team. It's rare to see such initiatives and commitment, and I want you to know that it has not gone unnoticed.`
    },
    {
      name: "Ravi",
      role: "CEO",
      text: `I just wanted to give a big shoutout for the incredible work BeaverTek did on campus solutions. BeaverTek didn't just check the boxes – they went all in, and it made a huge difference.`
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-6 lg:px-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
        >
          Real Stories from Real Customers
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 text-lg mb-12"
        >
          Get inspired by these stories.
        </motion.p>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-indigo-300/30 transition-transform hover:-translate-y-2"
            >
              <p className="text-gray-700 mb-6">“{item.text}”</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  {item.name[0]}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
