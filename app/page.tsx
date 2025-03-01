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


export default function page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <GlobalReach />
      <Testimonials />
      <Industries />
      <Methodology />
      {/* <Insights /> */}
      
    </main>
  );
}
