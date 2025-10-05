"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const menuLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/whychoosebeavertek" },
  { name: "Customers", href: "/customers/customerherosection" },
  { name: "Services", href: "/services/servicesherosection" },
  { name: "Products", href: "/products/productherosection" },
  { name: "Contact", href: "/contact/contactherosection" },
];

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-50 overflow-hidden">
      
      {/* Animated Background Circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 30, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-28 -left-28 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{ x: [-20, 10, -20], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-blue-400/30 rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{ x: [0, 20, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute w-72 h-72 bg-sky-300 opacity-40 rounded-full top-10 left-5 z-0"
        />
        <motion.div
          animate={{ x: [-15, 15, -15], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-52 h-52 bg-cyan-200 opacity-50 rounded-full bottom-10 right-10 z-0"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        
        {/* Section 1 - Logo */}
        <Link href="/">
          <div data-aos="fade-up" className="flex flex-col items-center mt-16">
            <div className="w-28 h-28 relative mb-4">
              <Image
                src="/home/logo.svg"
                alt="Beaver HealthAI Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Link>

        {/* Section 2 - Navigation Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-cyan-400">Navigation</h3>
          <ul className="space-y-3">
            {menuLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-blue-500 text-sm dark:hover:text-cyan-300 hover:translate-x-1 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 - Follow Us */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-cyan-400">Follow Us</h3>
          <div className="flex space-x-6 text-xl">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="hover:text-blue-500 dark:hover:text-cyan-300 hover:scale-110 transition-transform duration-300"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 4 - Contact */}
        <div data-aos="fade-up" data-aos-delay="450">
          <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-cyan-400">Contact</h3>
          <p className="text-sm mb-2">
            Email:{" "}
            <a href="mailto:info@beavertek.com" className="text-blue-500 dark:text-cyan-300 hover:underline">
              info@beavertek.com
            </a>
          </p>
          <p className="text-sm mb-2">Phone (USA): +1.949.885.6193</p>
          <p className="text-sm mb-2">Phone (India): +91 9962092583</p>
          <p className="text-sm">Irvine, CA & India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white dark:border-gray-700 py-4 text-center text-sm text-gray-700 dark:text-white">
        © {new Date().getFullYear()} <Link href="/"> <span className="font-bold">Beavertek</span>{" "}
  <span className="text-blue-600 dark:text-cyan-400">
    INNOVATIVE TECHNOLOGIES
  </span>{" "}</Link>
  . All Rights Reserved.
  </div>
    </footer>
  );
}
