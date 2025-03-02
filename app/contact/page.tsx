"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    contactMethod: "email",
    source: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: any, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Thank you for your message. We'll get back to you shortly!");
  };

  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connect with MRST Consultancy
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              We welcome the opportunity to discuss how our services can support
              your international business or education goals.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-0 left-0 w-1/3 h-full"
          style={{
            backgroundImage: "url('/pattern1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </section>

      {/* Contact Information Section */}
      <section className="py-16 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex flex-col lg:flex-row  gap-12 ">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-secondary rounded-lg w-[40%] shadow-md p-8 flex-grow-0"
            >
              <motion.h3
                variants={fadeIn}
                className=" font-bold text-primary mb-6 "
              >
                Our Location
              </motion.h3>

              <motion.div variants={fadeIn} className="flex items-start mb-6">
                <Building className="h-5 w-5 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">MRST CONSULTANCY L.L.C-FZ</h3>
                  <p className="text-black">Meydan Grandstand, 6th floor,</p>
                  <p className="text-black">Meydan Road, Nad Al Sheba,</p>
                  <p className="text-black">Dubai, United Arab Emirates</p>
                </div>
              </motion.div>

              <motion.h3 variants={fadeIn} className=" font-bold mb-6">
                Contact Information
              </motion.h3>

              <motion.div variants={fadeIn} className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">General Inquiries</h3>
                    <p className="text-black">
                      Email: info@mrstconsultancy.com
                    </p>
                    <p className="text-black">Phone: +971 4 XXX XXXX</p>
                  </div>
                </div>
              </motion.div>

              <motion.h3 variants={fadeIn} className=" font-bold mt-8 mb-6">
                Business Hours
              </motion.h3>

              <motion.div variants={fadeIn} className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-4 mt-1" />
                <div>
                  <p className="text-black">
                    Monday to Friday: 9:00 AM - 6:00 PM (GST)
                  </p>
                  <p className="text-black">
                    Saturday: 10:00 AM - 2:00 PM (GST)
                  </p>
                  <p className="text-black">Sunday: Closed</p>
                </div>
              </motion.div>

              <motion.h2 variants={fadeIn} className=" font-bold mt-8 mb-6">
                Connect With Us
              </motion.h2>

              <motion.div variants={fadeIn} className="flex space-x-4">
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-secondary rounded-lg shadow-md p-8 flex-grow"
            >
              <h2 className="font-bold mb-6">Schedule a Consultation</h2>
              <p className="text-black mb-6">
                We offer both in-person and virtual consultations to accommodate
                your schedule and location. Please complete the form below to
                request a meeting with one of our specialists.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name*</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Company/Institution (if applicable)
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2 w-[40%]">
                  <Label htmlFor="service">Service of Interest*</Label>
                  <Select
                    name="service"
                    onValueChange={(value) =>
                      handleSelectChange("service", value)
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="export"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Export & Import Consultancy
                      </SelectItem>
                      <SelectItem
                        value="investment"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Mutual Investment
                      </SelectItem>
                      <SelectItem
                        value="student"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Student Consultancy
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 w-[60%]">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Preferred Contact Method*</Label>
                  <RadioGroup
                    name="contactMethod"
                    value={formData.contactMethod}
                    onValueChange={(value) =>
                      handleSelectChange("contactMethod", value)
                    }
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-method" />
                      <Label htmlFor="email-method">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-method" />
                      <Label htmlFor="phone-method">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2 w-[40%]">
                  <Label htmlFor="source">How did you hear about us?</Label>
                  <Select
                    name="source"
                    onValueChange={(value) =>
                      handleSelectChange("source", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="search"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Search Engine
                      </SelectItem>
                      <SelectItem
                        value="social"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Social Media
                      </SelectItem>
                      <SelectItem
                        value="referral"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Referral
                      </SelectItem>
                      <SelectItem
                        value="event"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Event
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="hover:bg-primary hover:text-secondary"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-sm text-gray-600">
                  We respect your privacy. All information provided will be
                  treated confidentially and used only to respond to your
                  inquiry.
                </div>

                <div className="flex justify-start">
                  <Button type="submit" className="w-[40%]">
                    Submit Request
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="absolute inset-0 opacity-10 h-full w-full bg-[url('/pattern2.png')] bg-repeat bg-contain "></div>
            <h2 className=" font-bold mb-4 text-primary">Visit Our Office</h2>
            <p className="text-black max-w-3xl mx-auto">
              Located in the heart of Dubai, our office is easily accessible and
              ready to welcome you.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
