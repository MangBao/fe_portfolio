"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const menuLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Project" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const MENU_WIDTH = 160;
const BUTTON_HEIGHT = 44;
const BORDER_RADIUS_CLOSED = 30;
const BORDER_RADIUS_OPEN = 20;

export default function ExpandingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<SVGSVGElement>(null);
  const rightArrowRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isFirstRender = useRef(true);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Animation when isOpen changes
  useEffect(() => {
    // Skip the closing animation on initial mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const container = containerRef.current;
    const content = contentRef.current;
    const leftArrow = leftArrowRef.current;
    const rightArrow = rightArrowRef.current;
    const line = lineRef.current;
    const iconContainer = iconContainerRef.current;

    if (!container || !content) return;

    // Kill the previous timeline completely (including onComplete callbacks)
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    if (isOpen) {
      // === OPENING ANIMATION ===
      // Reset all properties to their "closed" state before animating open
      gsap.set(content, { visibility: "visible", opacity: 0 });
      gsap.set(".menu-link", { y: 12, opacity: 0 });
      gsap.set(line, { height: 0, opacity: 0 });
      gsap.set(leftArrow, { marginRight: -3 });
      gsap.set(rightArrow, { marginLeft: -3 });
      const contentHeight = content.scrollHeight;
      const totalHeight = BUTTON_HEIGHT + contentHeight;

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl
        // Container expand
        .to(
          container,
          {
            height: totalHeight,
            borderRadius: BORDER_RADIUS_OPEN,
            duration: 0.5,
            ease: "power4.out",
          },
          0,
        )
        // Icon rotation 90deg clockwise
        .to(
          iconContainer,
          {
            rotation: 90,
            duration: 0.4,
            ease: "power3.inOut",
          },
          0,
        )
        // Expand dashed line (vertical in DOM, horizontal visual)
        .to(
          line,
          {
            height: 16, // Expand height
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0.1,
        )
        // Spread arrows apart (remove tight squeeze)
        .to(
          leftArrow,
          {
            marginRight: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          0.1,
        )
        .to(
          rightArrow,
          {
            marginLeft: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          0.1,
        )
        // Content fade in
        .to(
          content,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0.15,
        )
        // Menu links stagger
        .fromTo(
          ".menu-link",
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            stagger: 0.04,
            ease: "power3.out",
          },
          0.2,
        );
    } else {
      // === CLOSING ANIMATION ===
      const tl = gsap.timeline({
        onComplete: () => {
          // Only hide if we're still the active timeline (not killed)
          if (tlRef.current === tl) {
            gsap.set(content, { visibility: "hidden" });
          }
        },
      });
      tlRef.current = tl;

      tl
        // Menu links fade out quickly
        .to(
          ".menu-link",
          {
            y: -8,
            opacity: 0,
            duration: 0.12,
            stagger: { each: 0.02, from: "end" },
            ease: "power2.in",
          },
          0,
        )
        // Content fade out
        .to(
          content,
          {
            opacity: 0,
            duration: 0.15,
            ease: "power2.in",
          },
          0.05,
        )
        // Container shrink
        .to(
          container,
          {
            height: BUTTON_HEIGHT,
            borderRadius: BORDER_RADIUS_CLOSED,
            duration: 0.35,
            ease: "power3.inOut",
          },
          0.1,
        )
        // Icon rotation back to 0
        .to(
          iconContainer,
          {
            rotation: 0,
            duration: 0.3,
            ease: "power3.inOut",
          },
          0.05,
        )
        // Shrink dashed line
        .to(
          line,
          {
            height: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          0.05,
        )
        // Tighten arrows together
        .to(
          leftArrow,
          {
            marginRight: -3,
            duration: 0.2,
            ease: "power2.in",
          },
          0.05,
        )
        .to(
          rightArrow,
          {
            marginLeft: -3,
            duration: 0.2,
            ease: "power2.in",
          },
          0.05,
        );
    }

    // Cleanup: kill timeline when component unmounts
    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
  }, [isOpen]);

  // Set initial states
  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const line = lineRef.current;

    if (container) {
      gsap.set(container, {
        height: BUTTON_HEIGHT,
        borderRadius: BORDER_RADIUS_CLOSED,
      });
    }
    if (content) {
      gsap.set(content, { visibility: "hidden", opacity: 0 });
    }
    if (line) {
      gsap.set(line, { height: 0, opacity: 0 });
    }
  }, []);

  return (
    <div ref={menuRef} className="absolute top-0 right-0 z-50">
      {/* Single Container - expands as one unit */}
      <div
        ref={containerRef}
        className="bg-light overflow-hidden"
        style={{
          width: MENU_WIDTH,
          boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Header / Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-5 text-dark"
          style={{ height: BUTTON_HEIGHT }}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="text-sm font-medium">Menu</span>
          <div
            ref={iconContainerRef}
            className="flex items-center justify-center"
          >
            {/* Left/Top Arrow */}
            <svg
              ref={leftArrowRef}
              className="w-3.5 h-3.5 text-dark"
              style={{ marginRight: -2 }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>

            {/* Middle Dashed Line (hidden by default) */}
            {/* Height varies, Width is fixed. Rotates with container. */}
            <div
              ref={lineRef}
              className="w-[1.5px] bg-dark rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, currentColor 50%, transparent 50%)",
                backgroundSize: "100% 4px",
                backgroundRepeat: "repeat-y",
              }}
            />

            {/* Right/Bottom Arrow */}
            <svg
              ref={rightArrowRef}
              className="w-3.5 h-3.5 text-dark"
              style={{ marginLeft: -2 }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        {/* Menu Content */}
        <div ref={contentRef} className="flex flex-col gap-1 px-5 pb-4">
          {menuLinks.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`menu-link text-sm transition-colors py-2 hover:text-cyan ${
                  isActive
                    ? "text-cyan font-semibold"
                    : "text-dark/70 font-normal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
