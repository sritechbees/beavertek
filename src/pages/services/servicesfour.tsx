"use client";

import Image from "next/image";

export default function Servicesfour() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-teal-800 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="opacity-0 animate-fade-in animation-delay-200">
          <Image
            src="/services/Maintenance & Support.jpg" // Replace with your actual image path
            alt="Maintenance & Support Team"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="opacity-0 animate-slide-up animation-delay-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Maintenance & Support
          </h1>
          <ul className="space-y-4 text-slate-200 text-base leading-relaxed mb-8 list-disc list-inside">
            <li>
              A positive experience with an application builds loyalty, enhances your company’s reputation and makes your team happier and more productive.
            </li>
            <li>
              At BeaverTek, we specialize in applications that build and transform relationships between people and technology. We deliver applications that empower employees and that engage customers, through a relentless focus on design and user experience.
            </li>
          </ul>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Explore More →
          </button>
        </div>
      </div>

      {/* Scoped Tailwind-style animations */}
      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
