"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import {
  HandCoins,
  BarChart2,
  Layers,
  TrendingUp,
  Clock,
  ArrowRight,
  Users,
  Shield,
  Target,
  HeadphonesIcon,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import CTA from "@/components/CTA";

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

  const services = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      image: "/f1.jpg",
      title: "Managed Forex Trading",
      description:
        "Looking to invest but lack the time or expertise? Let our professionals trade on your behalf. With a disciplined risk management approach and a focus on consistent returns, we handle the complexities of the market while you watch your investment grow.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      image: "/f2.jpg",
      title: "Forex Consultancy & Guidance",
      description:
        "Prefer to trade on your own but need expert support? We offer personalized consultancy tailored to your experience level and goals. From market analysis to trade strategy development, our guidance empowers you to make informed decisions in real-time market conditions.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      text: "Expert Team with years of experience in the global Forex market",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      text: "Transparent and ethical trading practices",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      text: "Custom-tailored strategies to match your risk profile",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-primary" />,
      text: "Ongoing support and insights for both investors and self-directed traders",
    },
  ];

  const router = useRouter();
  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/pattern.png"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>

        

        <div className="container  relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-start text-white max"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Unlock Global Opportunities with Expert Forex Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Navigate the dynamic world of currency trading with confidence.
              Our Forex services combine strategic insights, real-time data, and
              expert guidance to help you maximize profits and minimize risk in
              the world's most liquid market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Forex Trading */}

      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Text Content */}
            <motion.div
              variants={fadeIn}
              className="flex-1 text-center lg:text-left lg:max-w-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                What is Forex Trading?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Forex (foreign exchange) is the world's largest and most liquid
                financial market, where currencies are traded 24 hours a day,
                five days a week. Traders capitalize on fluctuations in exchange
                rates to generate profit. Whether you're an individual investor
                or a corporate client, Forex offers a wide range of
                opportunities to diversify your investment portfolio.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeIn} className="flex-1">
              <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/forex.jpg"
                  alt="Forex Trading Overview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-background">
        <div className="container px-6 mx-auto">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg">
                At MRST Consultancy LLC FZ, we specialize in the dynamic and
                high-potential world of Forex trading. With years of experience
                navigating global currency markets, our team of expert traders
                is dedicated to helping investors grow their capital through
                strategic and responsible trading.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  className="border border-primary/20 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-full h-60 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Why Choose MRST Consultancy?
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you're looking to earn passive income through our
                managed accounts or enhance your own trading skills with
                professional support, MRST Consultancy LLC FZ is your trusted
                partner in the Forex market.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {whyChooseUs.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-start gap-4 p-5 rounded-lg border border-primary/15 bg-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 rounded-full bg-white text-primary">
                    {benefit.icon}
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-muted-foreground  font-medium">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Start Your Forex Journey?"
        description="Whether you're looking to earn passive income through our managed accounts or enhance your own trading skills with professional support, MRST Consultancy LLC FZ is your trusted partner in the Forex market."
        buttonText="Contact Us Today"
        imageSrc="/cta.png"
        onButtonClick={navigateToContact}
      />
    </div>
  );
}
