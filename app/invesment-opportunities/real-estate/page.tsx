"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Circle } from "lucide-react";

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

      <section className="relative bg-gradient-to-br from-primary to-primary/90 py-16 overflow-hidden">
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
            className="text-start text-white space-y-6 "
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
            {/* <motion.div
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
            </motion.div> */}
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
          className="grid md:grid-cols-2 gap-12 py-16 items-center container mx-auto px-4"
        >
          {/* Left Content */}
          <div className="space-y-6 max-w-lg">
            <h2 className="text-4xl font-bold text-primary leading-tight">
              Full-Cycle Development
            </h2>
            <p className="text-gray-600">
              Our expert team handles the entire process—acquiring land,
              planning, constructing, marketing, and selling. This ensures
              control, efficiency, and strong returns at every stage.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="group mt-4 bg-primary text-primary hover:bg-primary/90" onClick={() => router.push("/contact")}>
                Discover Our Approach{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <div className="relative w-full h-[450px]">
            {/* Top-right image */}
            <Image
              src="/state1.jpg"
              alt="Business Meeting"
              width={300}
              height={400}
              className="object-cover rounded-xl absolute top-0 right-0 w-[60%] h-[80%] z-10 -translate-x-8  -translate-y-4 shadow-md"
            />

            <Image
              src="/state2.jpg"
              alt="Business Man"
              width={300}
              height={400}
              className="object-cover rounded-xl absolute bottom-0 left-0 w-[60%] h-[80%] z-20 -translate-x-4 translate-y-4 shadow-xl"
            />
          </div>
        </motion.section>

        {/* Opportunities - with full-width gradient background */}
        <motion.div className="relative bg-gradient-to-b from-primary/10 to-secondary py-12 my-12">
          {/* Container for content */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
            className="container mx-auto px-4 "
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="relative w-full h-[450px]">
                <Image
                  src="/e3.jpg"
                  alt="Business Meeting"
                  layout="fill"
                  className="object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-lg shadow-md flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zm0 2v8m0 0h8m-8 0H4"
                    />
                  </svg>
                  {/* <div>
                    <p className="text-lg font-semibold text-green-800">15%</p>
                    <p className="text-sm text-gray-600">Annual ROI</p>
                  </div> */}
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Unlock Lucrative Property Investment Opportunities
                </h2>
                <p className="text-gray-600 mb-6">
                  Our expert team specializes in residential and commercial
                  property development, joint ventures with landowners, property
                  refurbishment and flipping, and long-term rental investments.
                  We provide tailored strategies to help you achieve sustainable
                  growth in the property market.
                </p>

                <div className="space-y-5">
                  {/* 1 - Residential & Commercial Property Development */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-400 p-3 rounded-full">
                      <Circle className="w-4 h-4 text-primary fill-primary/90" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary">
                        Residential & Commercial Property Development
                      </h4>
                      <p className="text-gray-600">
                        Explore opportunities in both residential and commercial
                        property development to create lasting investments.
                      </p>
                    </div>
                  </div>

                  {/* 2 - Joint Ventures with Landowners */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Circle className="w-4 h-4 text-primary fill-primary/90" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary">
                        Joint Ventures with Landowners
                      </h4>
                      <p className="text-gray-600">
                        Partner with landowners for mutually beneficial ventures
                        that unlock the potential of unused land.
                      </p>
                    </div>
                  </div>

                  {/* 3 - Property Refurbishment & Flipping */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Circle className="w-4 h-4 text-primary fill-primary/90" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary">
                        Property Refurbishment & Flipping
                      </h4>
                      <p className="text-gray-600">
                        Invest in property refurbishment and flipping for high
                        returns on revitalized properties.
                      </p>
                    </div>
                  </div>

                  {/* 4 - Long-term Rental Investment Projects */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Circle className="w-4 h-4 text-primary fill-primary/90" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary">
                        Long-term Rental Investment Projects
                      </h4>
                      <p className="text-gray-600">
                        Secure passive income through long-term rental
                        investment projects in prime locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>

       
      </div>
    </div>
  );
}
