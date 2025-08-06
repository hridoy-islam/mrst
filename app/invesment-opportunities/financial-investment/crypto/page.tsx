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
  Users,
  Shield,
  Target,
  HeadphonesIcon,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Lock,
  Zap,
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

export default function CryptoPage() {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      image: "/crypto1.jpg",
      title: "Managed Crypto Trading",
      description:
        "Want to invest in cryptocurrencies but unsure where to start? Our expert traders will manage your crypto portfolio on your behalf. We focus on risk-managed strategies to help grow your digital assets while keeping volatility in check.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      image: "/crypto2.jpg",
      title: "Crypto Trading Guidance & Mentorship",
      description:
        "Prefer to manage your own trades? Our consultants offer one-on-one guidance, technical analysis, and strategic insights tailored to both beginners and experienced traders. We'll help you understand market trends, identify opportunities, and avoid common mistakes.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      text: "Secure and informed trading approach",
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      text: "In-depth market analysis and trend forecasting",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      text: "Access to high-growth digital assets",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      text: "Education and mentorship for long-term success",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      text: "Global perspective, local support",
    },
  ];

  const router = useRouter();
  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <div className="bg-secondary">
      <section className="relative bg-primary py-28">
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
            className="text-start"
          >
            <h1 className="max-md:text-4xl font-bold mb-6">
              Navigating the Future of Finance with Crypto Innovation
            </h1>
            <p className="mx-auto mb-8">
              Step into the decentralized economy with our trusted crypto
              solutions. From secure investments to expert insights, we empower
              individuals and businesses to embrace digital assets with
              confidence, clarity, and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Crypto Trading Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <motion.div
              variants={fadeIn}
              className=" flex-1 text-center lg:text-left lg:max-w-2xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                What is Crypto Trading?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Crypto trading involves buying and selling digital currencies
                like Bitcoin, Ethereum, and other altcoins to profit from price
                movements. Unlike traditional markets, the crypto market
                operates 24/7, offering constant trading opportunities in a
                decentralized environment.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="flex-1">
              <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/crypto.jpg"
                  alt="Forex Trading Overview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Crypto Services Section */}
      <section className="py-20 bg-background">
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
                Our Crypto Services
              </h2>
              <p className="text-muted-foreground">
                At MRST Consultancy LLC FZ, we also bring our expertise to the
                fast-growing world of Cryptocurrency trading. With deep market
                knowledge and advanced technical strategies, we help clients
                take advantage of opportunities in this innovative and
                high-potential market.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="border border-primary rounded-xl p-6 hover:shadow-lg transition-all bg-white"
                >
                  {/* Image Section */}
                  <div className="w-full h-[250px] relative mb-5">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-row gap-3 items-center mb-4">
                    <div className="text-primary">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Trade Crypto with MRST Consultancy Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Why Trade Crypto with MRST Consultancy?
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you're a first-time investor or a seasoned trader, MRST
                Consultancy LLC FZ is here to support your crypto journey with
                reliable expertise and a results-driven mindset.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
            >
              {whyChooseUs.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-primary/20  bg-gradient-to-tl from-primary to-primary/90  hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-white">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-white font-medium">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA
        title="Ready to Enter the Crypto Market?"
        description="Whether you're a first-time investor or a seasoned trader, MRST Consultancy LLC FZ is here to support your crypto journey with reliable expertise and a results-driven mindset."
        buttonText="Start Your Crypto Journey"
        imageSrc="/cta.png"
        onButtonClick={navigateToContact}
      />
    </div>
  );
}
