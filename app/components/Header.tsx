"use client";

import React, { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

const services = [
  { label: "Point-to-Point", path: "/point-to-point-car-service" },
  { label: "Hourly Hire", path: "/hourly-hire-service" },
  { label: "As Directed", path: "/as-directed-service" },
];

const airports = [
  { label: "JFK Airport", path: "/jfk-airport-service" },
  { label: "Newark Airport (EWR)", path: "/newark-airport-service" },
  { label: "LaGuardia Airport (LGA)", path: "/laguardia-airport-service" },
  { label: "Teterboro Airport (TEB)", path: "/teterboro-airport-service" },
  { label: "Westchester County (HPN)", path: "/westchester-airport-service" },
];

const navItems: NavItem[] = [
  { label: "HOME", path: "/" },
  { label: "FLEET", path: "/fleet" },
  { 
    label: "SERVICES", 
    path: "/services",
    children: [
      { label: "Point-to-Point", path: "/point-to-point-car-service" },
      { label: "Hourly Hire", path: "/hourly-hire-service" },
      { label: "Airport Transfers", path: "/airport-transfer-service" },
      { label: "As Directed", path: "/as-directed-service" },
    ]
  },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

// 🔹 background images for each page
const pageBackgrounds: Record<string, string> = {
  "/": "/hero-section.png",
  "/fleet": "/serve-image.png",
  "/services": "/serve-image.png",
  "/about": "/about-bg.png",
  "/contact": "/contact-bg.png",
};

const HeaderBar: React.FC = () => {
  const pathname = usePathname();
  const backgroundImage = pageBackgrounds[pathname] || "/hero-section.png";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [airportMenuOpen, setAirportMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAirportOpen, setMobileAirportOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const airportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (airportRef.current && !airportRef.current.contains(event.target as Node)) {
        setAirportMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="relative w-full border-t border-t-[#777777] bg-[#232323] z-[10000]">
      {/* Background overlay */}


      <nav className="relative z-10 h-14 px-4 flex items-center justify-between md:justify-center">
        {/* Logo (mobile left, desktop centered) */}
        <Link href="/" className="flex block md:hidden items-center z-20">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={30}
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center h-14 list-none pb-0 m-0 relative">
          {navItems.map((item) => {
            const isActive = item.label === "SERVICES" 
              ? (pathname === item.path || 
                 pathname?.startsWith("/point-to-point") || 
                 pathname?.startsWith("/hourly-hire") || 
                 pathname?.startsWith("/airport-transfer") || 
                 pathname?.startsWith("/as-directed") ||
                 pathname?.startsWith("/jfk-airport") ||
                 pathname?.startsWith("/newark-airport") ||
                 pathname?.startsWith("/laguardia-airport") ||
                 pathname?.startsWith("/teterboro-airport") ||
                 pathname?.startsWith("/westchester-airport"))
              : pathname === item.path;

            if (item.label === "SERVICES" && item.children) {
              return (
                <li
                  key={item.label}
                  className="h-14 min-w-[90px] flex items-center justify-center text-[11px] font-hind tracking-wider border-[#444] relative"
                  ref={servicesRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div
                    className={`block px-3 py-1 h-full flex items-center justify-center transition-colors border-b-2 cursor-pointer ${
                      isActive
                        ? "border-[#008492] text-white font-semibold"
                        : "border-transparent text-[#ededed] hover:text-[#008492]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`ml-1 w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </div>
                  
                  {/* Services Dropdown */}
                  {servicesOpen && (
                    <div 
                      className="absolute top-full left-0 mt-0 bg-[#232323] min-w-[220px] shadow-lg border border-[#444] z-[10001]"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {/* Airport Transfers with Mega Menu */}
                      <div
                        className="relative group"
                        onMouseEnter={() => setAirportMenuOpen(true)}
                        onMouseLeave={() => setAirportMenuOpen(false)}
                      >
                        <Link
                          href="/airport-transfer-service"
                          className="block px-4 py-3 text-[#ededed] hover:bg-[#008492] hover:text-white transition-colors text-[11px] font-hind tracking-wider border-b border-[#444]"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <span>Airport Transfers</span>
                            <ChevronDown className="w-3 h-3 ml-2" />
                          </div>
                        </Link>
                        
                        {/* Airport Mega Menu - positioned outside the link */}
                        {airportMenuOpen && (
                          <div 
                            className="absolute left-full top-0 ml-0 bg-[#232323] min-w-[240px] shadow-lg border border-[#444] z-[10002]"
                            ref={airportRef}
                            onMouseEnter={() => setAirportMenuOpen(true)}
                            onMouseLeave={() => setAirportMenuOpen(false)}
                          >
                            {airports.map((airport) => (
                              <Link
                                key={airport.path}
                                href={airport.path}
                                className="block px-4 py-3 text-[#ededed] hover:bg-[#008492] hover:text-white transition-colors text-[11px] font-hind tracking-wider border-b border-[#444] last:border-b-0"
                                onClick={() => {
                                  setServicesOpen(false);
                                  setAirportMenuOpen(false);
                                }}
                              >
                                {airport.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {item.children
                        .filter((child) => child.label !== "Airport Transfers")
                        .map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className="block px-4 py-3 text-[#ededed] hover:bg-[#008492] hover:text-white transition-colors text-[11px] font-hind tracking-wider border-b border-[#444] last:border-b-0"
                            onClick={() => setServicesOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li
                key={item.label}
                className="h-14 min-w-[90px] flex items-center justify-center text-[11px] font-hind tracking-wider border-[#444]"
              >
                <Link
                  href={item.path!}
                  className={`block px-3 py-1 h-full flex items-center justify-center transition-colors border-b-2  ${isActive
                    ? "border-[#008492] text-white font-semibold"
                    : "border-transparent text-[#ededed] hover:text-[#008492]"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex-1 flex mr-5 justify-end md:hidden gap-1">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/dsl_limo25?igsh=c3A5eXY4NjlnYXN2&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/19178478075"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6 text-green-500" />
          </a>

          {/* Phone */}
          <a
            href="tel:+18006793415"
            className="flex items-center justify-center w-9 h-9 hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
            aria-label="Phone"
          >
            <FaPhone className="w-5 h-5 text-white" />
          </a>
        </div>



        {/* Mobile menu button */}
        <button
          className="md:hidden z-20 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {/* gg */}
      {/* Mobile menu with framer-motion animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 top-14 bg-[#232323]/95 backdrop-blur-sm flex flex-col px-5  justify-start py-6 space-y-6 md:hidden z-50 overflow-y-auto"
          >
            {navItems.map((item) => {
              const isActive = item.label === "SERVICES" 
                ? (pathname === item.path || 
                   pathname?.startsWith("/point-to-point") || 
                   pathname?.startsWith("/hourly-hire") || 
                   pathname?.startsWith("/airport-transfer") || 
                   pathname?.startsWith("/as-directed") ||
                   pathname?.startsWith("/jfk-airport") ||
                   pathname?.startsWith("/newark-airport") ||
                   pathname?.startsWith("/laguardia-airport") ||
                   pathname?.startsWith("/teterboro-airport") ||
                   pathname?.startsWith("/westchester-airport"))
                : pathname === item.path;

              if (item.label === "SERVICES" && item.children) {
                return (
                  <div key={item.label} className="space-y-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`text-lg font-medium transition-colors w-full text-left flex items-center justify-between ${
                        isActive
                          ? "text-[#008492] font-semibold"
                          : "text-white hover:text-[#008492]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {mobileServicesOpen && (
                      <div className="pl-4 space-y-2">
                        <Link
                          href="/airport-transfer-service"
                          onClick={() => setMobileOpen(false)}
                          className="block text-base text-[#ededed] hover:text-[#008492] transition-colors"
                        >
                          Airport Transfers
                        </Link>
                        
                        <button
                          onClick={() => setMobileAirportOpen(!mobileAirportOpen)}
                          className="text-base text-[#ededed] hover:text-[#008492] transition-colors w-full text-left flex items-center justify-between"
                        >
                          <span>Airport Services</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileAirportOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        {mobileAirportOpen && (
                          <div className="pl-4 space-y-2">
                            {airports.map((airport) => (
                              <Link
                                key={airport.path}
                                href={airport.path}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileServicesOpen(false);
                                  setMobileAirportOpen(false);
                                }}
                                className="block text-sm text-[#ededed] hover:text-[#008492] transition-colors"
                              >
                                {airport.label}
                              </Link>
                            ))}
                          </div>
                        )}
                        
                        {item.children
                          .filter((child) => child.label !== "Airport Transfers")
                          .map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="block text-base text-[#ededed] hover:text-[#008492] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium transition-colors ${isActive
                    ? "text-[#008492] font-semibold"
                    : "text-white hover:text-[#008492]"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderBar;
