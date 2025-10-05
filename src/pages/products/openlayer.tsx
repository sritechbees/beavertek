// app/open-layer/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import App_layout from '@/component/layout/app_layout';

export default function OpenLayer() {
  return (
    <App_layout>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 text-gray-900 px-6 py-16">

        {/* 🔹 Top Section */}
        <div className="relative text-center mb-16">
          <p className="uppercase text-sm tracking-widest text-blue-500 font-semibold mb-2">
            Product
          </p>

          <motion.h1
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-500 to-black drop-shadow-lg leading-snug"
          >
            Smart IT Solutions. <br className="hidden md:block" />
            Exceptional Digital Experiences. <br className="hidden md:block" />
            Proven Business Value.
          </motion.h1>

          <div className="mx-auto mt-4 w-24 h-1 bg-blue-500 rounded-full animate-pulse" />
        </div>

        {/* 🔹 Two-Column Layout */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6 text-left"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Open Layer
            </h2>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base sm:text-md leading-relaxed">
              <li>
                A positive experience with an application builds loyalty, enhances your
                company’s reputation and makes your team happier and more productive.
              </li>
              <li>
                At BeaverTek we specialize in applications that build and transform
                relationships between people and technology. We deliver applications that
                empower employees and that engage customers, through a relentless focus on
                user experience and innovation.
              </li>
            </ul>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl overflow-hidden animate-float">
              <Image
                src="/product/Digital interface with hand and icons.jpg"
                alt="Digital interface with hand and icons"
                width={600}
                height={600}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </App_layout>
  );
}
