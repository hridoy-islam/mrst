"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe,
  Home,
  Lightbulb,
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

export default function StudentConsultancyServices() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-secondary">
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
            className="max-w-3xl"
          >
            <h1 className=" font-bold mb-6">Student Consultancy Services</h1>
            <h3 className="mb-8">
              Guiding Your International Education Journey
            </h3>
            <p className=" mb-8 opacity-90">
              MRST Consultancy provides expert guidance to students seeking
              international education opportunities. We offer personalized
              support throughout the entire process, from university selection
              to post-graduation planning.
            </p>
            <Button
              size="lg"
              className="group bg-secondary text-primary hover:bg-secondary/90"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Education Consultancy */}
      <section className="py-20 text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16 text-primary"
          >
            <h2 className="font-bold mb-4">
              Comprehensive Education Consultancy
            </h2>
            <p className="max-w-3xl mx-auto text-black">
              Personalized guidance at every step of your international
              education journey, from planning to post-graduation.
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
              <Card className="h-full transition-all border-2 border-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <GraduationCap className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>University Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Customized recommendations based on academic goals, career
                    aspirations, and personal preferences to find your perfect
                    match.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all border-2 border-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <BookOpen className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Application Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Strategic guidance on application preparation, personal
                    statements, and documentation to maximize your chances of
                    acceptance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all border-2 border-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Globe className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Visa Assistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Expert support for student visa applications and
                    requirements, ensuring a smooth transition to your host
                    country.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all border-2 border-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Lightbulb className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Scholarship Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Identification of financial aid opportunities and
                    application support to help fund your education.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all border-2 border-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <Home className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Pre-Departure Orientation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black">
                    Preparation for cultural adjustment and practical aspects of
                    studying abroad, ensuring a smooth transition.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Destination Specializations */}
      <section className="py-20 ">
        <div className="container text-primary mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Destination Specializations
            </h2>
            <p className="text-black max-w-3xl mx-auto">
              We offer specialized knowledge for popular study destinations
              worldwide, helping you make informed decisions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              "United Kingdom",
              "United States",
              "Canada",
              "Australia",
              "European Union",
              "UAE and GCC countries",
              "Singapore and Malaysia",
            ].map((destination, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full transition-all hover:shadow-lg hover:bg-primary hover:text-white group">
                  <CardContent className="p-6 flex items-center justify-center h-full">
                    <h3 className="text-lg font-semibold text-center group-hover:text-white">
                      {destination}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Student Services */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Additional Student Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to enhance your international
              education experience and future prospects.
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
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Career Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Guidance on academic pathways aligned with career
                    objectives, helping you make strategic educational choices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Test Preparation Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Resources and strategies for IELTS, TOEFL, SAT, GRE, and
                    GMAT to help you achieve your target scores.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Accommodation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Assistance with finding suitable housing options, ensuring a
                    comfortable living environment during your studies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Post-Graduation Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Advice on work permits, further education, and career
                    opportunities to maximize the value of your international
                    degree.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle>Alumni Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connection to our global network of former students for
                    mentorship and insights into life at various institutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className=" mx-auto text-center text-primary"
          >
            {" "}
            <div className="absolute inset-0 opacity-15 h-full w-full bg-[url('/pattern2.png')] bg-repeat bg-contain "></div>
            <h2 className="font-bold mb-6">Our Approach</h2>
            <p className=" mb-8 text-black">
              We pride ourselves on providing honest, ethical guidance that
              prioritizes student success. Our consultants maintain up-to-date
              knowledge of international education trends, admission
              requirements, and employment opportunities to ensure students
              receive accurate and relevant advice.
            </p>
            <p className=" mb-8 text-black">
              At MRST Consultancy, we believe that quality education transcends
              borders. Our mission is to help you access the educational
              opportunities that will shape your future, wherever in the world
              they may be.
            </p>
            {/* <div className="flex justify-center">
              <Users className="h-16 w-16 text-secondary" />
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className=" font-bold mb-4">Student Success Stories</h2>
            <p className="text-secondary max-w-3xl mx-auto">
              Hear from students who have successfully navigated their
              international education journey with our guidance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Image
                        src="/p1.jpg"
                        alt="Student"
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="font-semibold">Sarah Jahan</h3>
                    <p className="text-sm text-secondary">
                      MSc, University of London
                    </p>
                  </div>
                  <p className="text-secondary italic">
                    "MRST Consultancy guided me through every step of my
                    application to UK universities. Their personalized approach
                    and attention to detail made all the difference in securing
                    my place at my dream program."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Image
                        src="/p2.jpg"
                        alt="Student"
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="font-semibold">Karim Javed</h3>
                    <p className="text-sm text-secondary">
                      MBA, Harvard University
                    </p>
                  </div>
                  <p className="text- italic">
                    "From test preparation to scholarship applications, MRST
                    provided expert guidance that helped me secure a substantial
                    scholarship for my MBA. Their knowledge of the US education
                    system is unparalleled."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Image
                        src="/p3.jpg"
                        alt="Student"
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="font-semibold">Priyom Mazumdar</h3>
                    <p className="text-sm text-gray-500">
                      BEng, University of Toronto
                    </p>
                  </div>
                  <p className="italic">
                    "The visa process seemed overwhelming until I worked with
                    MRST. Their step-by-step guidance and preparation for my
                    visa interview made the process smooth and successful."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Begin Your International Education Journey Today
            </h2>
            <p className="mb-8 text-black">
              Let our expert consultants guide you toward the educational
              opportunities that will shape your future.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-800 hover:bg-gray-100"
            >
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
