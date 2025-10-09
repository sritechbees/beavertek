"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";

const Form1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <App_layout>
    <div className="bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 overflow-hidden">
      <div className="mx-auto max-w-7xl py-20 px-6 lg:px-12 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
        
        {/* -------------------- Left Side: Contact Form -------------------- */}
        <div data-aos="fade-right" className="w-full lg:w-1/2">
          <div className="bg-blue-50 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-blue-500 text-[27px] pb-4 text-center font-bold font-playfair">
              Let&apos;s Work Together
            </h3>
            <h1 className="text-3xl font-medium text-gray-800 font-playfair text-center">
              Contact Us
            </h1>
            <p className="mt-3 text-gray-600 font-playfair text-center">
              Email us at <strong>info@beavertek.com</strong> or message us here:
            </p>

            <form action="https://<url>/submit" className="mt-8">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

              <div className="grid gap-6 sm:grid-cols-2">
                {/* First Name */}
                <div className="relative z-0">
                  <input
                    type="text"
                    name="firstname"
                    className="peer block w-full border-b border-gray-400 bg-transparent py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                    placeholder=" "
                  />
                  <label className="absolute top-3 font-playfair text-sm text-gray-500 duration-300 
                    -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 
                    peer-focus:scale-75 peer-focus:text-blue-500">
                    First Name
                  </label>
                </div>

                {/* Last Name */}
                <div className="relative z-0">
                  <input
                    type="text"
                    name="lastname"
                    className="peer block w-full border-b border-gray-400 bg-transparent py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                    placeholder=" "
                  />
                  <label className="absolute top-3 font-playfair text-sm text-gray-500 duration-300 
                    -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 
                    peer-focus:scale-75 peer-focus:text-blue-500">
                    Last Name
                  </label>
                </div>

                {/* Company Name */}
                <div className="relative z-0">
                  <input
                    type="text"
                    name="company"
                    className="peer block w-full border-b border-gray-400 bg-transparent py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                    placeholder=" "
                  />
                  <label className="absolute top-3 font-playfair text-sm text-gray-500 duration-300 
                    -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 
                    peer-focus:scale-75 peer-focus:text-blue-500">
                    Company Name
                  </label>
                </div>

                {/* Services Dropdown */}
                <div className="relative z-0">
                  <select
                    name="services"
                    className="block w-full border-b border-gray-400 bg-transparent py-2.5 
                      text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                  >
                    <option className="bg-gray-200" value="">
                      Select a Service
                    </option>
                    <option value="analytics">Advance Analytics & BI</option>
                    <option value="development">Application Development</option>
                    <option value="qa">Quality Assurance</option>
                    <option value="support">Maintenance & Support</option>
                  </select>
                </div>

                {/* Contact Number */}
                <div className="relative z-0">
                  <input
                    type="text"
                    name="contact"
                    className="peer block w-full border-b border-gray-400 bg-transparent py-2.5 
                      text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                    placeholder=" "
                  />
                  <label className="absolute top-3 font-playfair text-sm text-gray-500 duration-300 
                    -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 
                    peer-focus:scale-75 peer-focus:text-blue-500">
                    Contact Number
                  </label>
                </div>

                {/* Email */}
                <div className="relative z-0">
                  <input
                    type="email"
                    name="email"
                    className="peer block w-full border-b border-gray-400 bg-transparent py-2.5 
                      text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                    placeholder=" "
                  />
                  <label className="absolute top-3 font-playfair text-sm text-gray-500 duration-300 
                    -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 
                    peer-focus:scale-75 peer-focus:text-blue-500">
                    Your Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows={4}
                    className="peer block w-full border-b border-gray-400 bg-transparent py-2.5 
                      text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 font-playfair text-sm text-gray-500 duration-300 
                    -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 
                    peer-focus:scale-75 peer-focus:text-blue-500">
                    Your Message
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 flex font-playfair items-center gap-2 rounded-lg bg-blue-500 
                  text-white px-6 py-2 hover:bg-blue-800 transition-all duration-300 mx-auto"
              >
                Send Message
                <Image
                  src="/home/paper.svg"
                  width={24}
                  height={24}
                  alt="Send Icon"
                />
              </button>
            </form>
          </div>
        </div>

        {/* -------------------- Right Side: Company Info -------------------- */}
        <div data-aos="fade-left" className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-blue-50 py-9 border-2 border-blue-500 rounded-2xl p-8 max-w-md w-full shadow-xl">
            
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image src="/home/logo.svg" width={95} height={95} alt="Beavertek Logo" />
            </div>

            {/* Company Title */}
            <h2 className="text-center text-2xl font-bold text-blue-500 font-playfair mb-6 tracking-wide">
              Beavertek
            </h2>

            {/* Contact Details with Animation */}
            <ul className="space-y-6 font-playfair">
              {[
                { label: "Phone", value: "+1.949.885.6193" },
                { label: "Instagram", value: "@beavertek_ai" },
                { label: "Website", value: "beavertek.com" },
                { label: "Email", value: "info@beavertek.com" },
                { label: "Address", value: "Irvine, CA 92620, Chennai, India" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r 
                    from-blue-50 to-blue-100 shadow-md hover:shadow-lg hover:scale-105 
                    transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <span className="text-blue-500 font-semibold min-w-[90px]">
                    {item.label}:
                  </span>
                  <span className="text-gray-700">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
    </App_layout>
  );
};

export default Form1;
