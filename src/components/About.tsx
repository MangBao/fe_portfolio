// src\components\About.tsx
"use client";
import React from "react";
// import spareAvt from "../assets/square-avt.png";
import { useAbout } from "../hooks/useAbout";
import { titleAboutMe } from "../utils/constant";
import Loading from "./Loading";
import toast from "react-hot-toast";

const About: React.FC = () => {
  const { data, isLoading, isError, error } = useAbout();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.log(error.message);

    return toast.error(
      "Tải dữ liệu giới thiệu thất bại. Vui lòng thử lại sau!"
    );
  }

  const titleParts =
    data?.title?.filter((value) => value === titleAboutMe)[0] || titleAboutMe;
  const contentParagraphs = data?.content || [];

  return (
    <section>
      <div className="title">
        <span className="text-primary-02 uppercase">
          {data?.title?.[1] ?? "Introduction"}
        </span>
        <h2 className="text-title-sm md:text-title-lg tracking-title flex gap-2">
          {[...titleParts].map((char, index) => {
            const displayChar = char === " " ? "\u00A0" : char;
            return (
              <span key={index} className="bounce">
                {displayChar}
              </span>
            );
          })}
        </h2>
      </div>

      <div className="about-content flex flex-col-reverse md:flex-row">
        <div className="about-content-text w-full self-center text-white">
          {contentParagraphs.map((paragraph: string, index: number) => (
            <React.Fragment key={index}>
              <p
                className={
                  index === 0 ? "content-text-title text-primary-02" : ""
                }
              >
                {paragraph.trim()}
              </p>
              <div className="h-4" />
            </React.Fragment>
          ))}
        </div>

        <div className="about-content-img w-full self-center">
          <div className="content-wrap-img h-[300px] w-[80%] md:w-[60%] lg:w-[50%] mx-auto my-8 lg:my-0 flex items-center justify-center">
            <div
              className="content-img about-blob-img drop-shadow-div w-full h-full"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dhe0w2tsg/image/upload/${data?.image})`,
              }}
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
            background: #05edfd;
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
