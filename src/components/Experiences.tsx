"use client";
import React from "react";
// import experiences from "../data/experiences"; // Adjust path based on your project structure

const Experience: React.FC = () => {
  const experiences = [
    {
      id: '001',
      company: 'Gravity Vietnam',
      start: '01/2022',
      end: '04/2022',
      task: [
        {
          id: ['fe'],
          desc: 'Develop sophisticated, animated, responsive and adaptive websites using HTML5, CSS, jQuery, Tailwind CSS, Laravel, PHP, MySQL, SEO; for all browsers, optimized for desktop, notebook, smartphones and tablets (iOS, Android, Windows).'
        }
      ],
    },
    {
      id: '002',
      company: 'TMA Solutions Binh Dinh',
      start: '7/2023',
      end: 'Present',
      task: [
        {
          id: ['fe', 'be'],
          desc: 'Develop system websites to manage network status, IPs, DNS, Servers and provide warnings. Website management uses Python, Flask Framework, RESTful API, ReactJS, Material-UI, Cassandra, and Docker.'
        },
        {
          id: ['auto'],
          desc: "Install automation framework for project, and write automation scripts based on testers' test cases. Join the company's training team for interns."
        }
      ],
    },
  ];
  return (
    <section className="section" id="experiences">
      <div className="title">
        <span className="text-primary-02 uppercase">Where I do</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title">
          {["E", "X", "P", "E", "R", "I", "E", "N", "C", "E", "S"].map(
            (char, index) => (
              <span key={index} className="bounce inline-block">
                {char}
              </span>
            )
          )}
        </h2>
      </div>
      <div className="exp-content">
        <ul className="timeline relative before:content-[''] before:absolute before:top-0 before:left-[2em] before:ml-[-1px] before:w-[2px] before:h-full before:bg-primary-02">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="timeline-event relative group"
            >
              <div className="timeline-event-icon absolute top-0 left-[2em] w-[1em] h-[1em] rotate-45 bg-primary-02 outline-[10px] outline outline-primary-03 transition-transform duration-200 ease-in group-hover:rotate-[-45deg] group-hover:bg-primary-04 m-[0.5em_0.5em_0.5em_-0.5em]" />
              <div className="timeline-event-copy p-8 relative -top-[1.875em] left-[4em] w-[80%] text-white">
                <p className="timeline-event-thumbnail inline-block text-[0.75em] bg-primary-01 text-white py-[0.25em] px-[1em] mb-[1.2em] transition-shadow duration-500 ease-in group-hover:shadow-[inset_40em_0_0_0_#a83279]">
                  {exp.start} - {exp.end}
                </p>
                <h3 className="text-[1.85em] mb-[0.125em] font-bold">{exp.company}</h3>
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