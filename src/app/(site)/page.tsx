import { Metadata } from "next";
import Image from "next/image";
import HeroHeader from "@/components/sections/HeroHeader";
import HeroMiddle from "@/components/sections/HeroMiddle";
import HeroFooter from "@/components/sections/HeroFooter";
import avatarImg from "@/assets/images/avt-ai-removebg-preview.png";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio",
};

export default function HomePage() {
  return (
    <>
      {/* ========================================
         Fixed Background — stays in place on scroll
         ======================================== */}
      <div className="background-layer flex items-end justify-center">
        {/* Glow */}
        <div
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2"
          style={{
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(5,237,253,0.25) 0%, rgba(5,237,253,0.08) 40%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        {/* Avatar */}
        <Image
          src={avatarImg}
          alt="MBAO DEV"
          width={420}
          height={420}
          className="object-cover"
          priority
        />
      </div>

      {/* ========================================
         Section 1: Hero — 100dvh, content scrolls over BG
         ======================================== */}
      <section id="hero" className="hero-container">
        <div className="content-layer container">
          <HeroHeader />
          <HeroMiddle />
          <HeroFooter />
        </div>
      </section>

      {/* ========================================
         Section 2: About — Test section for scroll
         ======================================== */}
      <section
        id="about"
        className="content-section"
        style={{ backgroundColor: "#181a24" }}
      >
        <div className="container py-20">
          <h2 className="text-3xl font-bold text-cyan mb-6">About Me</h2>
          <p className="text-slate max-w-2xl leading-relaxed">
            This is a test section to verify scrolling works correctly. The
            background stays fixed in place while this content scrolls over it,
            creating a modern parallax effect. Replace this with your actual
            About content.
          </p>
        </div>
      </section>
    </>
  );
}
