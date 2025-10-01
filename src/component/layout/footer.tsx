"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#02142b] to-[#023e8a] text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Section 1 - Logo/About */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400 hover:scale-105 transition-transform duration-300">
            Beaver HealthAI
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering healthcare with AI-driven solutions, global expertise, 
            and trusted innovations for a healthier tomorrow.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
          <ul className="space-y-3">
            {["About Us", "Our Product", "Services", "Contact"].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 - Follow Us */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Follow Us</h3>
          <div className="flex space-x-6 text-xl">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="hover:text-cyan-300 hover:scale-110 transition-transform duration-300"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 4 - Contact */}
        <div data-aos="fade-up" data-aos-delay="450">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h3>
          <p className="text-sm mb-2">
            Email: <a href="mailto:healthai@beavertek.com" className="text-cyan-300 hover:underline">healthai@beavertek.com</a>
          </p>
          <p className="text-sm mb-2">Phone (India): +91 94452 66583</p>
          <p className="text-sm mb-2">Phone (USA): +1 949-351-9624</p>
          <p className="text-sm">Irvine, CA & India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Beaver HealthAI. All Rights Reserved.
      </div>
    </footer>
  );
}
