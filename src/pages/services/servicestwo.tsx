"use client";

import Image from "next/image";

export default function Servicestwo() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-slate-800 to-blue-900 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="opacity-0 animate-fade-in-slow animation-delay-200">
          <Image
            src="/SERVICES/Application Development.jpg" // Replace with your actual image path
            alt="Collaborative Workspace"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="opacity-0 animate-slide-up animation-delay-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Application Development
          </h1>
          <ul className="space-y-4 text-slate-200 text-base leading-relaxed mb-8 list-disc list-inside">
            <li>
              At the moment many businesses want to develop and manage applications themselves, thus minimizing the dependency on outside IT teams.
            </li>
            <li>
              At BeaverTek, Inc. we help companies launch and manage all connected smart applications, which in turn provides greater user experience, while reducing cost for Application Development.
            </li>
          </ul>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Explore More →
          </button>
        </div>
      </div>

      {/* Tailwind animation styles */}
      <style jsx>{`
        .animate-fade-in-slow {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
      `}</style>
    </section>
  );
}
