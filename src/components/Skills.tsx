"use client";
import React from "react";
import { skills } from "../utils/constant";

const Skills: React.FC = () => {
  return (
    <section>
      <div className="title">
        <span className="text-primary-02 uppercase">What I do</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title flex gap-2">
          {["S", "K", "I", "L", "L", "S"].map((char, index) => (
            <span key={index} className="bounce">
              {char}
            </span>
          ))}
        </h2>
      </div>
      <div className="slider-container border-l-2 border-r-2 border-primary-02">
        {/* Marquee 1: Scroll to left */}
        <div
          id="skills-container-first"
          className="marquee marquee--hover-pause enable-animation relative"
        >
          <div className="clothesline absolute top-[72px] w-full h-px bg-primary-02" />
          <ul className="marquee__content">
            {skills.map((skill) => (
              <li key={skill.id} className="skill-card">
                <div className="wrap-skill-card">
                  <img
                    src={`https://res.cloudinary.com/dhe0w2tsg/image/upload/${skill.icon}`}
                    alt={skill.title}
                    className="h-[50px] w-[50px] object-contain p-1"
                  />
                  <p className="text-[1.45rem] font-bold leading-[1.875rem]">
                    {skill.title}
                  </p>
                  <span className="text-base leading-[1.4rem] font-normal text-center">
                    {skill.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {/* Duplicate for seamless scroll */}
          <ul aria-hidden="true" className="marquee__content">
            {skills.map((skill) => (
              <li key={`${skill.id}-dup`} className="skill-card">
                <div className="wrap-skill-card">
                  <img
                    src={`https://res.cloudinary.com/dhe0w2tsg/image/upload/${skill.icon}`}
                    alt={skill.title}
                    className="h-[50px] w-[50px] object-contain p-1"
                  />
                  <p className="text-[1.45rem] font-bold leading-[1.875rem]">
                    {skill.title}
                  </p>
                  <span className="text-base leading-[1.4rem] font-normal text-center">
                    {skill.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Marquee 2: Scroll to right */}
        <div
          id="skills-container-second"
          className="marquee marquee--hover-pause to-right enable-animation relative"
        >
          <div className="clothesline absolute top-[72px] w-full h-px bg-primary-02" />
          <ul className="marquee__content">
            {skills.map((skill) => (
              <li key={skill.id} className="skill-card">
                <div className="wrap-skill-card">
                  <img
                    src={`https://res.cloudinary.com/dhe0w2tsg/image/upload/${skill.icon}`}
                    alt={skill.title}
                    className="h-[50px] w-[50px] object-contain p-1"
                  />
                  <p className="text-[1.45rem] font-bold leading-[1.875rem]">
                    {skill.title}
                  </p>
                  <span className="text-base leading-[1.4rem] font-normal text-center">
                    {skill.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="marquee__content">
            {skills.map((skill) => (
              <li key={`${skill.id}-dup`} className="skill-card">
                <div className="wrap-skill-card">
                  <img
                    src={`https://res.cloudinary.com/dhe0w2tsg/image/upload/${skill.icon}`}
                    alt={skill.title}
                    className="h-[50px] w-[50px] object-contain p-1"
                  />
                  <p className="text-[1.45rem] font-bold leading-[1.875rem]">
                    {skill.title}
                  </p>
                  <span className="text-base leading-[1.4rem] font-normal text-center">
                    {skill.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>
        {`
          .marquee {
            --gap: 4.5rem;
            position: relative;
            display: flex;
            overflow: hidden;
            user-select: none;
            gap: var(--gap);
          }
          .marquee__content {
            flex-shrink: 0;
            display: flex;
            justify-content: space-around;
            gap: var(--gap);
            min-width: 100%;
            padding: 1.25rem 0;
          }
          .skill-card {
            width: 280px;
            height: 320px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 0.75rem;
            cursor: pointer;
            background: #67788c; /* primary-05 */
            color: white;
            padding: 0.75rem 1.5rem;
            margin: 2px;
          }
          .marquee__content li {
            z-index: 1;
            transition: all 0.6s ease;
            transform: scale(0.8) rotate(6.37998deg);
          }
          .wrap-skill-card {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem;
            flex-direction: column;
          }
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - var(--gap))); }
          }
          .enable-animation .marquee__content {
            animation: scroll 90s linear infinite;
          }
          .to-right .marquee__content {
            animation-direction: reverse;
          }
          .marquee--hover-pause:hover .marquee__content {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee__content {
              animation-play-state: paused !important;
            }
          }
          .bounce {
            transition: all 0.3s ease-out;
          }
          .bounce:hover {
            display: inline-block;
            animation: rubberband 0.8s ease-out;
          }
          @keyframes rubberband {
            0% { transform: scaleX(1); }
            40% { transform: scaleX(1.12) scaleY(0.75); }
            55% { transform: scaleX(0.85) scaleY(1); }
            65% { transform: scaleX(1.09) scaleY(0.85); }
            75% { transform: scaleX(0.9) scaleY(1); }
            90% { transform: scaleX(1.05) scaleY(0.95); }
            to { transform: scaleX(1) scaleY(1); }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
