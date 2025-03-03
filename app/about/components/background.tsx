"use client"

import { motion } from "framer-motion"
import { Building, GraduationCap, Briefcase, Globe2 } from "lucide-react"

const companies = [
  {
    icon: GraduationCap,
    name: "London Churchill College & Watney College",
    description: "Leading UK-based educational institutions shaping future professionals.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Building,
    name: "GB Properties Ltd & CMR Properties Group Ltd",
    description: "Renowned entities in real estate and construction, delivering excellence in property development.",
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    icon: Briefcase,
    name: "MRST Investments Ltd",
    description:
      "A trusted UK-registered property investment firm managing diverse portfolios across multiple sectors.",
    gradient: "from-teal-600 to-green-600",
  },
  {
    icon: Globe2,
    name: "SMS Higher Education Group",
    description:
      "A well-established student recruitment organisation registered in the UK, with seven offices worldwide.",
    gradient: "from-green-600 to-emerald-600",
  },
]

export function Background() {
  return (
    <section className="py-16 md:py-24 bg-primary-to-tr from-secondary to-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className=" font-bold mb-4">Background of MRST Consultancy</h2>
          <p className=" text-secondary mx-auto">
            MRST CONSULTANCY L.L.C-FZ is a dynamic and multifaceted organisation established in 2023, specialising in
            export, import, mutual investment, and student consultancy. We are backed by over 15 years of industry
            experience through our parent company.
          </p>
        </motion.div>

        <div className="space-y-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative group">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${company.gradient} opacity-40 rounded-xl blur-xl group-hover:opacity-60 transition-opacity duration-300`}
                />
                <div className="relative bg-secondary rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-primary/80 flex-shrink-0 flex items-center justify-center`}
                    >
                      <company.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold mb-2">{company.name}</h3>
                      <p className="text-primary">{company.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-7xl mx-auto">
            With a strong legacy of experience and a forward-thinking vision, our directors have expanded operations to
            the UAE, reinforcing our global presence and delivering innovative, reliable, and value-driven solutions for
            businesses, investors, and students worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

