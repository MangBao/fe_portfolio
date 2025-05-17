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
import myAvtRmBg from "../assets/my-avt-c-removebg-preview.png";

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
      autoPlay: true,
      fpsLimit: 120,
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: true,
              force: 350,
              smooth: 20,
            },
          },
        },
        modes: {
          bounce: {
            distance: 100,
          },
          bubble: {
            distance: 100,
            duration: 0.4,
            size: 40,
            color: {
              value: "#05edfd",
            },
            opacity: 8,
            mix: false,
          },

          repulse: {
            distance: 200,
            factor: 200,
            speed: 1,
            maxSpeed: 50,
          },
        },
      },
      particles: {
        collisions: {
          enable: true,
          mode: "bounce",
        },
        color: {
          value: "#fff",
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
    <section className="relative w-full min-h-[800px] h-screen bg-primary_03 text-white flex items-center justify-center overflow-hidden">
      {/* Hiệu ứng Particles */}
      {initParticles && (
        <div className="absolute inset-0 w-full h-full z-[4]">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="w-full h-full"
          />
        </div>
      )}
      {/* Nội dung chính */}
      <div className="absolute inset-0 w-full h-full z-[5] pt-[calc(5vh-1rem)]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          {/* Text và social media */}
          <div className="text-left px-5 mt-[calc(6vh-1rem)] md:min-w-[900px]">
            <div>
              <h3 className="text-[1.3rem] md:text-[3.2rem] font-bold">
                Hello It's Me
              </h3>
              <h1 className="text-[2.2rem] md:text-[5.6rem] font-bold leading-tight">
                Mang Bao
              </h1>
              <h3 className="text-[1.3rem] md:text-[3.2rem] font-bold mb-4">
                And I'm a{" "}
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
                  className="text-blue-600"
                />
              </h3>
            </div>
            <div className="flex justify-center gap-2 my-3">
              <a
                href="https://github.com/MangBao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_0.75rem_#2563eb] transition-all duration-500"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_0.75rem_#2563eb] transition-all duration-500"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:mangbao1301@gmail.com"
                className="flex items-center justify-center w-8 h-8 border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_0.75rem_#2563eb] transition-all duration-500"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
            <div>
              <a
                href="/cv.pdf"
                download
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full shadow-[0_0_0.5rem_#2563eb] hover:bg-blue-700 transition-all font-semibold tracking-wide mt-1"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Avatar với SVG blob */}
          <div className="self-center">
            <svg
              className="w-[200px] h-[187px]"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image x="-15" y="18" href={myAvtRmBg} className="w-[240px]" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* Scroller */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[4]">
        <a href="#about">
          <div className="w-10 h-20 border-4 border-blue-600 rounded-[1.6rem] relative">
            <div className="absolute left-1/4 p-2 bg-blue-600 rounded-full mt-2 mb-2 animate-[swingParent_2s_ease-in-out_infinite_alternate]"></div>
          </div>
        </a>
      </div>
      {/* CSS cho scroller animation */}
      <style>
        {`
          @keyframes swingParent {
            from {
              transform: translateY(0);
              top: 5%;
            }
            to {
              top: 72%;
              transform: translateY(-100%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
