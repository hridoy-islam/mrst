"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { HandCoins, BarChart2, Layers, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ForexPage() {


   
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const investmentOpportunities = [
    {
      icon: <HandCoins className="w-8 h-8 text-primary" />,
      image: "/f1.jpg", // Path to the image
      title: "Equity-Based Group Investments",
      description:
        "Join forces with other investors for diversified group equity-based investments in the Forex market.",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-primary" />,
      image: "/f2.jpg", // Path to the image
      title: "Asset-Backed Investment Vehicles",
      description: "Invest in secured and asset-backed Forex vehicles with lower risks.",
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      image: "/f3.jpg", // Path to the image
      title: "Return-on-Investment (ROI) Tracking Dashboard",
      description: "Monitor your investments with a user-friendly, real-time ROI tracking dashboard.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      image: "/f4.jpg", // Path to the image
      title: "Flexible Investment Entry Points",
      description:
        "Start your investment journey with flexible entry points, designed to accommodate your financial goals.",
    },
  ];

  const partnerBenefits = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      text: "Real-time tracking and transparency in Forex investments",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      text: "Expert risk assessment for safer investment strategies",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      text: "Diversification across Forex trading pairs and sectors",
    },
  ];

 const router = useRouter();
  const navigateToContact = () => {
    router.push("/contact");
  };


  return (
    <div className="bg-secondary">
      <section className="relative bg-primary  py-28">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/pattern.png"
            alt="Investment Partnership Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full container mt-8">
          <motion.div initial="hidden" animate="visible" className="text-start">
            <h1 className="max-md:text-4xl font-bold mb-6">
              Unlock Global Opportunities with Expert Forex Solutions
            </h1>
            <p className="mx-auto">
              Navigate the dynamic world of currency trading with confidence.
              Our Forex services combine strategic insights, real-time data, and
              expert guidance to help you maximize profits and minimize risk in
              the world’s most liquid market.
            </p>

            {/* <Button
                  size="lg"
                  className="group bg-secondary text-primary hover:bg-secondary/90"
                >
                  Discover Our Approach
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button> */}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary">
                What We Offer
              </h2>
              <p className="text-muted-foreground">
                Explore our diverse and strategic investment models to maximize returns in the Forex market.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {investmentOpportunities.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="border border-primary rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  {/* Image Section */}
                  <div className="w-full h-[250px] relative mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="text-primary">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section
        className="py-20 bg-gray-100 bg-cover bg-center relative"
        style={{ backgroundImage: "url(/pattern3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="lg:w-1/2">
              <Image
                src="/funding.jpg"
                alt="Partner Benefits"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </motion.div>

            <motion.div variants={fadeIn} className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Why Partner With Us
                </h2>
                <ul className="space-y-6">
                  {partnerBenefits.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <p className="text-white">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="lg" className="group bg-white text-primary hover:text-white">
                Explore Investment Models
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-700">
  <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-8">
    {/* Image Section */}
    <div className="w-full md:w-1/2">
      <img
        src="/f2.jpg"
        alt="Forex Investment"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Text Section */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="w-full md:w-1/2 text-black space-y-6"
    >
      <h2 className="text-3xl font-bold">
        Ready to Start <span className="text-primary">Investing in Forex</span>?
      </h2>
      <p className="text-lg ">
        Join our network of investors and take part in high-return Forex investments.
      </p>
      <p className="text-lg ">
        Contact us today to schedule a consultation and start your Forex investment journey.
      </p>
      <Button
        size="lg"
        className="group bg-primary text-black hover:bg-primary/90 px-6 py-3  font-semibold transition-transform hover:scale-105"
        onClick={navigateToContact}
      >
        Contact Us
      </Button>
    </motion.div>
  </div>
</section>

    </div>
  );
}
