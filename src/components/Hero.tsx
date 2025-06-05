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

      fullScreen: {
        enable: false,
        zIndex: 0,
      },

      detectRetina: true,
      fpsLimit: 120,

      interactivity: {
        // detectsOn: ".content-hero",
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: true,
              force: 350,
              smooth: 20,
            },
          },

          resize: {
            delay: 0.5,
            enable: true,
          },
        },

        modes: {
          bounce: {
            distance: 100,
          },
          bubble: {
            distance: 100,
            duration: 0.4,
            size: 100,
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
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          direction: MoveDirection.none,
          drift: 0,
          enable: true,
          random: false,
          size: false,
          speed: 0.8,
          outModes: {
            default: OutMode.out,
          },
        },
        number: {
          //   limit: 0,
          value: 30,
        },

        opacity: {
          random: {
            enable: true,
            minimumValue: 0.4,
            maxValue: 0.6,
          },
          value: 0.6,
          animation: {
            count: 0,
            enable: true,
            speed: 0.2,
            decay: 0,
            sync: true,
            destroy: "none",
            startValue: "random",
          },
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
          animation: {
            count: 0,
            enable: true,
            speed: 0.2,
            decay: 0,
            sync: true,
            destroy: "none",
            startValue: "random",
          },
        },

        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      smooth: true,
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
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center container mx-auto lg:gap-10 gap-6">
          {/* Text và social media */}
          <div className="text-left mt-[calc(6vh-1rem)] lg:min-w-[780px] sm:min-w-[540px] min-w-full">
            <div>
              <h3 className="text-[1.5rem] xl:text-[3rem] font-bold">
                Hello It's Me
              </h3>
              <h1 className="text-[2rem] xl:text-[5rem] font-bold leading-tight">
                Mang Bao
              </h1>
              <h3 className="text-[1.5rem] xl:text-[3rem] font-bold mb-4">
                And I'm a{" "}
                <TypeAnimation
                  sequence={[
                    "Frontend Developer 👨‍💻",
                    2000,
                    "Let't get in touch💡",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-primary_02"
                />
              </h3>
            </div>
            <div className="flex gap-2 my-3">
              <a
                href="https://github.com/MangBao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 border-2 border-primary_02 rounded-full text-primary_02 hover:bg-primary_02 hover:text-white hover:shadow-[0_0_0.75rem_#2563eb] transition-all duration-500"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 border-2 border-primary_02 rounded-full text-primary_02 hover:bg-primary_02 hover:text-white hover:shadow-[0_0_0.75rem_#2563eb] transition-all duration-500"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:mangbao1301@gmail.com"
                className="flex items-center justify-center w-8 h-8 border-2 border-primary_02 rounded-full text-primary_02 hover:bg-primary_02 hover:text-white hover:shadow-[0_0_0.75rem_#2563eb] transition-all duration-500"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
            <div>
              <a
                href="/cv.pdf"
                download
                className="inline-block px-4 py-2 bg-primary_02 text-primary_01 rounded-full shadow-[0_0_0.5rem_#2563eb] transition-all font-semibold tracking-wide mt-1"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Avatar với SVG blob */}
          <div className="self-center">
            <svg
              className="xl:w-64 w-48 fill-primary_02"
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
      <div className="absolute xl:bottom-40 bottom-28 left-1/2 -translate-x-1/2 z-50">
        <a href="#about">
          <div className="w-10 h-20 border-4 border-primary_02 rounded-[1.6rem] relative">
            <div className="absolute left-1/4 p-2 bg-primary_02 rounded-full mt-2 mb-2 animate-[swingParent_2s_ease-in-out_infinite_alternate]"></div>
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
