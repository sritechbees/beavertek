

import Services from "@/component/common/services";
import HeroSection from "@/component/home/homeherosection";


import WhoWeAre from "@/component/home/whoweare";
import Footer from "@/component/layout/footer";
import Header from "@/component/layout/header";
import Head from "next/head";
import React from "react";
export default function Home() {
  return (
   
    <div>
     <Head>
      <title>Beavertek</title>
    </Head>  
 <Header/>
 <HeroSection/>
 <WhoWeAre/>
 
 <Footer/>
    </div>
  );
}
