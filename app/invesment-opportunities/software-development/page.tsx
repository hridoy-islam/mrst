"use client";
import Image from "next/image";
import type React from "react";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Bot,
  Settings,
  TrendingUp,
  ShieldCheck,
  DollarSign,
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
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      image: "/s1.jpg", // Path to the image
      title: "Web & Mobile App Development",
      description: "Custom apps built for performance, usability, and scale.",
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      image: "/s2.jpg", // Path to the image
      title: "Business Automation Tools",
      description: "Automate repetitive processes to boost efficiency.",
    },
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      image: "/s3.jpg", // Path to the image
      title: "AI & Machine Learning Integration",
      description: "Smarter solutions through cutting-edge AI capabilities.",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      image: "/s4.jpg", // Path to the image
      title: "Industry-Specific Software",
      description:
        "Tailored tools for retail, logistics, healthcare, and more.",
    },
  ];

  const investmentAppeal = [
    "High scalability",
    "IP ownership & licensing options",
    "Monthly SaaS revenue models",
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
        <div className="w-full container ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-start mt-8"
          >
            <h1 className="max-md:text-4xl font-bold mb-6">
              Building Intelligent Software That Powers Your Digital Future
            </h1>
            <p className="">
              From custom applications to enterprise-grade platforms, we deliver
              innovative software solutions tailored to your business goals.
              Harness cutting-edge technologies and expert development practices
              to accelerate your digital transformation journey.
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

      {/* Services Section */}
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
                Our Expertise Covers
              </h2>
              <p className="text-muted-foreground">
                Innovative and scalable tech tailored to industry-specific needs
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2  gap-6"
            >
              {services.map((service, index) => (
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

      {/* Investment Appeal Section */}
      <section
        className="py-20 bg-gray-100 bg-cover bg-center relative"
        style={{ backgroundImage: "url(/pattern3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="lg:w-1/2">
              <Image
                src="/developer.jpg"
                alt="Software Development"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </motion.div>

            <motion.div variants={fadeIn} className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Why Invest in Our Tech Ventures
                </h2>
                <ul className="space-y-6">
                  {investmentAppeal.map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <p className="text-white">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                size="lg"
                className="group bg-white text-primary hover:text-white"
              >
                Become a Tech Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA
        title="Ready to Build the Future With Us?"
        description=" Let’s develop scalable software tailored to your business growth."
        buttonText="Contact Us"
        imageSrc="/cta.png"
        onButtonClick={navigateToContact}
      />
    </div>
  );
}
