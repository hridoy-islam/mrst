"use client"

import { motion } from "framer-motion"
import {
  MonitorIcon,
  FactoryIcon,
  ShoppingBagIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  BuildingIcon,
  LandmarkIcon,
  LeafIcon,
} from "lucide-react"

export default function Industries() {
  const industries = [
    {
      icon: <MonitorIcon className="h-6 w-6" />,
      name: "Technology & Innovation",
    },
    {
      icon: <FactoryIcon className="h-6 w-6" />,
      name: "Manufacturing & Industrial",
    },
    {
      icon: <ShoppingBagIcon className="h-6 w-6" />,
      name: "Retail & Consumer Goods",
    },
    {
      icon: <GraduationCapIcon className="h-6 w-6" />,
      name: "Education & Training",
    },
    {
      icon: <HeartPulseIcon className="h-6 w-6" />,
      name: "Healthcare & Life Sciences",
    },
    {
      icon: <BuildingIcon className="h-6 w-6" />,
      name: "Real Estate & Construction",
    },
    {
      icon: <LandmarkIcon className="h-6 w-6" />,
      name: "Financial Services",
    },
    {
      icon: <LeafIcon className="h-6 w-6" />,
      name: "Agriculture & Food Processing",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section className="bg-primary/5 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-bold tracking-tight text-primary ">Industries We Serve</h2>
          <p className="mt-4 ">Our consultancy expertise spans diverse sectors</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {industry.icon}
              </div>
              <h3 className="mt-4 font-medium">{industry.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

