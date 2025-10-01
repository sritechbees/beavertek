// app/open-layer/page.tsx (Next.js 13+ with App Router)
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OpenLayer() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <Image
            src="/product/Digital interface with hand and icons.jpg" // Replace with actual image path
            alt="Digital interface with hand and icons"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
            Smart IT Solutions. Exceptional Digital Experiences. Proven Business Value.
          </h1>

          <h2 className="text-2xl font-semibold text-gray-700">Open Layer</h2>

          <ul className="space-y-4 text-lg text-gray-600">
            <li>
              A positive experience with an application builds loyalty, enhances your company’s reputation and makes your team happier and more productive.
            </li>
            <li>
              At BeaverTek we specialize in applications that build and transform relationships between people and technology. We deliver applications that empower employees and that engage customers, through a relentless focus on user experience and innovation.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
