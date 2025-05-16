"use client";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { useEffect, useMemo, useState } from "react";

const Hero: React.FC = () => {
  const [initParticles, setInitParticles] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInitParticles(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "character",
          options: {
            character: [
              {
                fill: true,
                font: "Font Awesome 5 Brands",
                style: "",
                value: ["\uf38b", "\uf3b9", "\uf13b"],
                weight: "400",
              },
              {
                fill: true,
                font: "Font Awesome 5 Brands",
                style: "",
                value: ["\uf41b", "\uf41f", "\uf420"],
                weight: "600",
              },
            ],
          },
        },
        size: {
          value: { min: 12, max: 20 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Hiệu ứng nền */}
      {initParticles && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className="relative z-10 text-center px-4">
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
      </div>
    </section>
  );
};

export default Hero;
