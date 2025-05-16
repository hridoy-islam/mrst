"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

export default function ForexPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+62");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
    // Reset form or show success message
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="bg-secondary">
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
          <motion.div initial="hidden" animate="visible" className="text-start">
            <h1 className="max-md:text-4xl font-bold mb-6">
              Unlock Global Opportunities with Expert Forex Solutions
            </h1>
            <p className="mx-auto">
              Navigate the dynamic world of currency trading with confidence.
              Our Forex services combine strategic insights, real-time data, and
              expert guidance to help you maximize profits and minimize risk in
              the world’s most liquid market.
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
    </div>
  );
}
