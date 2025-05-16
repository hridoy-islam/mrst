"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

export default function ExportEmportPage() {
  const router = useRouter();
  const navigateToContact = () => {
    router.push("/contact");
  };

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
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-start text-white space-y-6"
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

      {/* Opportunities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeIn} className="text-start">
              <h2 className="text-3xl font-bold tracking-tight text-primary">
                Opportunities
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-background to-muted/50">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-primary">
                      Residential & Commercial Development
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Invest in high-quality residential and commercial
                      properties for long-term value.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-background to-muted/50">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-primary">
                      Joint Ventures
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Partner with landowners in lucrative joint ventures to
                      unlock new development opportunities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-background to-muted/50">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-primary">
                      Property Refurbishment
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Renovate and flip properties for profitable returns,
                      enhancing their value and appeal.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/pattern1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl font-bold mb-8">Why Invest with Us?</h2>
            <ul className="space-y-6">
              <li className="flex items-center justify-center gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
                <p className="text-xl font-medium">
                  High-yield, low-volatility asset class
                </p>
              </li>
              <li className="flex items-center justify-center gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
                <p className="text-xl font-medium">
                  Professional project management
                </p>
              </li>
              <li className="flex items-center justify-center gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
                <p className="text-xl font-medium">
                  Transparent financial reporting
                </p>
              </li>
              <li className="flex items-center justify-center gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
                <p className="text-xl font-medium">
                  Exit strategies tailored to investor goals
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact / Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-black max-w-xl text-center md:text-left"
          >
            <h2 className="text-4xl font-bold mb-6 leading-tight text-primary">
              Get Started Today
            </h2>
            <p className="mb-8 text-gray-700">
              Take the first step in transforming your investment portfolio. Our
              team is ready to guide you through the process and help you
              achieve your financial goals.
            </p>
            <Button
              size="lg"
              className="group bg-primary text-white hover:bg-primary/90 py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              onClick={navigateToContact}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center md:text-left flex justify-center items-center mt-8 md:mt-0"
          >
            <Image
              src="/realestate.jpg"
              alt="Contact Us"
              width={400}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
