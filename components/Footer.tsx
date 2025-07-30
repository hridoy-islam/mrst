"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-primary to-primary/70 w-full text-secondary relative">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-[url('/p7.jpg')] bg-cover bg-center opacity-5 "></div> */}

      {/* Main Container */}
      {/* Main Container */}
      <div className="container py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start">
          {/* Company Info */}
          <div>
            <div className="space-y-4 w-full">
              {/* <Image src={whitelogo} alt="robofx" /> */}
              <h2 className="font-bold">MRST Consultancy L.L.C-FZ</h2>
              <p>
                MRST CONSULTANCY L.L.C-FZ is a dynamic and multifaceted
                organisation specialising in export, import, mutual investment,
                and student consultancy. Established in 2023, we are committed
                to providing seamless global trade solutions, strategic
                investment opportunities, and expert guidance for students
                pursuing international education.
              </p>
            </div>
          </div>
          {/* Company Links */}

          <div className="flex flex-col md:flex-row  items-center justify-between">
            <div className="space-y-4 w-full max-md:pb-4 md:-mt-9">
              <h3 className="pb-2 font-semibold">Company</h3>
              <ul className=" space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                {/* <li>
                  <Link href="/businesssolutions">Business Solutions</Link>
                </li> */}
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 w-full">
              <h3 className="pb-2 font-semibold">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <div className="flex items-start gap-2">
                    <Icon icon="ph:map-pin" className="mt-2" />
                    <p>
                      Meydan Grandstand
                      <br />
                      6th floor, Meydan Road
                      <br />
                      Nad Al Sheba, Dubai, UAE
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    href="tel:+9714563204619"
                    className="flex items-center gap-2"
                  >
                    <Icon icon="solar:phone-linear" />
                    <span>+9714563204619</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mijan@smsonline.org.uk"
                    className="flex items-center gap-2"
                  >
                    <Icon icon="clarity:envelope-solid" />
                    <p>mijan@smsonline.org.uk</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center p-4">
        <p>
          Copyrights © 2024 All Rights Reserved by MRST Consultancy L.L.C-FZ.
        </p>
      </div>
    </div>
  );
}
