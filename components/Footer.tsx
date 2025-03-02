"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-primary flex flex-col justify-between px-10 text-white">
      <div className=" mx-auto">
        <div className="md:flex sm:flex-row gap-3 justify-between py-8 sm:space-y-6">
          <div className="md:w-[60%] w-full space-y-4">
            {/* <Image src={whitelogo} alt="robofx" /> */}
            <h2>MRST Consultancy L.L.C-FZ </h2>
            <p>
              At MRST Consultancy L.L.C-FZ, we bridge international markets,
              facilitate cross-border investments, and guide students toward
              educational excellence worldwide.
            </p>
            <div className="flex items-center gap-4">
              <Icon icon="tabler:clock" width={28} />
              <div>
                <p>Mon - Fri - 09:00AM - 06:00PM </p>
                <p>Saturday - 09:00AM - 05:00PM</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/6 w-full space-y-4">
            <h3 className=" pb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About Us</Link>
              </li>
              <li>
                <Link href={"/businesssolutions"}>Business Solutions</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          {/* <div className="space-y-2">
            <h3 className="border-storke border-b-1 pb-2">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/support"}>Support</Link>
              </li>
              <li>
                <Link href={"/"}>Terms and Conditions</Link>
              </li>
              <li>
                <Link href={"/"}>Refund Policy</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy and Policy</Link>
              </li>
            </ul>
          </div> */}
          <div className="md:w-1/3 w-full space-y-4">
            <h3 className=" pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <div className="flex items-start gap-2">
                  <Icon icon="ph:map-pin" />
                  <p>
                    MRST CONSULTANCY L.L.C-FZ Meydan Grandstand
                     <br />
                     6th floor,Meydan Road
                    <br />
                    Nad Al Sheba, Dubai
                    <br />
                    United Arab Emirates
                  </p>
                </div>
              </li>
              <li>
                <Link href={"/"} className="flex items-center gap-2">
                  <Icon icon="solar:phone-linear" />
                  <span>+971 50 363 0578</span>
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex items-center gap-2">
                  <Icon icon="clarity:envelope-solid" />
                  <p>data@example.com</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="text-center flex flex-col items-center justify-center border-t border-stroke mt-6 p-4">
  <p className="text-sm">Copyrights © 2024 All Rights Reserved by Software.</p>
</div>

      </div>
    </div>
  );
}
