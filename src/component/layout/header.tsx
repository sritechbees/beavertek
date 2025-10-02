"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Detect scroll to add shadow / background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu links configuration (used for both desktop & mobile)
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/whychoosebeavertek" },
    { name: "Customers", href: "/customers/customerherosection" },
    { name: "Services", href: "/services/servicesherosection" },
    { name: "Products", href: "/products/productherosection" },
    { name: "Contact", href: "/contact/contactherosection" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 overflow-hidden ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-gradient-to-br from-emerald-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        }`}
      >
        {/* Background Glow Circles */}
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-emerald-400/30 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo + Text */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Image
                src="/home/logo.png"
                alt="Beavertek Logo"
                width={45}
                height={45}
                className="rounded-full"
                priority
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Beavertek</h1>
                <p className="text-xs text-green-700 -mt-1">
                  INNOVATIVE TECHNOLOGIES
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8 text-gray-700 font-medium">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-green-700 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-2xl z-50">
            <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-700 font-medium">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Add padding-top equal to header height to avoid hiding content */}
      <div className="pt-20" />
    </>
  );
};

export default Header;
