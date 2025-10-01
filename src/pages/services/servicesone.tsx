"use client";

import Image from "next/image";

export default function Servicesone() {
  return (
    <section className="bg-gradient-to-br from-teal-900 via-slate-800 to-blue-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase text-teal-300 tracking-widest mb-2">
            Managed IT Services
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Smart IT Solutions. Exceptional Digital Experiences. Proven Business Value.
          </h1>
          <h2 className="text-xl text-teal-400 font-semibold mb-6">
            Advance Analytics & BI
          </h2>
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

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/services/Advance Analytics.jpg" // Replace with your actual image path
            alt="Analytics & BI"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
