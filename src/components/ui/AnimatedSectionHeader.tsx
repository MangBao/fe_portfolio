"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedSectionHeaderProps = {
  subtitle: ReactNode;
  title: ReactNode;
};

export default function AnimatedSectionHeader({
  subtitle,
  title,
}: AnimatedSectionHeaderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const leftBracketRef = useRef<HTMLSpanElement>(null);
  const rightBracketRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const subtitleEl = subtitleRef.current;
    const titleEl = titleRef.current;
    const lineEl = lineRef.current;
    const leftBracketEl = leftBracketRef.current;
    const rightBracketEl = rightBracketRef.current;

    if (
      !wrapper ||
      !subtitleEl ||
      !titleEl ||
      !lineEl ||
      !leftBracketEl ||
      !rightBracketEl
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([subtitleEl, titleEl], { y: 20, opacity: 0 });
      gsap.set(lineEl, { scaleX: 0, transformOrigin: "left center" });
      gsap.set([leftBracketEl, rightBracketEl], { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      tl.to(titleEl, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      })
        .to(subtitleEl, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        })
        .to(
          lineEl,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
            transformOrigin: "left center",
          },
          "<",
        )
        .to(
          [leftBracketEl, rightBracketEl],
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        );
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="w-full flex flex-col py-10">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div
          ref={subtitleRef}
          className="text-cyan-400 font-mono text-lg font-semibold tracking-wide mb-4 md:mb-0"
        >
          {subtitle}
        </div>
        <div
          ref={titleRef}
          className="text-white text-3xl md:text-5xl font-bold max-w-2xl"
        >
          {title}
        </div>
      </div>

      <div className="flex items-center w-full text-cyan-400 font-mono text-sm">
        <span ref={leftBracketRef} className="opacity-0">
          {"</"}
        </span>
        <div
          ref={lineRef}
          className="h-[1px] bg-gray-600 flex-grow origin-left"
        />
        <span ref={rightBracketRef} className="opacity-0">
          {">"}
        </span>
      </div>
    </div>
  );
}
