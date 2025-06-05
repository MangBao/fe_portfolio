"use client";
import React from "react";
import dayjs from "dayjs";
import { experiences } from "../utils/constant";

const Experience: React.FC = () => {
  const formatMonthYear = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    return dayjs(dateStr, "MM/YYYY").format("MMM, YYYY");
  };

  return (
    <section>
      <div className="title">
        <span className="text-primary-02 uppercase">Where I do</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title flex gap-2">
          {["E", "X", "P", "E", "R", "I", "E", "N", "C", "E", "S"].map(
            (char, index) => (
              <span key={index} className="bounce">
                {char}
              </span>
            )
          )}
        </h2>
      </div>
      <div className="exp-content">
        <ul className="timeline relative before:content-[''] before:absolute before:top-0 before:left-[2em] before:ml-[-1px] before:w-[2px] before:h-full before:bg-primary_02">
          {experiences.map((exp) => (
            <li key={exp.id} className="timeline-event relative group">
              <div className="timeline-event-icon absolute top-0 left-[2em] w-[1em] h-[1em] rotate-45 bg-primary-02 outline-[10px] outline outline-primary_03 transition-transform duration-200 ease-in group-hover:rotate-[-45deg] group-hover:bg-primary_04 bg-primary_02 m-[0.5em_0.5em_0.5em_-0.5em]" />
              <div className="timeline-event-copy p-8 relative -top-[1.875em] left-[4em] w-[80%] text-white">
                <p className="timeline-event-thumbnail inline-block text-[0.75em] bg-primary-01 text-white py-[0.25em] px-[1em] mb-[1.2em] transition-shadow duration-500 ease-in group-hover:shadow-[inset_40em_0_0_0_#a83279]">
                  {formatMonthYear(exp.start)} - {formatMonthYear(exp.end)}
                </p>
                <h3 className="text-[1.85em] mb-[0.125em] font-bold">
                  {exp.company}
                </h3>
                {exp.task.map((task) => (
                  <p key={task.id.join("-")} className="pb-[1.2em] text-base">
                    {task.desc}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
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

export default Experience;
