"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AboutSectionProps {
  title: string
  subtitle: string
  children: ReactNode
  className?: string
}

export default function AboutSection({ title, subtitle, children, className = "" }: AboutSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-bold mb-4">{title}</h2>
          <p >{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

