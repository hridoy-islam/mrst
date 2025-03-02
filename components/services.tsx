"use client"

import { motion } from "framer-motion"
import { GlobeIcon, TrendingUpIcon, GraduationCapIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <GlobeIcon className="h-5 w-5" />,
      title: "Export & Import Consultancy",
      description:
        "Streamline your international trade operations with our comprehensive export and import solutions. From market entry strategies to regulatory compliance, we help you navigate global markets with confidence.",
    },
    {
      icon: <TrendingUpIcon className="h-5 w-5" />,
      title: "Mutual Investment",
      description:
        "Create valuable cross-border partnerships through our investment consultancy services. We connect capital with opportunity, ensuring mutually beneficial outcomes for investors and businesses alike.",
    },
    {
      icon: <GraduationCapIcon className="h-5 w-5" />,
      title: "Student Consultancy",
      description:
        "Transform your educational aspirations into reality with our expert guidance. We provide personalized support throughout your international education journey, from university selection to post-graduation planning.",
    },
  ]

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
    <section id="services" className="bg-secondary py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>
            <p className="mt-4 ">
              Comprehensive solutions tailored to your global business and educational needs
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none bg-secondary/5 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-row justify-start gap-2 items-center">
                  <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/80">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

