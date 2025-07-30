"use client";
import Image from "next/image";
import type React from "react";

import { motion } from "framer-motion";
import {
  HandCoins,
  BarChart2,
  Handshake,
  Layers,
  Banknote,
  TrendingUp,
  Timer,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import CTA from "@/components/CTA";

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
  const router = useRouter();
  const navigateToContact = () => {
    router.push("/contact");
  };

  const fundingOptions = [
    {
      icon: <HandCoins className="w-8 h-8 text-green-600" />,
      image: "/b1.jpg",
      title: "Start-up Capital & Seed Investment",
      description:
        "Initial funding for entrepreneurs and early-stage companies.",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-green-600" />,
      image: "/b2.jpg",
      title: "Business Expansion Loans",
      description: "Fuel growth with customized lending options.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-600" />,
      image: "/b3.jpg",
      title: "Joint Venture Partnerships",
      description: "Collaborate to accelerate market entry and scaling.",
    },
    {
      icon: <Layers className="w-8 h-8 text-green-600" />,
      image: "/b4.jpg",
      title: "Debt/Equity Hybrid Models",
      description: "Flexible capital structures combining loans and ownership.",
    },
  ];

  const investorBenefits = [
    {
      icon: <Banknote className="w-6 h-6 text-white" />,
      text: "Fixed income from business loan interest",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      text: "Equity participation in high-growth companies",
    },
    {
      icon: <Timer className="w-6 h-6 text-white" />,
      text: "Exit plans with predefined ROI timelines",
    },
  ];

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
            className="text-start mt-8"
          >
            <h1 className="max-md:text-4xl font-bold mb-6">
              Empowering Ambitions with Strategic Business Funding Solutions
            </h1>
            <p className="mx-auto ">
              Unlock growth and stability with our expert business funding
              services. Whether you're launching a startup or scaling an
              established venture, we connect you with flexible financing
              options, expert guidance, and the resources you need to succeed in
              a competitive market.
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
      {/* Funding Options */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Funding Options
              </h2>
              <p className="text-muted-foreground">
                Choose from our strategic financial models to support your
                journey
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2  gap-6"
            >
              {fundingOptions.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="border border-primary rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  {/* Icon Section */}

                  {/* Image Section */}
                  <div className="w-full h-[250px] relative mb-5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className=" text-primary">{service.icon}</div>

                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investor Benefits */}
      <section
        className="py-20 bg-gray-100 bg-cover bg-center relative"
        style={{ backgroundImage: "url(/pattern3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="lg:w-1/2">
              <Image
                src="/funding.jpg"
                alt="Funding"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </motion.div>

            <motion.div variants={fadeIn} className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Investor Incentives
                </h2>
                <ul className="space-y-6">
                  {investorBenefits.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <p className="text-white">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="lg" className="group bg-white text-primary hover:text-white" onClick={() => router.push("/contact")}>
                Explore Investment Models
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    

{/*       
            <CTA
              title=" Ready to Invest or Partner with Us?"
              description="Whether you’re an experienced investor or exploring new
              opportunities, we welcome you to join our network."
              buttonText="Contact Us"
              imageSrc="/cta.png"
              onButtonClick={navigateToContact}
            /> */}
    </div>
  );
}
