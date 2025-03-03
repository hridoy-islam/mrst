"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logo from "@/public/mlogo.png";
import { ChevronDown, MenuIcon } from "lucide-react";

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

  // Close mobile and desktop menus when clicking outside
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

  // Track scroll direction and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down and show when scrolling up
      if (currentScrollY > lastScrollY) {
        setHideNavbar(true); // Hide when scrolling down
      } else {
        setHideNavbar(false); // Show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Navbar
      className={`md:px-28 w-full mx-auto shadow-lg transition-all duration-300 ${
        hideNavbar ? "translate-y-[-100%]" : "translate-y-0"
      } ${lastScrollY > 0 ? "fixed top-0 left-0 right-0 z-50" : "relative"}`}
      maxWidth="full"
      isBlurred={false}
    >
      {/* Left side */}

      <div className="flex flex-row justify-between items-center w-full">
        {/* Left Side - Menu Toggle (Visible on Mobile) */}
        <NavbarMenuToggle
          icon={<MenuIcon className="w-6 h-6 text-primary" />} // Lucide icon
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div>

        <NavbarBrand>
          <Link href="/">
            <Image src={logo} alt="logo" width={100} />
          </Link>
        </NavbarBrand>
        </div>

        {/* Right Side - Empty div to maintain space balance */}
        
      </div>

      {/* Desktop Navigation */}
      <NavbarContent
        justify="end"
        className="text-xl hidden bg-secondary md:flex gap-8"
        ref={desktopMenuRef}
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                href={item.path}
                className="px-3 py-2 rounded-md transition-all duration-300 relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Navigation with Framer Motion */}
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
    </Navbar>
  );
}
