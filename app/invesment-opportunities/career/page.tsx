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

import { BookOpen, Landmark, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Industries from "@/components/industries";
import { useRouter } from "next/navigation";

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

export default function CareerPage() {

   const router = useRouter();
  const navigateToContact = () => {
    router.push("/contact");
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Study Abroad Counseling",
      description: "Guidance for studying in the UK, Canada, Australia & more",
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      title: "Visa & Admissions Support",
      description: "Complete support with university applications and visas",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Foundation & Pathway Programs",
      description: "Programs to prepare students for university-level education",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Internship & Job Placement",
      description: "Helping students gain experience and start their careers",
    },
  ];

  const investmentAppeal = [
    "Growing global demand for education services",
    "Partnerships with recruitment networks and schools",
    "Consistent revenue from placement fees and support services",
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
            className="text-start"
          >
            <h1 className=" max-md:text-4xl font-bold mb-6">
              Empowering Students for Global Career Success{" "}
            </h1>
            <p className="  mx-auto mb-8">
              Our Student Career Service provides tailored guidance,
              internships, and global placement opportunities to help students
              unlock their full potential and build successful international
              careers.
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
                Services We Provide
              </h2>
              <p className="text-muted-foreground">
                Personalized guidance and support for students at every step
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="border border-primary rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Appeal Section */}
      <section
        className="py-20 bg-blue-50 bg-cover bg-center relative"
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
                src="/student.jpg"
                alt="Student Career"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </motion.div>

            <motion.div variants={fadeIn} className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Investment Appeal
                </h2>
                <ul className="space-y-6">
                  {investmentAppeal.map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <p className="text-white">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="lg" className="group bg-white text-primary">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-white max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">
              Ready to Empower Students Worldwide?
            </h2>
            <p className="text-black text-lg">
              Join us in building global academic and career success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-primary text-blue-800 hover:bg-primary/90"
                onClick={navigateToContact}
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
