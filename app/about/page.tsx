"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AboutSection from "./components/about-section"
import TeamMember from "./components/team-member"
import ValueCard from "./components/value-card"

export default function AboutUs() {
  const storyRef = useRef<HTMLDivElement>(null)

  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Dubai Skyline"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-primary/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className=" font-bold  mb-4">MRST Consultancy</h1>
            <p className=" max-w-3xl mx-auto">
              Your trusted partner for global business connections and educational opportunities
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
            <Button
              onClick={scrollToStory}
              variant="outline"
              className="mt-8 bg-secondary text-primary backdrop-blur-sm border-white/40 "
            >
              Discover Our Story
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <div ref={storyRef}>
        <AboutSection
          title="Our Story"
          subtitle="Founded with a vision to facilitate global connections"
          className="bg-secondary text-primary"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary"
          >
            MRST Consultancy L.L.C-FZ has established itself as a trusted partner for businesses and students looking to
            navigate international opportunities. Operating from our headquarters at Meydan Grandstand in Dubai, we
            leverage the UAE&apos;s strategic position as a global business crossroads.
          </motion.p>
        </AboutSection>
      </div>

      {/* Mission & Vision Section */}
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
      </AboutSection>

      {/* Values Section */}
      <AboutSection title="Our Values" subtitle="What drives us forward" className="bg-secondary text-primary ">
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
      </AboutSection>

      {/* Team Section */}
      <AboutSection
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
      </AboutSection>

      {/* Location Section */}
      <AboutSection title="Our Location" subtitle="Visit us at Meydan Grandstand" className="bg-secondary text-primary">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary mb-4">
              Located in the prestigious Meydan Grandstand on the 6th floor, our modern offices reflect our commitment
              to professionalism and excellence.
            </p>
            <div className="flex flex-col gap-2 text-primary">
              <p>
                <strong>Address:</strong> 6th Floor, Meydan Grandstand, Dubai, UAE
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
              src="/placeholder.svg?height=600&width=800"
              alt="Meydan Grandstand"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </AboutSection>
    </div>
  )
}

