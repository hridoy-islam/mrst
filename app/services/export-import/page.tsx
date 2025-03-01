"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Package, ShieldCheck, TrendingUp, Truck } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function ExportImportServices() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          
        </div>
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <h1 className=" font-bold mb-6">Export & Import Services</h1>
            <p className="text-xl mb-8">Navigating Global Trade with Confidence</p>
            <p className="mb-8 opacity-90">
              MRST Consultancy provides comprehensive export and import solutions designed to streamline your
              international trade operations. We guide businesses through the complexities of cross-border commerce,
              ensuring compliance while maximizing efficiency.
            </p>
            <Button size="lg" className="group bg-secondary text-primary hover:bg-secondary/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Export Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center text-primary mb-16"
          >
            <h2 className="font-bold mb-4">Our Export Services</h2>
            <p className=" max-w-3xl mx-auto">
              Comprehensive solutions to help your business expand into international markets with confidence and
              compliance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Globe className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Market Entry Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Customized research and planning for new market penetration, helping you identify opportunities and
                    navigate challenges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Package className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Export Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Expert handling of certificates of origin, commercial invoices, and shipping documents to ensure
                    smooth customs clearance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <ShieldCheck className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Navigation of international trade laws, standards, and regulations to minimize risk and avoid costly
                    penalties.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Truck className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Logistics Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Strategic planning for cost-effective transportation and distribution, optimizing your supply chain
                    for international markets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Trade Finance Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Guidance on letters of credit, export financing, and risk mitigation strategies to protect your
                    business interests.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Import Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16 text-primary"
          >
            <h2 className="font-bold mb-4">Our Import Services</h2>
            <p className=" max-w-3xl mx-auto">
              Strategic import solutions that optimize your supply chain and ensure regulatory compliance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full  transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Globe className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Supplier Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sourcing reliable suppliers from global markets, with thorough vetting and quality assurance
                    processes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <ShieldCheck className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Import Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Management of customs clearance, duties, and import regulations to ensure smooth entry of goods into
                    your target market.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Package className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Quality Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Implementation of inspection protocols and quality assurance measures to ensure products meet your
                    standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Truck className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Supply Chain Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Optimization of procurement processes and inventory management to reduce costs and improve
                    efficiency.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Import Cost Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Strategic assessment to reduce landed costs and improve margins, identifying opportunities for
                    savings.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center text-primary mb-16"
          >
            <h2 className="font-bold mb-4">Industry Specializations</h2>
            <p className="text-gray-600">
              We offer specialized expertise across diverse sectors, tailoring our approach to meet the unique
              requirements of each industry.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Consumer goods and retail",
              "Industrial equipment and manufacturing",
              "Technology and electronics",
              "Food and agricultural products",
              "Healthcare and pharmaceutical products",
            ].map((industry, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="bg-primary rounded-lg p-6 h-full transition-all hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{industry}</h3>
                  <p className="text-gray-600">
                    Specialized solutions tailored to the unique challenges and opportunities in this sector, ensuring
                    compliance with industry-specific regulations.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 text-center bg-primary text-secondary p-16 "
          >
            <h3 className="mb-8  mx-auto px-10">
              With MRST Consultancy as your trade partner, you gain access to our extensive network of global
              connections and our deep understanding of international markets, positioning your business for sustainable
              growth in the global arena.
            </h3>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 ">Schedule a Consultation</Button>
          </motion.div>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className=" font-bold mb-6">Ready to Expand Your Global Reach?</h2>
            <p className=" mb-8">
              Let our experts guide you through the complexities of international trade and help your business thrive in
              global markets.
            </p>
            <Button size="lg" variant="outline" className="bg-secondary text-primary hover:bg-gray-100">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

