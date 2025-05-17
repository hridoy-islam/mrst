"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ExportEmportPage() {
  const router = useRouter();

  return (
    <div className="bg-background">
      {/* Hero Section */}

      <section className="relative bg-gradient-to-br from-primary to-primary/90 py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/pattern.png"
            alt="Investment Partnership Background"
            fill
            className="object-cover"
          />
        </div>
        <div className=" container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-start text-white space-y-6 mt-8"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transforming Spaces, Building Futures in Real Estate
            </motion.h1>
            <motion.p
              className="text-lg text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Explore exceptional real estate opportunities with our expert
              guidance. Whether you're buying, selling, or investing, we provide
              comprehensive solutions to help you make informed decisions and
              achieve long-term value through trusted property services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="group mt-4 bg-white text-primary hover:bg-white/90"
              >
                Discover Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="">
        {/* What We Do */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="grid md:grid-cols-2 gap-12 py-12 items-center container mx-auto px-4"
        >
          <div className="space-y-4">
            <h2 className="text-3xl text-primary font-semibold">
              Full-Cycle Development
            </h2>
            <p className="text-gray-600">
              Our expert team handles the entire process—acquiring land,
              planning, constructing, marketing, and selling. This ensures
              control, efficiency, and strong returns at every stage.
            </p>
          </div>
          <Image
            src="/state1.jpg"
            alt="Development Cycle"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
        </motion.section>

        {/* Opportunities */}
        {/* Opportunities - with full-width gradient background */}
        <motion.div className="relative bg-gradient-to-b from-primary/10 to-secondary py-12 my-12">
          {/* Container for content */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
            className="container mx-auto px-4 space-y-10"
          >
            <h2 className="text-4xl text-primary font-semibold text-center">
              Investment Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Residential & Commercial Development",
                  image: "/state2.jpg",
                  desc: "We create value by planning and constructing residential and commercial properties in growth areas.",
                },
                {
                  title: "Joint Ventures with Landowners",
                  image: "/state3.jpg",
                  desc: "We collaborate with landowners to transform unused land into profitable real estate projects.",
                },
                {
                  title: "Refurbishment & Flipping",
                  image: "/state4.jpg",
                  desc: "We identify undervalued assets, renovate them, and drive rapid resale value.",
                },
                {
                  title: "Long-Term Rental Investments",
                  image: "/state5.jpg",
                  desc: "We build and maintain high-demand rental properties to generate steady cash flow.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeIn}
                  custom={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Why Invest With Us */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={3}
          className="space-y-10 py-12 container mx-auto px-4"
        >
          <h2 className="text-4xl font-semibold text-center text-primary">
            Why Invest With Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "High-Yield, Low-Volatility",
                desc: "Real estate offers stable, long-term returns in any market condition.",
                image: "/state1.jpg",
              },
              {
                title: "Expert Project Management",
                desc: "Our team ensures every phase of the project is delivered on time and on budget.",
                image: "/state6.jpg",
              },
              {
                title: "Transparent Financial Reporting",
                desc: "We provide full visibility on performance, returns, and costs.",
                image: "/state7.jpg",
              },
              {
                title: "Tailored Exit Strategies",
                desc: "We customize investment exits around your risk and return preferences.",
                image: "/state8.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                custom={i}
                className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full md:w-1/2 h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-primary ">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
