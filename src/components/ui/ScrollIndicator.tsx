"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ScrollIndicator() {
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const thumb = thumbRef.current;
    if (!thumb) return;

    const trackHeight = 60;
    const thumbHeight = 15;

    gsap.to(thumb, {
      y: trackHeight - thumbHeight,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(thumb);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Track */}
      <div
        className="relative overflow-hidden"
        style={{
          width: 1,
          height: 60,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Thumb */}
        <div
          ref={thumbRef}
          className="absolute top-0 left-0"
          style={{
            width: "100%",
            height: 15,
            background: "white",
          }}
        />
      </div>

      {/* Text */}
      <span
        className="uppercase font-medium"
        style={{
          fontSize: 13,
          color: "white",
          fontFamily: "var(--font-sans)",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          letterSpacing: "0.2em",
        }}
      >
        Scroll
      </span>
    </div>
  );
}
