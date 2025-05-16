"use client";
import Image from "next/image";
import type React from "react";

import { motion } from "framer-motion";

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

export default function SoftwareDevelopementPage() {
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
            <h1 className="max-md:text-4xl font-bold mb-6">
              Building Intelligent Software That Powers Your Digital Future
            </h1>
            <p className="mx-auto mb-8">
              From custom applications to enterprise-grade platforms, we deliver
              innovative software solutions tailored to your business goals.
              Harness cutting-edge technologies and expert development practices
              to accelerate your digital transformation journey.
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
