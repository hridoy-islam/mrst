"use client"

import { Award, Globe, Lightbulb, type LucideIcon, Shield, Trophy } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface ValueCardProps {
  title: string
  description: string
  icon: "Shield" | "Award" | "Lightbulb" | "Globe" | "Trophy"
}

export default function ValueCard({ title, description, icon }: ValueCardProps) {
  const IconComponent: Record<string, LucideIcon> = {
    Shield,
    Award,
    Lightbulb,
    Globe,
    Trophy,
  }

  const Icon = IconComponent[icon]

  return (
    <Card className="h-full border-none bg-primary shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center  text-center">
          <div className="p-3 rounded-full bg-secondary mb-4">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

