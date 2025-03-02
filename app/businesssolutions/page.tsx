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

// Animation variants
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

const ServiceCard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => (
  <motion.div
    variants={fadeIn}
    className="bg-primary rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
  >
    <div className="flex items-center flex-row mb-4">
      <div className="bg-white p-3 rounded-full mr-4">{icon}</div>
      <h3 className=" font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2 text-secondary">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-secondary mr-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const IndustryCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    variants={fadeIn}
    className="flex flex-col items-center text-center  p-4"
  >
    <div className="bg-secondary/40 p-4 rounded-full mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

export default function BusinessSolutions() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="  font-bold mb-6">
              Comprehensive Solutions for Global Business Challenges
            </h1>
            <p className=" max-w-3xl mx-auto mb-8">
              MRST Consultancy offers integrated business solutions designed to
              address the complex challenges of international operations.
            </p>

            <Button
              size="lg"
              className="group bg-secondary text-primary hover:bg-secondary/90"
            >
              Discover Our Approach
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16 text-primary"
          >
            <h2 className="font-bold mb-4">Our Business Solutions</h2>
            <p className="text-black max-w-3xl mx-auto">
              Our tailored approaches combine strategic insight with practical
              implementation to deliver measurable results for your business.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ServiceCard
              icon={<Globe className="h-6 w-6 text-primary" />}
              title="International Market Entry"
              items={[
                "Market Assessment",
                "Entry Strategy Development",
                "Partner Identification",
                "Localization Support",
                "Regulatory Navigation",
              ]}
            />

            <ServiceCard
              icon={<Truck className="h-6 w-6 text-primary" />}
              title="Supply Chain Optimization"
              items={[
                "End-to-End Analysis",
                "Risk Mitigation",
                "Logistics Restructuring",
                "Supplier Management",
                "Technology Integration",
              ]}
            />

            <ServiceCard
              icon={<Workflow className="h-6 w-6 text-primary" />}
              title="Business Process Outsourcing"
              items={[
                "Trade Documentation",
                "Market Research",
                "Compliance Monitoring",
                "Virtual Representation",
                "Back-Office Support",
              ]}
            />

            <ServiceCard
              icon={<Link2 className="h-6 w-6 text-primary" />}
              title="Cross-Border Partnerships"
              items={[
                "Strategic Alliance Formation",
                "Joint Venture Structuring",
                "Technology Transfer",
                "Licensing Arrangements",
                "Distribution Networks",
              ]}
            />

            <ServiceCard
              icon={<Layers className="h-6 w-6 text-primary" />}
              title="Digital Transformation"
              items={[
                "E-Commerce Enablement",
                "Global Digital Marketing",
                "International Payment Solutions",
                "Cloud-Based Management",
                "Data Analytics",
              ]}
            />

            <ServiceCard
              icon={<BarChart className="h-6 w-6 text-primary" />}
              title="Financial Strategies"
              items={[
                "International Tax Planning",
                "Currency Risk Management",
                "Capital Sourcing",
                "Financial Modeling",
                "Investment Appraisal",
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}

      <Industries />

      {/* Approach Section */}
      <section className="py-20 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-black mb-6">
                Each business solution begins with a thorough understanding of
                your specific challenges and objectives. We then develop
                tailored strategies drawing on our multidisciplinary expertise
                and international network.
              </p>
              <p className="text-black mb-6">
                Implementation is conducted with close client collaboration,
                ensuring alignment with your organizational capabilities and
                goals.
              </p>
              <p className="text-black font-medium">
                MRST Consultancy's business solutions combine strategic vision
                with practical execution, helping your company overcome barriers
                to international success and achieve sustainable growth in
                global markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-xl p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Strategic Process</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Assessment</h4>
                      <p className="text-sm text-black">
                        Comprehensive analysis of your current situation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Strategy Development</h4>
                      <p className="text-sm text-black">
                        Creating tailored solutions for your specific needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Implementation</h4>
                      <p className="text-sm text-black">
                        Executing the plan with precision and adaptability
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Evaluation & Refinement</h4>
                      <p className="text-sm text-black">
                        Continuous improvement based on results
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full z-0" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Global Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact MRST Consultancy today to discuss how our tailored
              solutions can help you overcome international business challenges.
            </p>

            <Button
              size="lg"
              className="group bg-secondary text-primary hover:bg-secondary/90"
            >
              <a href="/contact">Schedule a Consultation</a>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
