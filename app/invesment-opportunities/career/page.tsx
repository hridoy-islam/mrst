"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Landmark,
  BookOpen,
  Briefcase,
  Users,
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

export default function CareerPage() {
  const router = useRouter();
  const navigateToContact = () => {
    router.push("/contact");
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      image: "/c1.jpg", // Add the path to your image
      title: "Study Abroad Counseling",
      description: "Guidance for studying in the UK, Canada, Australia & more",
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      image: "/c2.jpg", // Add the path to your image
      title: "Visa & Admissions Support",
      description: "Complete support with university applications and visas",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      image: "/c3.jpg", // Add the path to your image
      title: "Foundation & Pathway Programs",
      description:
        "Programs to prepare students for university-level education",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      image: "/c4.jpg", // Add the path to your image
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
            className="text-start mt-8"
          >
            <h1 className="text-6xl font-bold mb-6">
              Empowering Students for Global Career Success
            </h1>
            <p className="mx-auto  text-lg">
              Our Student Career Service provides tailored guidance,
              internships, and global placement opportunities to help students
              unlock their full potential and build successful international
              careers.
            </p>
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
                Services We Provide
              </h2>
              <p className="text-muted-foreground">
                Personalized guidance and support for students at every step
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
        className="py-20 bg-blue-50 bg-cover bg-center relative"
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
                          <Users className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-white text-xl">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                size="lg"
                className="group bg-white text-primary hover:text-white"
                onClick={() => router.push("/contact")}
              >
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* <CTA
        title=" Ready to Empower Students Worldwide?"
        description="Join us in building global academic and career success stories."
        buttonText="Contact Us"
        imageSrc="/cta.png"
        onButtonClick={navigateToContact}
      /> */}
    </div>
  );
}
