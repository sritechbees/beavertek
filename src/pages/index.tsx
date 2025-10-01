
import ExpertiseSection from "@/component/home/expertisesection";
import HeroSection from "@/component/home/homeherosection";
import SmartSection from "@/component/home/smartsection";
import UniqueSection from "@/component/home/uniquesection";
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
 <UniqueSection/>
 <ExpertiseSection/>
 <SmartSection/>
 <Footer/>
    </div>
  );
}
