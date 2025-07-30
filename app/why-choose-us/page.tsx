"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Package,
  ShieldCheck,
  TrendingUp,
  Truck,
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

const features = [
  {
    title: "Less Time in the Chair – Streamlined Processes",
    desc: `
      <ul class="feature-list">
        <li><strong>Trade & Investment:</strong> Our pre-vetted networks and regulatory expertise accelerate deal closures, reducing bureaucratic delays.</li>
        <li><strong>Student Consultancy:</strong> Dedicated advisors fast-track applications, cutting through paperwork for quicker university admissions.</li>
        <li><strong>IT Solutions:</strong> Agile development frameworks ensure faster project delivery without compromising quality.</li>
      </ul>
    `,
    image: "/state1.jpg",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "More Efficient – Optimized Results",
    desc: `
      <ul class="feature-list">
        <li><strong>Data-Driven Strategies:</strong> Leveraging market analytics to identify high-return investments and trade opportunities.</li>
        <li><strong>Tech-Enabled Tools:</strong> Automated documentation for imports/exports and real-time student visa tracking.</li>
        <li><strong>Resource Optimization:</strong> Strategic partnerships to minimize costs in real estate and software development.</li>
      </ul>
    `,
    image: "/state2.jpg",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Longer Lasting – Sustainable Success",
    desc: `
      <ul class="feature-list">
        <li><strong>Future-Proof Investments:</strong> Curating assets (real estate, startups) with long-term growth potential.</li>
        <li><strong>Lifetime Alumni Support:</strong> Continuous career guidance for students post-placement.</li>
        <li><strong>Scalable IT Systems:</strong> Building software architectures that evolve with your business needs.</li>
      </ul>
    `,
    image: "/state3.jpg",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    title: "More Comfortable Experience – Stress-Free Partnerships",
    desc: `
      <ul class="feature-list">
        <li><strong>Dedicated Representatives:</strong> Single-point contacts for seamless communication.</li>
        <li><strong>Transparent Pricing:</strong> No hidden fees in trade, education, or IT projects.</li>
        <li><strong>Tailored Solutions:</strong> Services adapted to your unique goals, whether you're an investor, student, or entrepreneur.</li>
      </ul>
    `,
    image: "/state4.jpg",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
];
export default function WhyChooseUs() {
  return (
    <div>
      <section className="relative bg-primary text-secondary">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/pattern.png"
            alt="Investment Partnership Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container py-16 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className=" flex flex-col items-start text-start justify-center"
          >
            <h1 className="text-secondary font-bold mb-4">
              Empowering Global Ambitions with Trusted Expertise
            </h1>
            <h3 className="text-secondary font-normal ">
              Discover why individuals and businesses worldwide choose MRST
              Consultancy. With our deep industry knowledge and international
              reach, we deliver tailored solutions that connect you to global
              business opportunities and world-class education pathways — all
              built on trust, integrity, and results.
            </h3>
          </motion.div>
        </div>
      </section>
      {/* Why Invest With Us */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={3}
        className="py-16 bg-gradient-radial from-primary/20 via-primary/5 to-white"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-2">
              Why Choose MRST Consultancy?{" "}
            </h2>
            <p className="text-muted-foreground text-lg">
              At{" "}
              <span className="font-semibold">MRST Consultancy L.L.C-FZ</span>,
              we redefine efficiency, precision, and client satisfaction. Here’s
              how we deliver unmatched value across all our services:{" "}
            </p>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>

          {/* Content */}
          <div className="flex flex-row lg:flex-row justify-center items-center  gap-32">
            {/* Text Features */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {features.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeIn}
                  custom={i}
                  className={`flex flex-col h-full items-start p-6 rounded-xl shadow-lg border border-primary ${item.bgColor}`}
                >
                  <div className="">
                    {/* Add icon or visual element if needed */}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {item.title}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                      className="text-gray-500 text-md space-y-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Stack */}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
