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
  

  return (
    <div className="min-h-screen bg-primary">
      
      {/* Hero Section */}
      <section className="relative container py-16 bg-primary text-secondary">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/pattern.png"
            alt="Investment Partnership Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="  z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
           
          >
            <h1 className="text-secondary font-bold mb-4">MRST Consultancy</h1>
            <h3 className="text-secondary">
              Your trusted partner for global business connections and
              educational opportunities
            </h3>
          
          </motion.div>
        </div>
      </section>

      <DirectorSpeech />

      <Background />

      {/* Mission & Vision Section
      <AboutSection title="Our Mission & Vision" subtitle="Building bridges across borders" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="border-none shadow-lg bg-secondary">
            <CardContent className="pt-6 ">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className=" font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-primary">
                  To provide exceptional consultancy services that empower our clients to succeed in the global
                  marketplace while fostering sustainable international relationships and educational advancement.
                </p>
              </motion.div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-secondary">
            <CardContent className="pt-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-primary">
                  To become the leading consultancy firm in the MENA region, recognized for our excellence in connecting
                  businesses across borders and guiding students toward international educational opportunities.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </AboutSection> */}

      {/* Values Section */}
      {/* <AboutSection title="Our Values" subtitle="What drives us forward" className="bg-secondary text-primary ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          <motion.div variants={itemVariants}>
            <ValueCard
              title="Integrity"
              description="We uphold the highest ethical standards in all our dealings"
              icon="Shield"
            />
          </motion.div>
          <motion.div variants={itemVariants} >
            <ValueCard
              title="Excellence"
              description="We strive for exceptional quality in every service we provide"
              icon="Award"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ValueCard
              title="Innovation"
              description="We embrace creative solutions to complex international challenges"
              icon="Lightbulb"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ValueCard
              title="Cultural Sensitivity"
              description="We respect and navigate cultural differences with expertise"
              icon="Globe"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ValueCard
              title="Client Success"
              description="We measure our success through the achievements of our clients"
              icon="Trophy"
            />
          </motion.div>
        </motion.div>
      </AboutSection> */}

      {/* Team Section */}
      {/* <AboutSection
        title="Our Team"
        subtitle="Led by industry experts with extensive experience"
        className="bg-primary"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-secondary mb-8"
        >
          Our diverse team brings together specialized knowledge and a global perspective. Our consultants are
          multilingual professionals who understand the nuances of cross-border operations and maintain current
          knowledge of international regulations and market trends.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants}>
            <TeamMember name="Sarah Ahmed" position="Managing Director" image="/placeholder.svg?height=400&width=400" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TeamMember
              name="Mohammed Al-Farsi"
              position="Head of Business Development"
              image="/placeholder.svg?height=400&width=400"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TeamMember
              name="Elena Petrova"
              position="Education Consultant"
              image="/placeholder.svg?height=400&width=400"
            />
          </motion.div>
        </motion.div>
      </AboutSection> */}

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
                <strong>Email:</strong> info@mrstconsultancy.com
              </p>
              <p>
                <strong>Phone:</strong> +971 4 XXX XXXX
              </p>
            </div>
            <Button className="mt-6">Contact Us</Button>
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
    </div>
  );
}
