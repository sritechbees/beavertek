
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-r from-[#f2f7ff] to-[#e8f0fb]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Text */}
        <div className="flex items-center space-x-3">
          <Image
            src="/home/logo.png" // 🔹 Replace with your logo path in public/
            alt="Beavertek Logo"
            width={45}
            height={45}
            className="rounded-full"
            priority
          />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Beavertek</h1>
            <p className="text-xs text-green-700 -mt-1">
                 {/* <p className="text-xs text-[#7fc991] -mt-1"></p> */}
              INNOVATIVE TECHNOLOGIES
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-green-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-700 transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/customers"
                className="hover:text-green-700 transition"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-green-700 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-green-700 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-700 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
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
        <div className="md:hidden bg-white shadow-lg rounded-b-2xl">
          <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-700 font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/customers" onClick={() => setMenuOpen(false)}>
                Customers
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
