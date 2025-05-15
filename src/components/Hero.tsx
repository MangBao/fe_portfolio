"use client";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[90vh] text-center px-4">
      <img
        src="/avatar.png"
        alt="Avatar"
        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Hello, I'm <span className="text-blue-600">Your Name</span>
      </h1>

      <TypeAnimation
        sequence={[
          "Frontend Developer 👨‍💻",
          2000,
          "UI/UX Enthusiast 🎨",
          2000,
          "React & Vue.js Lover 💡",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl text-gray-600 mb-6"
      />

      <div className="flex gap-4 mb-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your@email.com"
          className="text-gray-600 hover:text-blue-600 text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>

      <a
        href="/cv.pdf"
        download
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
      >
        Download CV
      </a>
    </section>
  );
}
