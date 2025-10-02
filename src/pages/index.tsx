

import HeroSection from "@/component/home/homeherosection";
import TestimonialsSection from "@/component/home/testimonials";

import WhoWeAre from "@/component/home/whoweare";
import Footer from "@/component/layout/footer";
import Header from "@/component/layout/header";
import React from "react";
export default function Home() {
  return (
    <div>
      
 <Header/>
 <HeroSection/>
 <WhoWeAre/>
 <Footer/>
    </div>
  );
}
