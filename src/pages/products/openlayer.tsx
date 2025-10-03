// app/open-layer/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import App_layout from '@/component/layout/app_layout';

export default function OpenLayer() {
  return (
    <App_layout>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 text-gray-800 px-6 py-16">
        <div className="relative text-center mb-16">
  <p className="uppercase text-sm tracking-widest text-blue-400 font-semibold mb-2">
    Product
  </p>

  {/* Stylish Centered Top Heading */}
  <motion.h1
    initial={{ opacity: 0, y: -20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent 
               bg-gradient-to-r from-blue-400 to-black drop-shadow-lg leading-snug"
  >
    Smart IT Solutions. <br className="hidden md:block" />
    Exceptional Digital Experiences. <br className="hidden md:block" />
    Proven Business Value.
  </motion.h1>

  {/* Decorative Underline */}
  <div className="mx-auto mt-4 w-24 h-1 bg-blue-500 rounded-full animate-pulse" />
</div>

        {/* 🔹 Two-Column Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-gray-700">Open Layer</h2>

            <ul className="space-y-4 text-lg text-gray-600">
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
            className="w-full flex justify-center"
          >
            <Image
              src="/product/Digital interface with hand and icons.jpg"
              alt="Digital interface with hand and icons"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </App_layout>
  );
}
