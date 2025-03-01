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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

