"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SoftwareMaintenance = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-gray-700 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Software & Application Maintenance
          </h2>
          <p>
            We offer 1st, 2nd and 3rd level maintenance and support services for any application in the enterprise. Depending on the engagement BeaverTek will help with monitoring and escalating or help troubleshoot simple to complex issues and provide workarounds and hot fixes to security audit and application enhancement.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>L1 Support:</strong> user guidance, standard issue fixing, monitor system data analysis, etc.</li>
            <li><strong>L2 Support:</strong> outsourced server administration, IT Infrastructure and environment support (issue detection and fixing), proactive monitoring systems setup, etc.</li>
            <li><strong>L3 Support:</strong> source code issue resolution, application code optimization, new functionality realization, etc.</li>
          </ul>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center lg:justify-end relative overflow-visible"
        >
          <div className="relative w-[320px] h-[400px] lg:w-[360px] lg:h-[460px] rounded-2xl shadow-2xl overflow-hidden animate-float">
            <Image
              src="/services/Software & Application Maintenance.jpg" // Replace with your image
              alt="Software & Application Maintenance"
              fill
              className="object-cover"
            />
          </div>

          {/* Optional secondary overlapping image */}
          <div className="absolute -right-10 -bottom-12 w-[220px] h-[300px] lg:w-[260px] lg:h-[340px] rounded-2xl shadow-xl overflow-hidden animate-float-fast z-20">
            <Image
              src="/services/softwaretool.jpg" // Replace with your secondary image
              alt="Maintenance Tools"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default SoftwareMaintenance;
