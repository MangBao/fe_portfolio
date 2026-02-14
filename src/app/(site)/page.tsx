import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio",
};

export default function HomePage() {
  return (
    <div className="section">
      <div className="content-wrapper">
        {/* Hero Section */}
        <div className="relative">
          {/* Greeting */}
          <p className="text-lg text-light mb-4">
            Hey, <span className="inline-block">👋</span> I&apos;m a Full Stack
            Developer
          </p>

          {/* Name - Large Typography */}
          <h1 className="text-cyan font-bold uppercase tracking-tight">
            MBAO DEV
          </h1>

          {/* Scroll Indicator */}
          <div className="fixed right-8 bottom-1/4 flex flex-col items-center gap-4">
            <div className="w-px h-16 bg-cyan"></div>
            <span className="text-xs text-cyan uppercase tracking-widest rotate-90 origin-center translate-y-8">
              Scroll
            </span>
          </div>

          {/* Description */}
          <div className="mt-16 max-w-md ml-auto text-right">
            <p className="text-sm text-slate leading-relaxed">
              I craft fast, scalable, and user-friendly web applications with
              modern JavaScript frameworks — combining React on the frontend
              with robust server-side solutions using Node.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
