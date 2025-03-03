"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Footer() {
  return (
<div className="bg-primary px-8 md:px-28 flex flex-col justify-between text-secondary relative">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/p7.jpg')] bg-cover bg-center opacity-10"></div>
  
  <div className="relative mx-auto">
    <div className="md:flex sm:flex-row gap-3 justify-between py-8 sm:space-y-6">
      <div className="md:w-[40%] w-full space-y-4">
        {/* <Image src={whitelogo} alt="robofx" /> */}
        <h2>MRST Consultancy L.L.C-FZ </h2>
        <p>
          MRST CONSULTANCY L.L.C-FZ is a dynamic and multifaceted organisation specialising in export, import, mutual investment, and student consultancy. Established in 2023, we are committed to providing seamless global trade solutions, strategic investment opportunities, and expert guidance for students pursuing international education.
        </p>
      </div>
      <div className="md:w-1/6 w-full space-y-4">
        <h3 className="pb-2">Company</h3>
        <ul className="space-y-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/businesssolutions">Business Solutions</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="md:w-1/3 w-full space-y-4">
        <h3 className="pb-2">Contact Us</h3>
        <ul className="space-y-2">
          <li>
            <div className="flex items-start gap-2">
              <Icon icon="ph:map-pin" className="mt-2" />
              <p>
                Meydan Grandstand<br />
                6th floor, Meydan Road<br />
                Nad Al Sheba,<br />
                Dubai, United Arab Emirates
              </p>
            </div>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-2">
              <Icon icon="solar:phone-linear" />
              <span>+971 50 363 0578</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-2">
              <Icon icon="clarity:envelope-solid" />
              <p>data@example.com</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center flex flex-col items-center justify-center mt-6 p-4">
      <p className="text-sm">Copyrights © 2024 All Rights Reserved by Software.</p>
    </div>
  </div>
</div>

  );
}
