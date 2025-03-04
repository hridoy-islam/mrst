"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import logo from "@/public/mlogo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Business Solutions", path: "/businesssolutions" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideNavbar(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
    className={`w-full bg-secondary shadow-lg transition-all duration-300 ${
      hideNavbar ? "translate-y-[-100%]" : "translate-y-0"
    } ${lastScrollY > 0 ? "fixed top-0 left-0 right-0 z-50" : "relative"}`}
  >
    <div className="hidden mx-auto max-md:flex justify-between items-center">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuIcon className="w-6 h-6 text-primary" />
      </button>
      <Link href="/">
        <Image src={logo} alt="logo" width={100} />
      </Link>
    </div>

    <div className="container ">
      <div
        className="w-full bg-secondary md:flex items-center justify-between"
        ref={desktopMenuRef}
      >
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={100} />
        </Link>
        <div className="flex gap-8">
          {menuItems.map((item, index) => (
            <motion.div key={index} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.path}
                className="py-2 rounded-md transition-all duration-300 relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="fixed top-0 right-0 w-64 h-screen bg-primary shadow-lg md:hidden flex flex-col p-6 z-[999]"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-2xl mb-6"
          >
            ✕
          </button>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.path}
                className="block py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </header>

  );
}