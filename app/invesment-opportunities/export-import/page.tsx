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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Industries from "@/components/industries";

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
    </div>
  );
}
