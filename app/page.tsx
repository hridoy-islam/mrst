"use client";


import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import GlobalReach from "@/components/global-reach"
import Testimonials from "@/components/testimonials"
import Industries from "@/components/industries"
import Methodology from "@/components/methodology"
import Insights from "@/components/insights"
import ContactCTA from "@/components/contact-cta"
import GrowthProjections from "@/components/global-reach";
import { WhatWeDo } from "@/components/what-we-do";
import FuturePlans from "@/components/future-plans";
import HowWeDo from "@/components/how-we-do";


export default function page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      {/* <WhyChooseUs /> */}
      {/* <WhatWeDo/> */}
      <FuturePlans/>
      <GrowthProjections />
      {/* <Methodology /> */}

      <HowWeDo />
      <Industries />
      <Testimonials />
      {/* <Insights /> */}
      
    </main>
  );
}
