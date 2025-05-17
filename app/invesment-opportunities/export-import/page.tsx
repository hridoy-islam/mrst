"use client";
import Image from "next/image";
import type React from "react";

import { motion } from "framer-motion";
import {
  BarChart,
  Globe,
  ShieldCheck,
  Handshake,
  Layers,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

export default function ExportEmportPage() {
  const router = useRouter();
  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="relative bg-primary py-32">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/pattern.png"
            alt="Investment Partnership Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-start mt-8"
          >
            <h1 className="max-md:text-4xl font-extrabold mb-6 text-white">
              Driving Global Trade Through Seamless Export-Import Solutions
            </h1>
            <p className="mx-auto  text-lg text-gray-200">
              Our export-import services connect businesses to international
              markets with expert logistics, compliance, and global partnerships
              to ensure smooth, secure, and scalable cross-border operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-20 "
          >
            <motion.div
              variants={fadeIn}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-semibold text-primary mb-4">
                Our Trade Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive solutions for seamless global commerce
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {[
                {
                  icon: <Globe className="w-10 h-10 text-blue-600" />,
                  title: "International Product Sourcing",
                  description:
                    "Access to a global network for quality suppliers and manufacturers",
                  image: "/e1.jpg",
                },
                {
                  icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
                  title: "Customs & Compliance",
                  description:
                    "Handling of regulations and documentation with expert precision",
                  image: "/e2.jpg",
                },
                {
                  icon: <Handshake className="w-10 h-10 text-blue-600" />,
                  title: "B2B Matchmaking",
                  description:
                    "Connecting trusted buyers and suppliers worldwide",
                  image: "/e3.jpg",
                },
                {
                  icon: <Layers className="w-10 h-10 text-blue-600" />,
                  title: "Trade Finance Solutions",
                  description:
                    "Offering financial instruments to ease global transactions",
                  image: "/e4.jpg",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="border border-primary rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  {/* Image Section */}
                  <div className="w-full h-[250px] relative mb-5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>

                  {/* Icon + Title */}
                  <div className="flex flex-row items-center gap-2 mb-2">
                    <div className="text-primary">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investor Benefits Section */}
      <section
        className="py-28 bg-cover bg-center relative"
        style={{ backgroundImage: "url(/pattern3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            <motion.div variants={fadeIn} className="lg:w-1/2">
              <Image
                src="/realestate.jpg"
                alt="Global trade benefits"
                width={650}
                height={420}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div variants={fadeIn} className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Investor Benefits
                </h2>
                <ul className="space-y-6">
                  {[
                    "Fast ROI from global transactions",
                    "Shared-profit trade opportunities",
                    "Reduced entry risk via experienced logistics partners",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <BarChart className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <p className="text-white text-lg">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="group bg-white text-primary">
                Partner With Us
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/e1.jpg"
              alt="export"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Expand Your <span className="text-primary">Global</span>{" "}
              Reach?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Maximize your online potential. Our expert services optimize every
              click into a loyal customer, driving business growth.
            </p>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105"
              onClick={navigateToContact}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
