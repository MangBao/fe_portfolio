"use client";
import React from "react";
import spareAvt from "../assets/square-avt.png";

const About: React.FC = () => {
  return (
    <section>
      <div className="title">
        <span className="text-primary-02 uppercase">Introduction</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title flex gap-2">
          {["A", "B", "O", "U", "T", "\u00A0", "M", "E"].map((char, index) => (
            <span key={index} className="bounce">
              {char}
            </span>
          ))}
        </h2>
      </div>
      <div className="about-content flex flex-col-reverse md:flex-row">
        <div className="about-content-text w-full self-center text-white">
          <p className="content-text-title text-primary-02">
            Hi, I’m Mang Bao — a passionate Frontend Developer with over 3 years
            of experience in building and maintaining modern web applications. I
            graduated from Nha Trang University with a degree in Software
            Technology and have been deeply involved in both UI/UX development
            and backend integration ever since.
          </p>

          <div className="h-4" />
          <p>
            Throughout my career, I’ve contributed to various projects at
            companies like Gravity Global, TMA Solutions, and LTV Software,
            where I worked on frontend development, API integration, performance
            optimization, and bug fixing. I’ve also actively collaborated with
            teams to address user feedback and deliver projects efficiently.
          </p>

          <div className="h-4" />
          <p>
            Currently, I’m continuing to sharpen my skills in both frontend and
            backend development, while also exploring DevOps. My long-term goal
            is to become a skilled Fullstack Developer who can take ownership of
            end-to-end product development and bring lasting value to the team
            and company.
          </p>
        </div>
        <div className="about-content-img w-full self-center">
          <div className="content-wrap-img h-[300px] w-[80%] md:w-[60%] lg:w-[50%] mx-auto my-8 lg:my-0 flex items-center justify-center">
            <div
              className="content-img about-blob-img drop-shadow-div w-full h-full"
              style={{ backgroundImage: `url(${spareAvt})` }}
            />
          </div>
        </div>
      </div>
      <style>
        {`
          .bounce {
            transition: all 0.3s ease-out;
          }
          .bounce:hover {
            display: inline-block;
            animation: rubberband 0.8s ease-out;
          }
          .about-blob-img {
            animation: morph 3.6s linear infinite;
            background: #05edfd; /* primary-02 */
            background-size: cover;
            background-position: center;
            outline: 1px solid transparent;
          }
          .drop-shadow-div {
            filter: drop-shadow(0 0 1.5rem #cbbde5);
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
          @keyframes morph {
            0%, to { border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%; }
            34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
            67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
          }
        `}
      </style>
    </section>
  );
};

export default About;
