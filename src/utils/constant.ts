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
    id: "hvms",
    title: "Hi-Navi Vessel Management Service",
    logo: "MenloSecurity_Logo1_pscs6o",
    image: "MenloSecurity_Logo1_pscs6o",
    description:
      "The HVMS web application helps manage materials, personnel, procurement processes,... for both shore-based and vessel-based operations. The project consists of three teams: Biz 1, Biz 2, and Common. My team, Biz 1, is responsible for implementing the Procurement module. As a front-end developer, I develop and maintain various procurement-related features.",
    start_date: "20240301",
    end_date: "Present",
    role: "Developed and optimized front-end features for procurement modules.; Collaborated cross-functionally to integrate systems and enhance UI/UX based on user feedback.; Maintained documentation for new features.",
    technologies:
      "VueJS, Typescript, Vite, Yarn Tailwind CSS, Micro-FrontEnd, Pinia Store, Java, Kainos Framework, PostgresSQL",
    link: "xxx",
    github: "xxx",
  },
  {
    id: "menlo_security",
    title: "Menlo Security",
    logo: "MenloSecurity_Logo1_pscs6o",
    image: "MenloSecurity_Logo1_pscs6o",
    description:
      "Menlo Security provides a cloud-based isolation platform to protect organizations from cyber threats by isolating harmful web elements. The platform acts like a gate, scanning and redirecting internet traffic to secure websites. I have the Automation Tester role involves testing new features and using automation tests for existing functions.",
    start_date: "20231101",
    end_date: "20240301",
    role: "Test future; code automation to test old function.",
    technologies: "Python, Robot Framework, Selenium.",
    link: "xxx",
    github: "xxx",
  },

  {
    id: "bluecat_health_monitoring",
    title: "Bluecat Health Monitoring",
    logo: "bluecat_health_monitoring_website_image1_ifftvi",
    image: "bluecat_health_monitoring_website_image1_ifftvi",
    description:
      "The web application assists companies in overseeing server infrastructure on virtual machines (VMs), focusing on monitoring and optimizing the performance of BlueCat DNS/DHCP Server (BDDS) servers. It offers system information using graphs and alerts users about server issues. Developer responsibilities encompass API creation, enhancing back-end functionality, resolve front-end UI errors, and automating setup and code based on tester test cases.",
    start_date: "20220101",
    end_date: "20231001",
    role: "Maintenance, develop UI/UX; Write API in Back-End; Test and bug fixing, review code UI; Setup and code automation by test case.",
    technologies:
      "Python, Flask Framework, RESTful API, ReactJS, Material-UI, Robot Framework, Cassandra, Docker.",
    link: "xxx",
    github: "xxx",
  },

  {
    id: "pecan_deluxe",
    title: "Pecan Deluxe",
    logo: "pecan-deluxe-share1_uub6vg",
    image: "pecan-deluxe-share1_uub6vg",
    description:
      "The web application serves Pecan Deluxe, a confectionery company, enabling users to browse and order products while providing essential product details. Website managers have control over product display, order tracking, and customer feedback. The developer focuses on coding UI modules and addressing both front-end and back-end issues.",
    start_date: "20220114",
    end_date: "20220401",
    role: "Develop UI/UX; Unit test, fix bugs in Front-end and Back-end; Design website modules following architecture.",
    technologies: "JQuery, PHP, Laravel framework, Tailwind CSS, SEO, MySQL.",
    link: "https://pecandeluxe.com",
    github: "xxx",
  },

  {
    id: "exam_schedule",
    title: "Nha Trang University Exam Schedule",
    logo: "ntu-bg_se89p1",
    image: "ntu-bg_se89p1",
    description:
      "Building a website to support automatic exam scheduling for Nha Trang University. Allows students to view exam schedules, register for exam schedules, view news, etc. Faculty teachers can view and set automatic/manual exam schedules and export exam schedules to Excel. Manage exam schedules by each department, and support students to communicate directly with each other on the website to grasp and arrange time together more effectively.",
    start_date: "20220401",
    end_date: "20220601",
    role: "Maintenance, develop UI/UX Homepage, Admin, and all function; Code the functions in BE; Fix bug and Report",
    technologies: "PHP, Laravel Framework, Tailwind CSS, MySQL.",
    link: "https://github.com/MangBao/doantotnghiep2022",
    github: "xxx",
  },

  {
    id: "shop_milk_tea",
    title: "Homita milk tea shop",
    logo: "homita_bg_ky4aqi",
    image: "homita_bg_ky4aqi",
    description:
      "Building a website to manage the Homita milk tea shop according to the MVC model. Allows ordering milk tea online via the shopping cart, displaying new items, and sending feedback. CRUD bills, drinks, staff... ",
    start_date: "20211101",
    end_date: "20211130",
    role: "Code the functions of invoice management, feedback management, and sending feedback in BE; Setup folder and project files according to the MVC model",
    technologies: "PHP, Javascript, MVC, Bootstrap, MySQL.",
    link: "https://github.com/60-CNPM-OpenSourceGroup/QuanLyTraSua-PHP-MVC",
    github: "xxx",
  },
];

export const skills = [
  {
    id: "html",
    title: "HTML",
    icon: "html_h9ssbm",
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: "css_lgzxuc",
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "mui",
    title: "Material UI",
    icon: "mui_beyvma",
    description:
      "I have expertise in using Material UI to design website interfaces, ensuring the best user experience.",
  },
  {
    id: "twcss",
    title: "Tailwind CSS",
    icon: "tailwindcss_uzirkz",
    description:
      "I have experience using TailwindCSS to design website interfaces, ensure website performance, and user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "javascript_gqiexu",
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "ReactJS",
    icon: "reactjs_ekorv8",
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "rdtk",
    title: "Redux Toolkit",
    icon: "redux_vfyxuu",
    description:
      "In my React application, I used Redux Toolkit to manage the state of the application. I created slices, actions, and reducers to manage data and improve application performance.",
  },
  {
    id: "git",
    title: "Git",
    icon: "git_qwhfa5",
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: "github_txzruj",
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "py",
    title: "Python",
    icon: "flask_qwvsqu",
    description:
      "With 2 years of Python experience, I am adept at coding functions and creating API using Flask.",
  },
  {
    id: "flask",
    title: "Flask",
    icon: "flask_qwvsqu",
    description:
      "With 1.5 years of experience in Flask, I am proficient in the process of creating APIs, support functions and working on this framework.",
  },
  {
    id: "cas",
    title: "Cassandra",
    icon: "cassandra_fvd8te",
    description:
      "In a project using Cassandra, I am familiar with data queries, ensuring product performance throughout the operation.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: "eslint_a0l4ui",
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
  {
    id: "rspd",
    title: "Responsive Design",
    icon: "responsive_design_ozkj5z",
    description:
      "I am proficient in Responsive Design, I created a user interface that's compatible with various screen sizes through flexible CSS, media queries, and extensive testing with tools like DevTools.",
  },
  {
    id: "docker",
    title: "Docker",
    icon: "docker_tb7aqw",
    description:
      "I have experience working with Docker to deploy applications, I am also familiar with Docker commands and using Docker Compose to manage multiple containers at once.",
  },
  {
    id: "rpa",
    title: "Robot Framework",
    icon: "robot_framework_hxnaqk",
    description:
      "I have 9 months of experience working with Robot Framework, I have developed and deployed automated test suites for web applications based on Manual Tester test cases. This experience helps me improve product quality and reduce manual testing time.",
  },
  {
    id: "ubuntu",
    title: "Ubuntu",
    icon: "ubuntu_vwhyqz",
    description:
      "While using Ubuntu, I installed, configured, and managed web servers and systems, and I'm adept at command line operations, including SSH, apt, and systemd for system maintenance.",
  },
  {
    id: "laravel",
    title: "Laravel",
    icon: "laravel_msn2nq",
    description:
      "In a project using Laravel, I developed web applications. I worked with routing, middleware, authentication, and Eloquent ORM.",
  },
  {
    id: "mysql",
    title: "MySQL",
    icon: "mysql_xprlq8",
    description:
      "My experience with MySQL includes database design, SQL query optimization, and MySQL server deployment, ensuring database reliability and performance.",
  },
  {
    id: "selenium",
    title: "Selenium",
    icon: "selenium_ynuwas",
    description:
      "I used Selenium to write automated scripts for cross-browser UI testing, becoming proficient with Selenium APIs and ensuring application stability and quality through automated testing.",
  },
  {
    id: "jira",
    title: "Jira",
    icon: "jira_e8ngta",
    description:
      "In project management, I used Jira to track work. I have become familiar with creating and managing user stories, tasks, and sprints in Jira to ensure work is completed on time.",
  },
  {
    id: "seo",
    title: "SEO",
    icon: "seo_y3fvzp.png",
    description:
      "In SEO skills, I optimized websites to increase rankings on search engines. I performed an SEO audit, optimized content, and built links to the site.",
  },
];

export const experiences = [
  {
    company_name: "LTV Software",
    start: "20240301",
    end: "Present",
    task: [
      {
        id: ["fe", "be"],
        desc: "Involved in full-cycle web development: building UI and APIs, fixing bugs. Optimizing performance, and improving UX. Collaborated with the team lead to address customer feedback and implement solutions.",
      },
    ],
  },
  {
    company_name: "TMA Solutions Binh Dinh",
    start: "20220701",
    end: "20240301",
    task: [
      {
        id: ["fe", "be"],
        desc: "Develop system websites to manage network status, IPs, DNS, Servers and provide warnings. Website management uses Python, Flask Framework, RESTful API, ReactJS, Material-UI, Cassandra, and Docker.",
      },
      {
        id: ["auto"],
        desc: "Install automation framework for project, and write automation scripts based on testers' test cases. Join the company_name's training team for interns.",
      },
    ],
  },
  {
    company_name: "Gravity Vietnam",
    start: "20220101",
    end: "20220401",
    task: [
      {
        id: ["fe"],
        desc: "Develop sophisticated, animated, responsive and adaptive websites using HTML5, CSS, jQuery, Tailwind CSS, Laravel, PHP, MySQL, SEO; for all browsers, optimized for desktop, notebook, smartphones and tablets (iOS, Android, Windows).",
      },
    ],
  },
];
