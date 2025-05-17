"use client";
import React from "react";
import spareAvt from "../assets/square-avt.png";

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="title">
        <span className="text-primary-02 uppercase">Introduction</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title">
          {["A", "B", "O", "U", "T", " ", "M", "E"].map((char, index) => (
            <span key={index} className="bounce inline-block">
              {char}
            </span>
          ))}
        </h2>
      </div>
      <div className="about-content flex flex-col-reverse md:flex-row mt-10">
        <div className="about-content-text w-full self-center text-white">
          <p className="content-text-title text-primary-02">
            Hello there, I'm so happy you are here!{" "}
            {/* <FaClover className="inline animate-spin" /> */}
          </p>
          <div className="h-4" />
          <p>
            My name is Mang Bao. I'm 23 years old. I graduated from Nha Trang
            University with a degree in Software Technology.
          </p>
          <div className="h-4" />
          <p>
            I used to work as a Front-end Developer at 9thWonder Viet Nam with 4
            months of experience developing UI/UX of different websites, fixing
            bugs in the user interface and bugs in the Back-end. Here I learned
            a lot of Front End skills and gradually approached the Back-end.
            During my time working here, my team and me have successfully
            completed many website projects, handed them over to customers ahead
            of schedule, and received many compliments from customers.
          </p>
          <div className="h-4" />
          <p>
            After that, I continued my journey in a new working environment at
            TMA Solution Binh Dinh from July 2022 to the present. During more
            than 1 year of working, I participated in a company's web
            application project and learned many new skills such as ReactJS,
            Python,... Every day I fix errors in the interface, fix errors in
            the Back End, and code new functions. Together with my team, I
            completed many versions of the web application and received many
            good reviews from customers.
          </p>
          <div className="h-4" />
          <p>
            My goal for the next 3 years is to be a Senior Developer. I'm now
            ready for more challenges and this position really excites me.
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
