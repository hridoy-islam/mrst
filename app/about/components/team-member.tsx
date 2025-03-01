"use client"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  position: string
  image: string
}

export default function TeamMember({ name, position, image }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow bg-secondary text-primary duration-300">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="pt-6">
        <h3 className=" font-semibold">{name}</h3>
        <p className=" mb-4">{position}</p>
        <div className="flex gap-2">
          <Button  className="bg-primary" size="icon">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button className="bg-primary" size="icon">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

