"use client"

import { motion } from "framer-motion"

export default function GlobalReach() {
  const regions = [
    {
      name: "Middle East & North Africa",
      description: "Leveraging Dubai's strategic position as a regional hub",
      percentage: 85,
    },
    {
      name: "South & Southeast Asia",
      description: "Facilitating trade and investment in high-growth markets",
      percentage: 75,
    },
    {
      name: "Europe & North America",
      description: "Creating pathways to established economies",
      percentage: 70,
    },
    {
      name: "Africa",
      description: "Unlocking opportunities in emerging markets",
      percentage: 65,
    },
  ]

  return (
    <section className="bg-secondary py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className=" font-bold tracking-tight text-primary">Our Global Reach</h2>
          <p className="mt-4  opacity-90">
            Operating from our headquarters in Dubai's prestigious Meydan Grandstand, MRST Consultancy maintains an
            extensive international network spanning key regions worldwide.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <h3 className=" font-medium">{region.name}</h3>
                  <span className="font-bold">{region.percentage}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary-foreground/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${region.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-primary"
                  ></motion.div>
                </div>
                <p className="text-secondary-foreground/80">{region.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 overflow-hidden rounded-xl bg-secondary-foreground/10 p-1 backdrop-blur-sm"
        >
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="Global network map"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

