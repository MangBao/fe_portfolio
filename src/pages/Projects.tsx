"use client";
import React from "react";
import {
  bluecatDefault,
  bluecatLogoNonBg,
  pecanLogo,
  menloLogo,
  homitaLogo,
  ntuLogo
} from '../utils/constant'

const Projects: React.FC = () => {

  const projects = [
    {
      id: "bluecat_health_monitoring",
      title: "Bluecat Health Monitoring",
      logo: bluecatLogoNonBg,
      image: [
        bluecatDefault,
      ],
      description: "The web application assists companies in overseeing server infrastructure on virtual machines (VMs), focusing on monitoring and optimizing the performance of BlueCat DNS/DHCP Server (BDDS) servers. It offers system information using graphs and alerts users about server issues. Developer responsibilities encompass API creation, enhancing back-end functionality, resolve front-end UI errors, and automating setup and code based on tester test cases.",
      start_date: "08/2023",
      end_date: "10/2023",
      role: "Maintenance, develop UI/UX; Write API in Back-End; Test and bug fixing, review code UI; Setup and code automation by test case.",
      technologies: "Python, Flask Framework, RESTful API, ReactJS, Material-UI, Robot Framework, Cassandra, Docker.",
      link: "",
      notes: "",
    },

    {
      id: "pecan_deluxe",
      title: "Pecan Deluxe",
      logo: pecanLogo,
      image: [
        pecanLogo,
      ],
      description: "The web application serves Pecan Deluxe, a confectionery company, enabling users to browse and order products while providing essential product details. Website managers have control over product display, order tracking, and customer feedback. The developer focuses on coding UI modules and addressing both front-end and back-end issues.",
      start_date: "14/01/2022",
      end_date: "25/01/2022",
      role: "Develop UI/UX; Unit test, fix bugs in Front-end and Back-end; Design website modules following architecture.",
      technologies: "JQuery, PHP, Laravel framework, Tailwind CSS, SEO, MySQL.",
      link: "https://pecandeluxe.com",
      notes: "",
    },

    {
      id: "menlo_security",
      title: "Menlo Security",
      logo: menloLogo,
      image: [
        menloLogo,
      ],
      description: "Menlo Security provides a cloud-based isolation platform to protect organizations from cyber threats by isolating harmful web elements. The platform acts like a gate, scanning and redirecting internet traffic to secure websites. I have the Automation Tester role involves testing new features and using automation tests for existing functions.",
      start_date: "11/2023",
      end_date: "",
      role: "Test future; code automation to test old function.",
      technologies: "Python, Robot Framework, Selenium.",
      link: "",
      notes: "",
    },

    {
      id: "exam_schedule",
      title: "Website assigning examination schedule of Nha Trang University",
      logo: ntuLogo,
      image: [
        ntuLogo
      ],
      description: "Building a website to support automatic exam scheduling for Nha Trang University. Allows students to view exam schedules, register for exam schedules, view news, etc. Faculty teachers can view and set automatic/manual exam schedules and export exam schedules to Excel. Manage exam schedules by each department, and support students to communicate directly with each other on the website to grasp and arrange time together more effectively.",
      start_date: "15/04/2021",
      end_date: "18/07/2021",
      role: "Maintenance, develop UI/UX Homepage, Admin, and all function; Code the functions in BE; Fix bug and Report",
      technologies: "PHP, Laravel Framework, Tailwind CSS, MySQL.",
      link: "https://github.com/MangBao/doantotnghiep2022",
      notes: "",
    },

    {
      id: "shop_milk_tea",
      title: "Homita milk tea shop",
      logo: homitaLogo,
      image: [
        homitaLogo,
      ],
      description: "Building a website to manage the Homita milk tea shop according to the MVC model. Allows ordering milk tea online via the shopping cart, displaying new items, and sending feedback. CRUD bills, drinks, staff... ",
      start_date: "05/10/2020",
      end_date: "29/10/2020",
      role: "Code the functions of invoice management, feedback management, and sending feedback in BE; Setup folder and project files according to the MVC model",
      technologies: "PHP, Javascript, MVC, Bootstrap, MySQL.",
      link: "https://github.com/60-CNPM-OpenSourceGroup/QuanLyTraSua-PHP-MVC",
      notes: "",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="title">
        <span className="text-primary-02 uppercase">What I have done so far</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title">
          {["P", "R", "O", "J", "E", "C", "T", "S"].map((char, index) => (
            <span key={index} className="bounce inline-block">
              {char}
            </span>
          ))}
        </h2>
      </div>
      <div className="wrap-list-card flex flex-wrap gap-[30px] max-w-[1200px] mx-auto md:gap-[15px] max-md:flex-col max-md:gap-[10px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card relative w-[calc(33.33%-20px)] min-h-[285px] overflow-hidden shadow-[1px_22px_44px_rgba(0,0,0,0.19)] rounded-lg transition-all duration-[600ms] hover:-translate-y-[15px] hover:shadow-[1px_12px_34px_rgba(0,0,0,0.31)] md:w-[calc(50%-15px)] max-md:w-[calc(100%-10px)]"
            style={{
              background: `url(${project.image[0]}) no-repeat center/cover`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(103,109,109,0.5)]" />
            {/* Date */}
            <div className="date absolute top-6 right-6 text-primary-02 font-light text-sm transition-all duration-[800ms] hover:opacity-0 hover:-translate-y-full">
              {project.start_date} - {project.end_date || "Present"}
            </div>
            {/* Content */}
            <div className="content flex flex-wrap self-end p-6 pb-12 z-[2] transition-all duration-[800ms] hover:opacity-0 hover:translate-y-full">
              <h3 className="w-full text-[44px] font-bold leading-[50px] mb-3">
                {project.title}
              </h3>
              <p className="w-full text-base font-light line-clamp-3">
                {project.description}
              </p>
            </div>
            {/* Description */}
            <div className="description absolute inset-0 p-6 pb-9 bg-[rgba(183,108,108,0.78)] opacity-0 transition-all duration-[800ms] flex flex-wrap items-end hover:opacity-100">
              <div className="content-desc w-full">
                <h4 className="text-[22px] font-bold mb-3 translate-y-[-100%] transition-all duration-[600ms] hover:translate-y-0 hover:delay-200">
                  {project.title}
                </h4>
                <p className="text-sm font-light translate-y-[100%] transition-all duration-[600ms] hover:translate-y-0 hover:delay-600">
                  {project.description}
                </p>
                <p className="text-sm font-light mt-2">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view absolute bottom-4 right-6 text-sm border-b border-white opacity-0 translate-y-[100%] transition-all duration-[600ms] text-primary-02 hover:opacity-100 hover:translate-y-0 hover:delay-1000"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
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

export default Projects;