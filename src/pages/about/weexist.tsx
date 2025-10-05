"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WeExist() {
useEffect(() => {
AOS.init({ duration: 1200, once: true });
}, []);

const imageVariants: Variants = {
hidden: { opacity: 0, y: 40 },
visible: (custom) => ({
opacity: 1,
y: 0,
transition: {
delay: custom * 0.3,
duration: 0.8,
ease: "easeOut",
},
}),
};

return ( <section className="relative px-6 "> <div className="max-w-7xl mx-auto mt-8 grid md:grid-cols-2 gap-12 items-center">
{/* Left Side */}
<motion.div
data-aos="fade-right"
className="space-y-6 text-gray-700 text-lg leading-relaxed"
>
{/* Title */}
<motion.h2
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-3xl md:text-4xl text-gray-950 font-bold"
> 
We Exist to Serve Our Clients
</motion.h2>


      {/* Paragraphs */}
      <p>
        At BeaverTek, our purpose is simple—but powerful. We believe we have
        a responsibility to deliver the right solutions that are robust,
        scalable, and built to last. Everything we do is driven by our
        commitment to quality, integrity, and outcomes that matter.
      </p>
      <p>
        From our clients to our partners and employees, our focus is
        unwavering. Delivering excellence, consistently. When our clients
        succeed, we succeed. That’s the BeaverTek way.
      </p>
    </motion.div>

    {/* Right Side (Main + Small Overlay Image) */}
    <div
      data-aos="fade-left"
      className="relative flex justify-center items-center w-full md:w-4/5 mx-auto"
    >
      {/* Main Image */}
      <div className="rounded-3xl overflow-hidden shadow-2xl w-full h-[250px] sm:h-[320px] lg:h-[380px]">
        <Image
          src="/home/Data team.jpg"
          alt="Main Team"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Overlay Image */}
      <div className="absolute bottom-[-30px] left-6 w-32 h-24 sm:w-40 sm:h-28 lg:w-48 lg:h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white animate-bounce bg-white">
        <Image
          src="/home/Data team.jpg"
          alt="Overlay"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


);
}
