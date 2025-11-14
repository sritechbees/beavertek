"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";

const Form1 = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    // Auto-show form again after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <App_layout>
      <div className="bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 overflow-hidden">
        <div className="mx-auto max-w-7xl py-20 px-6 lg:px-12 
        flex flex-col lg:flex-row lg:justify-between gap-12">

          {/* LEFT SIDE */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/2 flex flex-col h-full"
          >
            {submitted ? (
              /* SUCCESS CARD */
              <div className="bg-white shadow-2xl p-10 rounded-2xl text-center h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">
                  Thank You for Contacting Us!
                </h2>

                <p className="text-gray-700 text-lg mb-4">
                  We have received your message. We will get back to you shortly.
                </p>

                <Image
                  src="/home/msg.jpg"
                  alt="Success"
                  width={150}
                  height={150}
                  className="mx-auto mt-4 rounded-full"
                />
              </div>
            ) : (
              <>
                {/* CONTACT FORM */}
                <div className="bg-blue-50 p-8 rounded-2xl shadow-2xl h-full">
                  <h3 className="text-blue-500 text-[27px] pb-4 text-center font-bold font-playfair">
                    Let&apos;s Work Together
                  </h3>

                  <h1 className="text-3xl font-medium text-gray-800 text-center font-playfair">
                    Contact Us
                  </h1>

                  <p className="mt-3 text-gray-600 text-center font-playfair">
                    Email us at <strong>info@beavertek.com</strong> or message us here:
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8">
                    <div className="grid gap-6 sm:grid-cols-2">

                      {/* First Name */}
                      <div className="relative">
                        <input
                          type="text"
                          name="firstname"
                          className="peer block w-full border-b border-gray-400 bg-transparent 
                          py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                          placeholder=" "
                          required
                        />
                        <label className="absolute top-3 text-sm text-gray-500 duration-300 
                        -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                          First Name
                        </label>
                      </div>

                      {/* Last Name */}
                      <div className="relative">
                        <input
                          type="text"
                          name="lastname"
                          className="peer block w-full border-b border-gray-400 bg-transparent 
                          py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                          placeholder=" "
                          required
                        />
                        <label className="absolute top-3 text-sm text-gray-500 duration-300 
                        -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                          Last Name
                        </label>
                      </div>

                      {/* Company */}
                      <div className="relative">
                        <input
                          type="text"
                          name="company"
                          className="peer block w-full border-b border-gray-400 bg-transparent 
                          py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                          placeholder=" "
                        />
                        <label className="absolute top-3 text-sm text-gray-500 duration-300 
                        -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                          Company Name
                        </label>
                      </div>

                      {/* Services */}
                      <div className="relative">
                        <select
                          name="services"
                          className="block w-full border-b border-gray-400 bg-transparent 
                          py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                          required
                        >
                          <option value="">Select a Service</option>
                          <option value="analytics">Advance Analytics & BI</option>
                          <option value="development">Application Development</option>
                          <option value="qa">Quality Assurance</option>
                          <option value="support">Maintenance & Support</option>
                        </select>
                      </div>

                      {/* Contact Number */}
                      <div className="relative">
                        <input
                          type="text"
                          name="contact"
                          className="peer block w-full border-b border-gray-400 bg-transparent 
                          py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                          placeholder=" "
                          required
                        />
                        <label className="absolute top-3 text-sm text-gray-500 duration-300 
                        -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                          Contact Number
                        </label>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          className="peer block w-full border-b border-gray-400 bg-transparent 
                          py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                          placeholder=" "
                          required
                        />
                        <label className="absolute top-3 text-sm text-gray-500 duration-300 
                        -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                          Your Email
                        </label>
                      </div>

                      {/* Message */}
                      <div className="relative col-span-2">
                        <textarea
                          name="message"
                          rows={4}
                          className="peer block w-full border-b border-gray-400 bg-transparent 
                          py-2.5 text-sm text-gray-900 focus:border-blue-400 focus:outline-none font-playfair"
                          placeholder=" "
                          required
                        />
                        <label className="absolute top-3 text-sm text-gray-500 duration-300 
                        -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 
                        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                          Your Message
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 flex items-center gap-2 rounded-lg bg-blue-500 
                      text-white px-6 py-2 hover:bg-blue-800 transition-all duration-300 mx-auto"
                    >
                      Send Message
                      <Image src="/home/paper.svg" width={24} height={24} alt="Send Icon" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-1/2 flex justify-center h-full"
          >
            <div className="bg-blue-50 py-9 border-2 border-blue-500 rounded-2xl p-8 
            max-w-md w-full shadow-xl h-full flex flex-col justify-center">
              <div className="flex justify-center mb-4">
                <Image src="/home/logo.svg" width={95} height={95} alt="Beavertek Logo" />
              </div>

              <h2 className="text-center text-2xl font-bold text-blue-500 font-playfair mb-6 tracking-wide">
                Beavertek
              </h2>

              <ul className="space-y-6 font-playfair">
                <li className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
                  <span className="text-blue-500 font-semibold text-sm min-w-[90px]">Phone:</span>
                  <span className="text-gray-700 text-sm">+1 (949) 885-6193</span>
                </li>

                <li className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
                  <span className="text-blue-500 font-semibold text-sm min-w-[90px]">Instagram:</span>
                  <span className="text-gray-700 text-sm">@beavertekinc</span>
                </li>

                <li className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
                  <span className="text-blue-500 font-semibold text-sm min-w-[90px]">X (Twitter):</span>
                  <span className="text-gray-700 text-sm">@beavertekinc</span>
                </li>

                <li className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
                  <span className="text-blue-500 font-semibold text-sm min-w-[90px]">Website:</span>
                  <Link href={"https://beavertek.com/"}>
                    <span className="text-gray-700 text-sm">beavertek.com</span>
                  </Link>
                </li>

                <li className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
                  <span className="text-blue-500 font-semibold text-sm min-w-[90px]">Email:</span>
                  <span className="text-gray-700 text-sm">info@beavertek.com</span>
                </li>

                <li className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
                  <span className="text-blue-500 font-semibold text-sm min-w-[90px]">Address:</span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    Irvine, CA 92620, USA <br />
                    Chennai, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </App_layout>
  );
};

export default Form1;
