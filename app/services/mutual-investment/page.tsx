"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Building,
  Globe,
  LineChart,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function MutualInvestmentServices() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/pattern.png"
            alt="Investment Partnership Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-7xl "
          >
            <h1 className=" font-bold mb-6">
              Mutual Investment Services
            </h1>
            <h3 className=" mb-8">
              Building Cross-Border Investment Partnerships
            </h3>
            <p className="mb-8 opacity-90 ">
              MRST Consultancy facilitates strategic investment opportunities
              that connect capital with promising ventures across international
              borders. Our investment consultancy services are designed to
              create mutually beneficial partnerships that drive growth and
              deliver returns.
            </p>
            <Button
              size="lg"
              className="group bg-secondary hover:bg-secondary/90 text-primary"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Investment Advisory Services */}
      <section className="py-20 text-primary ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className=" font-bold mb-4">Investment Advisory Services</h2>
            <p className=" max-w-3xl text-black mx-auto">
              Strategic guidance to optimize your investment decisions and
              maximize returns across international markets.
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
                  <LineChart className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Investment Strategy Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Customized investment approaches aligned with client
                    objectives, risk tolerance, and time horizons.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <BarChart className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Market Analysis and Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    In-depth evaluation of investment landscapes across target
                    markets, identifying trends and opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Building className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Opportunity Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Sourcing and vetting of high-potential investment
                    opportunities aligned with your strategic goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Due Diligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Comprehensive assessment of investment targets and risk
                    evaluation to protect your capital.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Users className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Deal Structuring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Strategic guidance on investment structures and negotiations
                    to optimize terms and protect interests.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Investors Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16 text-primary"
          >
            <h2 className="font-bold mb-4">For Investors</h2>
            <p className="max-w-3xl text-black mx-auto">
              Comprehensive services to help investors identify opportunities,
              mitigate risks, and optimize returns.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 "
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg border-2 border-primary">
                <CardHeader className="pb-3 text-primary">
                  <CardTitle>Portfolio Diversification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Access to international investment opportunities across
                    various sectors, reducing risk through strategic
                    diversification.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg  border-2 border-primary">
                <CardHeader className="pb-3 text-primary">
                  <CardTitle>Market Entry Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Strategic advice for entering emerging and established
                    markets, navigating local business environments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg  border-2 border-primary">
                <CardHeader className="pb-3 text-primary">
                  <CardTitle>Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Identification and mitigation of cross-border investment
                    risks, protecting your capital in foreign markets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg  border-2 border-primary">
                <CardHeader className="pb-3 text-primary">
                  <CardTitle>Compliance Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Navigation of regulatory requirements across multiple
                    jurisdictions, ensuring legal compliance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg  border-2 border-primary">
                <CardHeader className="pb-3 text-primary">
                  <CardTitle>Performance Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Ongoing assessment and reporting on investment performance,
                    with strategic adjustments as needed.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Investment Recipients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16 text-primary "
          >
            <h2 className="font-bold mb-4">For Investment Recipients</h2>
            <p className=" max-w-3xl mx-auto text-black">
              Strategic support for businesses seeking capital, from preparation
              to post-investment growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all bg-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Capital Acquisition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Access to international investor networks, connecting your
                    business with the right capital partners.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all bg-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Investment Readiness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Preparation of business plans and investment memoranda that
                    effectively communicate your value proposition.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all bg-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Valuation Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Expert assessment of business worth and growth potential,
                    ensuring fair valuation for investment discussions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all bg-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Strategic Partnership Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Identification of investors who bring value beyond capital,
                    including expertise, networks, and market access.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all bg-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Post-Investment Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="">
                    Ongoing guidance to maximize investment outcomes, supporting
                    growth and strategic development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-20 bg-primary ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Regional Focus</h2>
            <p className="text-lg text-gray-600">
              Leveraging our strategic position in Dubai, we specialize in
              facilitating investments between key global markets.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              "GCC countries and international markets",
              "Emerging Asian economies and global investors",
              "European expansion into MENA region",
              "North American capital deployment in high-growth international markets",
            ].map((region, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="bg-white rounded-lg p-6 h-full text-primary transition-all hover:shadow-md flex items-center">
                  <Globe className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                  <h3 className=" font-semibold">{region}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 text-center"
          >
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              MRST Consultancy brings together investors and opportunities with
              precision and care, creating lasting value through thoughtful
              cross-border investment partnerships.
            </p>
            <Button
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90"
            >
              Discuss Your Investment Needs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-primary relative bg-[url('/pattern.png')] bg-contain bg-center bg-repeat">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative max-w-3xl mx-auto text-center"
          >
            {/* Content */}
            <div className="relative z-10 bg-white/60 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Explore Investment Opportunities?
              </h2>
              <p className="text-xl mb-8">
                Let our experts connect you with the right investment partners
                and opportunities to achieve your financial goals.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-indigo-800 hover:bg-gray-100"
              >
                Schedule a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
