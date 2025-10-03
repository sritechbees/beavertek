"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu links
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 shadow-lg"
            : "bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 shadow-md"
        }`}
      >
        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Image
                src="/home/logo.svg"
                alt="Beavertek Logo"
                width={45}
                height={45}
                className="rounded-full"
                priority
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Beavertek</h1>
                <p className="text-xs font-medium text-blue-700 -mt-1">
                  INNOVATIVE TECHNOLOGIES
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8 font-semibold">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition ${
                      pathname === link.href
                        ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                        : "text-gray-800 hover:text-blue-700"
                    }`}
                  >
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
          <div className="md:hidden bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 shadow-lg rounded-b-2xl z-50">
            <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-800 font-medium">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block ${
                      pathname === link.href
                        ? "text-blue-700 font-semibold"
                        : "hover:text-blue-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding under header */}
      <div className="pt-19" />
    </>
  );
};

export default Header;
