"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DatabaseManagement = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-teal-50 via-white to-teal-100 py-24 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-teal-400/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-gray-700 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Database Management Services
          </h2>
          <p>
            We believe a reliable and high-performance Database is one of the key elements in ensuring that mission-critical applications are up and running and IT Services are accessible to perform desired business tasks. Maintenance and Support Services Engineers at BeaverTek work hard to keep databases accessible round the clock.
          </p>
          <p>
            BeaverTek Database Infrastructure Maintenance and Support Services includes proactive monitoring, upgrades, builds, performance optimization, disaster recovery, and security. We provide expert database management services for Oracle, SQL Server, MySQL, Netezza, and Teradata environments with an expert level of service, support, and affordability.
          </p>
          <p>
            By combining strong tools and processes, we can build models that are cost-effective and provide access to our DBA experts in the delivery of our database management services.
          </p>
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
              src="/services/Database Management Services.jpg" // Replace with your image
              alt="Database Management Services"
              fill
              className="object-cover"
            />
          </div>

          {/* Optional Secondary Overlapping Image */}
          <div className="absolute -right-10 -bottom-12 w-[220px] h-[300px] lg:w-[260px] lg:h-[340px] rounded-2xl shadow-xl overflow-hidden animate-float-fast z-20">
            <Image
              src="/services/Database Management Services.jpg" // Replace with your secondary image
              alt="Database Management"
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

export default DatabaseManagement;
