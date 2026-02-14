"use client";

import { useEffect, useState, useCallback } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOnLightArea, setIsOnLightArea] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check if the cursor is over a light area
  const checkBackgroundBrightness = useCallback((x: number, y: number) => {
    const element = document.elementFromPoint(x, y);
    if (!element) return;

    // Check if element or its parents have light background classes
    let currentElement: Element | null = element;
    while (currentElement) {
      const computedStyle = window.getComputedStyle(currentElement);
      const bgColor = computedStyle.backgroundColor;

      // Parse RGB values
      const rgb = bgColor.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const r = parseInt(rgb[0]);
        const g = parseInt(rgb[1]);
        const b = parseInt(rgb[2]);
        const a = rgb[3] ? parseFloat(rgb[3]) : 1;

        // Only check if background is not transparent
        if (a > 0.1) {
          // Calculate relative luminance
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setIsOnLightArea(luminance > 0.5);
          return;
        }
      }

      // Check for light background classes
      if (currentElement.classList) {
        const hasLightBg =
          currentElement.classList.contains("bg-light") ||
          currentElement.classList.contains("bg-white") ||
          currentElement.classList.contains("bg-zinc-50") ||
          currentElement.classList.contains("light-area");

        if (hasLightBg) {
          setIsOnLightArea(true);
          return;
        }
      }

      currentElement = currentElement.parentElement;
    }

    setIsOnLightArea(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      checkBackgroundBrightness(e.clientX, e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.classList.contains("cursor-pointer");

      setIsHovering(isInteractive);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [checkBackgroundBrightness]);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${
        isOnLightArea ? "custom-cursor--dark" : "custom-cursor--light"
      } ${isHovering ? "custom-cursor--hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
