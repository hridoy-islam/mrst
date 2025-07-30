"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AboutSection from "./components/about-section";
import TeamMember from "./components/team-member";
import ValueCard from "./components/value-card";
import DirectorSpeech from "./components/director-speech";
import { Background } from "./components/background";
import HowWeDo from "@/components/how-we-do";
import Industries from "@/components/industries";
import Services from "@/components/services";
import FuturePlans from "@/components/future-plans";
import GrowthProjections from "@/components/global-reach";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
const router = useRouter();
  return (
    <div className="min-h-screen bg-primary ">
      {/* Hero Section */}

      <section className="relative bg-primary text-secondary">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/pattern.png"
            alt="Investment Partnership Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container py-16  relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-4xl ">
            <h1 className="text-secondary font-bold mb-4">MRST Consultancy</h1>
            <h3 className="text-secondary font-normal ">
              Your trusted partner for global business connections and
              educational opportunities
            </h3>
          </motion.div>
        </div>
      </section>

      <DirectorSpeech />

      <Background />

      {/* Location Section */}
      <AboutSection
        title="Our Location"
        subtitle="Visit us at Meydan Grandstand"
        className="bg-secondary text-primary"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-black mb-4">
              Located in the prestigious Meydan Grandstand on the 6th floor, our
              modern offices reflect our commitment to professionalism and
              excellence.
            </p>
            <div className="flex flex-col gap-2 text-black">
              <p>
                <strong>Address:</strong> 6th Floor, Meydan Grandstand, Dubai,
                UAE
              </p>
              <p>
                <strong>Email:</strong> mijan@smsonline.org.uk
              </p>
              <p>
                <strong>Phone:</strong> +9714 563204619
              </p>
            </div>
            <Button className="mt-6" onClick={() => router.push("/contact")}>Contact Us</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/Meydan.jpg"
              alt="Meydan Grandstand"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </AboutSection>

      {/* <Services /> */}
      <GrowthProjections />
      <FuturePlans />
      <Industries />
      <HowWeDo />
    </div>
  );
}
