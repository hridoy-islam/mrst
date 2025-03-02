"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Building2, GraduationCap, LineChart, Ship } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GrowthProjections() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const sectors = [
    {
      title: "Real Estate Sector",
      description: "Targeting 20% annual growth through new property acquisitions and developments.",
      icon: <Building2 className="h-6 w-6" />,
      growth: "20%",
      direction: "up",
    },
    {
      title: "Export-Import Business",
      description:
        "Expanding trade operations into Asia, Africa, and Europe, with an expected 30% annual revenue increase.",
      icon: <Ship className="h-6 w-6" />,
      growth: "30%",
      direction: "up",
    },
    {
      title: "Student Consultancy Services",
      description: "Aiming to assist 100+ students annually in securing international education opportunities.",
      icon: <GraduationCap className="h-6 w-6" />,
      growth: "100+",
      direction: "students",
    },
    {
      title: "Investment Growth",
      description: "Projecting 15-25% annual capital growth, with diversified investments across multiple sectors.",
      icon: <LineChart className="h-6 w-6" />,
      growth: "15-25%",
      direction: "up",
    },
  ]

  return (
    <section className="bg-secondary/20 py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-3xl text-center mb-16"
        >
         
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
            MRST CONSULTANCY L.L.C-FZ Growth Projections
          </h2>
          <p className="text-black">Strategic growth initiatives across our core business sectors</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors duration-300"></div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">{sector.icon}</div>
                    <CardTitle className="text-xl text-primary">{sector.title}</CardTitle>
                  </div>
                  <Badge  className="font-bold">
                    {sector.growth}
                    {sector.direction === "up" && <ArrowUpRight className="ml-1 h-3 w-3" />}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{sector.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <Card className="bg-primary text-primary-foreground border-none">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                With a strong foundation, strategic partnerships, and a commitment to excellence, MRST CONSULTANCY
                L.L.C-FZ is positioned to become a global leader in its industries, ensuring long-term success for
                clients and stakeholders.
              </p>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  )
}

