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

  const features = [
    {
      title: "Less Time in the Chair",
      desc: "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper. Laoreet mi lacus nisi diam in.",
      image: "/state1.jpg",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "More Efficient",
      desc: "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper. Laoreet mi lacus nisi diam in.",
      image: "/state2.jpg",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Longer Lasting",
      desc: "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper. Laoreet mi lacus nisi diam in.",
      image: "/state3.jpg",
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      title: "More Comfortable Experience",
      desc: "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper. Laoreet mi lacus nisi diam in.",
      image: "/state4.jpg",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
  ];

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
          className="py-16 bg-blue-50/50"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-2">
                Why Choose Us?
              </h2>
              <div className="w-24 h-1 bg-orange-500"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {features.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={fadeIn}
                    custom={i}
                    className={`flex items-start p-6 rounded-xl shadow-lg border border-primary ${item.bgColor}`}
                  >
                    <div className="flex-shrink-0 ">
                      {/* <div
                        className={`w-16 h-16 rounded-tl-lg rounded-br-lg ${item.bgColor} flex items-center justify-center`}
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={100}
                          height={60}
                          className="object-contain"
                        />
                      </div> */}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeIn}
                custom={1}
                className="relative overflow-hidden shadow-lg rounded-tl-3xl rounded-br-3xl w-[450px]"
              >
                <Image
                  src="/state3.jpg"
                  alt="Dental office"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover rounded-tl-5xl rounded-br-3xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
