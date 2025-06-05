import htmlIcon from "../assets/icon/html.png";
import casIcon from "../assets/icon/cassandra.png";
import cssIcon from "../assets/icon/css.png";
import dockerIcon from "../assets/icon/docker.png";
import eslintIcon from "../assets/icon/eslint.png";
import flaskIcon from "../assets/icon/flask.png";
import gitIcon from "../assets/icon/git.png";
import githubIcon from "../assets/icon/github.png";
import jsIcon from "../assets/icon/javascript.png";
import laravelIcon from "../assets/icon/laravel.png";
import muiIcon from "../assets/icon/mui.png";
import mysqlIcon from "../assets/icon/mysql.png";
import pyIcon from "../assets/icon/py.png";
import reactIcon from "../assets/icon/reactjs.png";
import rdtkIcon from "../assets/icon/redux.png";
import rspdIcon from "../assets/icon/responsive_design.png";
import rpaIcon from "../assets/icon/robot_framework.png";
import seleniumIcon from "../assets/icon/selenium.png";
import twcssIcon from "../assets/icon/tailwindcss.png";
import ubuntuIcon from "../assets/icon/ubuntu.png";
import jiraIcon from "../assets/icon/jira.png";
import seoIcon from "../assets/icon/seo.png";

import bluecatDefault from "../assets/project-img/bluecat/bluecat_health_monitoring_website_image1.jpg";
import bluecatLogoNonBg from "../assets/project-img/bluecat/bluecat_logo-removebg.png";
import bluecatLogoBg from "../assets/project-img/bluecat/bluecat_logo.png";
import pecanLogo from "../assets/project-img/pecan/pecan-deluxe-share1.jpg";
import menloLogo from "../assets/project-img/menlo/MenloSecurity_Logo1.jpg";
import homitaLogo from "../assets/project-img/homita/homita_bg.png";
import ntuLogo from "../assets/project-img/ntu/ntu-bg.png";

export {
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
  bluecatDefault,
  bluecatLogoNonBg,
  bluecatLogoBg,
  pecanLogo,
  menloLogo,
  homitaLogo,
  ntuLogo,
};

export const projects = [
  {
    id: "bluecat_health_monitoring",
    title: "Bluecat Health Monitoring",
    logo: bluecatLogoNonBg,
    image: [bluecatDefault],
    description:
      "The web application assists companies in overseeing server infrastructure on virtual machines (VMs), focusing on monitoring and optimizing the performance of BlueCat DNS/DHCP Server (BDDS) servers. It offers system information using graphs and alerts users about server issues. Developer responsibilities encompass API creation, enhancing back-end functionality, resolve front-end UI errors, and automating setup and code based on tester test cases.",
    start_date: "08/2023",
    end_date: "10/2023",
    role: "Maintenance, develop UI/UX; Write API in Back-End; Test and bug fixing, review code UI; Setup and code automation by test case.",
    technologies:
      "Python, Flask Framework, RESTful API, ReactJS, Material-UI, Robot Framework, Cassandra, Docker.",
    link: "xxx",
    notes: "",
    github: "xxx",
  },

  {
    id: "pecan_deluxe",
    title: "Pecan Deluxe",
    logo: pecanLogo,
    image: [pecanLogo],
    description:
      "The web application serves Pecan Deluxe, a confectionery company, enabling users to browse and order products while providing essential product details. Website managers have control over product display, order tracking, and customer feedback. The developer focuses on coding UI modules and addressing both front-end and back-end issues.",
    start_date: "14/01/2022",
    end_date: "25/01/2022",
    role: "Develop UI/UX; Unit test, fix bugs in Front-end and Back-end; Design website modules following architecture.",
    technologies: "JQuery, PHP, Laravel framework, Tailwind CSS, SEO, MySQL.",
    link: "https://pecandeluxe.com",
    notes: "",
    github: "xxx",
  },

  {
    id: "menlo_security",
    title: "Menlo Security",
    logo: menloLogo,
    image: [menloLogo],
    description:
      "Menlo Security provides a cloud-based isolation platform to protect organizations from cyber threats by isolating harmful web elements. The platform acts like a gate, scanning and redirecting internet traffic to secure websites. I have the Automation Tester role involves testing new features and using automation tests for existing functions.",
    start_date: "11/2023",
    end_date: "",
    role: "Test future; code automation to test old function.",
    technologies: "Python, Robot Framework, Selenium.",
    link: "xxx",
    notes: "",
    github: "xxx",
  },

  {
    id: "exam_schedule",
    title: "Nha Trang University Exam Schedule",
    logo: ntuLogo,
    image: [ntuLogo],
    description:
      "Building a website to support automatic exam scheduling for Nha Trang University. Allows students to view exam schedules, register for exam schedules, view news, etc. Faculty teachers can view and set automatic/manual exam schedules and export exam schedules to Excel. Manage exam schedules by each department, and support students to communicate directly with each other on the website to grasp and arrange time together more effectively.",
    start_date: "15/04/2021",
    end_date: "18/07/2021",
    role: "Maintenance, develop UI/UX Homepage, Admin, and all function; Code the functions in BE; Fix bug and Report",
    technologies: "PHP, Laravel Framework, Tailwind CSS, MySQL.",
    link: "https://github.com/MangBao/doantotnghiep2022",
    notes: "",
    github: "xxx",
  },

  {
    id: "shop_milk_tea",
    title: "Homita milk tea shop",
    logo: homitaLogo,
    image: [homitaLogo],
    description:
      "Building a website to manage the Homita milk tea shop according to the MVC model. Allows ordering milk tea online via the shopping cart, displaying new items, and sending feedback. CRUD bills, drinks, staff... ",
    start_date: "05/10/2020",
    end_date: "29/10/2020",
    role: "Code the functions of invoice management, feedback management, and sending feedback in BE; Setup folder and project files according to the MVC model",
    technologies: "PHP, Javascript, MVC, Bootstrap, MySQL.",
    link: "https://github.com/60-CNPM-OpenSourceGroup/QuanLyTraSua-PHP-MVC",
    notes: "",
    github: "xxx",
  },
];

export const skills = [
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

export const experiences = [
  {
    id: "001",
    company: "Gravity Vietnam",
    start: "20220101",
    end: "20220401",
    task: [
      {
        id: ["fe"],
        desc: "Develop sophisticated, animated, responsive and adaptive websites using HTML5, CSS, jQuery, Tailwind CSS, Laravel, PHP, MySQL, SEO; for all browsers, optimized for desktop, notebook, smartphones and tablets (iOS, Android, Windows).",
      },
    ],
  },
  {
    id: "002",
    company: "TMA Solutions Binh Dinh",
    start: "20230701",
    end: "Present",
    task: [
      {
        id: ["fe", "be"],
        desc: "Develop system websites to manage network status, IPs, DNS, Servers and provide warnings. Website management uses Python, Flask Framework, RESTful API, ReactJS, Material-UI, Cassandra, and Docker.",
      },
      {
        id: ["auto"],
        desc: "Install automation framework for project, and write automation scripts based on testers' test cases. Join the company's training team for interns.",
      },
    ],
  },
];
