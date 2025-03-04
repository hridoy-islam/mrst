"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DirectorSpeech() {
  return (
    <div className="w-full bg-secondary   ">
      {/* Text Content */}

      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
  {/* Left Side - Text Content */}
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.h1
      className="font-bold tracking-tight text-primary leading-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Message from the Director
    </motion.h1>

    <motion.p
      className="text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      With 11 years of experience in the UK Higher Education sector, is a
      seasoned sales and marketing professional. Having led the marketing
      strategy for London Churchill College for over a decade, he continues
      to explore creative outreach methods to engage potential learners.
      Holding an MBA in Management, Mr Chowdhury successfully operates
      multiple businesses across healthcare, real estate, and retail
      industries. His leadership focuses on empowering teams, establishing
      institutions, and implementing robust, cost-effective systems that
      drive efficiency and productivity in various business environments.
    </motion.p>

    <motion.p
      className="text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.8 }}
    >
      Md Mijanur Rahman Chowdhury - Director
    </motion.p>
  </motion.div>

  {/* Right Side - Image */}
  <motion.div
    className="relative flex justify-center items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className="relative flex justify-center">
      {/* Stylish background rectangle */}
      <div className="absolute -left-4 bottom-4 w-[100%] h-[100%] bg-gradient-to-b from-primary to-primary/40 rounded-xl shadow-lg" />

      {/* Floating animation for the image */}
      <motion.div className="relative z-10 drop-shadow-xl">
        <Image
          src="/director.jpg"
          alt="Md Mijanur Rahman Chowdhury - Director"
          width={320}
          height={320}
          className="object-cover rounded-lg"
          priority
        />
      </motion.div>
    </div>
  </motion.div>
</div>

    </div>
  );
}
