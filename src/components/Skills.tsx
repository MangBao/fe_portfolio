"use client";
import React from "react";
import {
  htmlIcon,
  casIcon,
  cssIcon,
  dockerIcon,
  eslintIcon,
  flaskIcon,
  gitIcon,
  githubIcon,
  jsIcon,
  laravelIcon,
  muiIcon,
  mysqlIcon,
  pyIcon,
  reactIcon,
  rdtkIcon,
  rspdIcon,
  rpaIcon,
  seleniumIcon,
  twcssIcon,
  ubuntuIcon,
  jiraIcon,
  seoIcon,
} from "../utils/constant";

const Skills: React.FC = () => {
  const skills = [
    {
      id: "html",
      title: "HTML",
      icon: htmlIcon,
      description:
        "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
    },
    {
      id: "css",
      title: "CSS",
      icon: cssIcon,
      description:
        "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
    },
    {
      id: "mui",
      title: "Material UI",
      icon: muiIcon,
      description:
        "I have expertise in using Material UI to design website interfaces, ensuring the best user experience.",
    },
    {
      id: "twcss",
      title: "Tailwind CSS",
      icon: twcssIcon,
      description:
        "I have experience using TailwindCSS to design website interfaces, ensure website performance, and user experience.",
    },
    {
      id: "javascript",
      title: "JavaScript",
      icon: jsIcon,
      description:
        "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
    },
    {
      id: "react",
      title: "ReactJS",
      icon: reactIcon,
      description:
        "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
    },
    {
      id: "rdtk",
      title: "Redux Toolkit",
      icon: rdtkIcon,
      description:
        "In my React application, I used Redux Toolkit to manage the state of the application. I created slices, actions, and reducers to manage data and improve application performance.",
    },
    {
      id: "git",
      title: "Git",
      icon: gitIcon,
      description:
        "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
    },
    {
      id: "github",
      title: "GitHub",
      icon: githubIcon,
      description:
        "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
    },
    {
      id: "py",
      title: "Python",
      icon: pyIcon,
      description:
        "With 2 years of Python experience, I am adept at coding functions and creating API using Flask.",
    },
    {
      id: "flask",
      title: "Flask",
      icon: flaskIcon,
      description:
        "With 1.5 years of experience in Flask, I am proficient in the process of creating APIs, support functions and working on this framework.",
    },
    {
      id: "cas",
      title: "Cassandra",
      icon: casIcon,
      description:
        "In a project using Cassandra, I am familiar with data queries, ensuring product performance throughout the operation.",
    },
    {
      id: "eslint",
      title: "Eslint",
      icon: eslintIcon,
      description:
        "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
    },
    {
      id: "rspd",
      title: "Responsive Design",
      icon: rspdIcon,
      description:
        "I am proficient in Responsive Design, I created a user interface that's compatible with various screen sizes through flexible CSS, media queries, and extensive testing with tools like DevTools.",
    },
    {
      id: "docker",
      title: "Docker",
      icon: dockerIcon,
      description:
        "I have experience working with Docker to deploy applications, I am also familiar with Docker commands and using Docker Compose to manage multiple containers at once.",
    },
    {
      id: "rpa",
      title: "Robot Framework",
      icon: rpaIcon,
      description:
        "I have 9 months of experience working with Robot Framework, I have developed and deployed automated test suites for web applications based on Manual Tester test cases. This experience helps me improve product quality and reduce manual testing time.",
    },
    {
      id: "ubuntu",
      title: "Ubuntu",
      icon: ubuntuIcon,
      description:
        "While using Ubuntu, I installed, configured, and managed web servers and systems, and I'm adept at command line operations, including SSH, apt, and systemd for system maintenance.",
    },
    {
      id: "laravel",
      title: "Laravel",
      icon: laravelIcon,
      description:
        "In a project using Laravel, I developed web applications. I worked with routing, middleware, authentication, and Eloquent ORM.",
    },
    {
      id: "mysql",
      title: "MySQL",
      icon: mysqlIcon,
      description:
        "My experience with MySQL includes database design, SQL query optimization, and MySQL server deployment, ensuring database reliability and performance.",
    },
    {
      id: "selenium",
      title: "Selenium",
      icon: seleniumIcon,
      description:
        "I used Selenium to write automated scripts for cross-browser UI testing, becoming proficient with Selenium APIs and ensuring application stability and quality through automated testing.",
    },
    {
      id: "jira",
      title: "Jira",
      icon: jiraIcon,
      description:
        "In project management, I used Jira to track work. I have become familiar with creating and managing user stories, tasks, and sprints in Jira to ensure work is completed on time.",
    },
    {
      id: "seo",
      title: "SEO",
      icon: seoIcon,
      description:
        "In SEO skills, I optimized websites to increase rankings on search engines. I performed an SEO audit, optimized content, and built links to the site.",
    },
  ];
  return (
    <section className="section" id="skills">
      <div className="title">
        <span className="text-primary-02 uppercase">What I do</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title">
          {["S", "K", "I", "L", "L", "S"].map((char, index) => (
            <span key={index} className="bounce inline-block">
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
                    src={skill.icon}
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
                    src={skill.icon}
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
                    src={skill.icon}
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
                    src={skill.icon}
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
            height: 280px;
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
