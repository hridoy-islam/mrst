"use client";
import Image from "next/image";
import type React from "react";

import { motion } from "framer-motion";
import {
  BarChart,
  Building,
  Globe,
  Layers,
  LineChart,
  Link2,
  Truck,
  Workflow,
  Briefcase,
  Cpu,
  Store,
  HeartPulse,
  Coffee,
  ArrowRight,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Industries from "@/components/industries";
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
      <section className="relative bg-primary  py-28">
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
            className="text-start"
          >
            <h1 className=" max-md:text-4xl font-bold mb-6">
              Driving Global Trade Through Seamless Export-Import Solutions{" "}
            </h1>
            <p className="  mx-auto mb-8">
              We specialize in providing efficient export-import services that
              connect businesses to international markets. From logistics and
              compliance to market access and global partnerships, our solutions
              ensure smooth, secure, and scalable cross-border trade operations.
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
                Our Trade Services
              </h2>
              <p className="text-muted-foreground">
                Comprehensive solutions for seamless cross-border commerce
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <Globe className="w-8 h-8 text-blue-600" />,
                  title: "International Product Sourcing",
                  description:
                    "Global network to find quality suppliers and manufacturers",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                  title: "Customs & Compliance",
                  description:
                    "Expert handling of regulations and documentation",
                },
                {
                  icon: <Handshake className="w-8 h-8 text-blue-600" />,
                  title: "B2B Matchmaking",
                  description:
                    "Connecting buyers with trusted suppliers worldwide",
                },
                {
                  icon: <Layers className="w-8 h-8 text-blue-600" />,
                  title: "Trade Finance Solutions",
                  description:
                    "Financial instruments to facilitate global transactions",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="border  border-primary rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investor Benefits Section */}
       <section
      className="py-20 bg-blue-50 bg-cover bg-center relative"
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
              src="/realestate.jpg"
              alt="Global trade benefits"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </motion.div>

          <motion.div variants={fadeIn} className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
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
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <BarChart className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-white">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="group bg-white text-primary">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-white max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">
              Ready to Expand Your Global Reach?
            </h2>
            <p className="text-black text-lg">
              Let our trade experts guide you through international market
              opportunities with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-primary text-blue-800 hover:bg-primary/90"
                onClick={navigateToContact}
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
