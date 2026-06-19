"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ExpandingMenu from "@/components/ui/ExpandingMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] pt-4 transition-all duration-[400ms] ease-in-out ${
        scrolled ? "scrolled-nav" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-medium text-light hover:text-cyan transition-colors uppercase tracking-wider"
          >
            MBAO-DEV
          </Link>

          {/* Expanding Menu */}
          <ExpandingMenu />
        </div>
      </div>
    </nav>
  );
}
