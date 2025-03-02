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
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "Export & Import", path: "/services/export-import" },
        { name: "Mutual Investment", path: "/services/mutual-investment" },
        { name: "Student Consultancy", path: "/services/student-consultancy" },
      ],
    },
    { name: "Business Solutions", path: "/businesssolutions" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleSubMenu = (index: any) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  // Close mobile and desktop menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node)
      ) {
        setOpenSubMenu(null);
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
      className={`px-6 mx-auto shadow-lg transition-all duration-300 ${
        hideNavbar ? "translate-y-[-100%]" : "translate-y-0"
      } ${lastScrollY > 0 ? "fixed top-0 left-0 right-0 z-50" : "relative"}`}
      maxWidth="full"
      isBlurred={false}
    >
      {/* Left side */}
      <NavbarContent className="flex w-full flex-row md:justify-start justify-center items-center">
        <NavbarMenuToggle
          icon={<Icon icon="material-symbols:menu" width={24} />}
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand className="flex items-center flex-row max-md:justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" width={100} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent
        justify="end"
        className="text-xl hidden bg-secondary md:flex gap-8"
        ref={desktopMenuRef}
      >
        {menuItems.map((item, index) =>
          item.submenu ? (
            <NavbarItem key={index} className="relative">
              <motion.div whileTap={{ scale: 0.95 }} className="relative">
                <button
                  onClick={() => toggleSubMenu(index)}
                  className="cursor-pointer flex items-center gap-1 px-3 py-2 transition-all duration-300  group"
                >
                  {item.name} <ChevronDown size={16} />
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                {openSubMenu === index && (
                  <motion.div
                    className="absolute left-0 mt-4 w-48 shadow-lg bg-secondary duration-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className="block px-4 py-2 text-black  relative group"
                        onClick={() => setOpenSubMenu(null)}
                      >
                        {subItem.name}
                        <div className="absolute bottom-1  left-1/2 w-5/6 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center -translate-x-1/2 "></div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </NavbarItem>
          ) : (
            <NavbarItem key={index}>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.path}
                  className="px-3 py-2 rounded-md transition-all duration-300 relative group"
                  onClick={() => setOpenSubMenu(null)}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </motion.div>
            </NavbarItem>
          )
        )}
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
            className="fixed top-0 right-0 w-64 h-full bg-primary shadow-lg md:hidden flex flex-col p-6 z-50"
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
                {item.submenu ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-lg py-2 relative group"
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === item.name ? null : item.name)
                      }
                    >
                      {item.name}{" "}
                      <ChevronDown
                        size={16}
                        className={`${
                          openSubMenu === item.name ? "rotate-180" : ""
                        } transition-transform`}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-secondary group-hover:w-full transition-all duration-300"></div>
                    </button>
                    <AnimatePresence>
                      {openSubMenu === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              className="block py-2 text-lg"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="block py-2 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}
