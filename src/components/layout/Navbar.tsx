"use client";

import Link from "next/link";
import ExpandingMenu from "@/components/ui/ExpandingMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
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
