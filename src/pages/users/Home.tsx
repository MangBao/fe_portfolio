import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Experiences from "../../components/Experiences";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div id="about" className="container mx-auto xl:mt-10 mt-5 pt-12">
        <About />
      </div>
      <div id="projects" className="container mx-auto xl:mt-36 mt-24 pt-12">
        <Projects />
      </div>
      <div id="skills" className="container mx-auto xl:mt-36 mt-24 pt-12">
        <Skills />
      </div>
      <div id="experiences" className="container mx-auto xl:mt-36 mt-24 pt-12">
        <Experiences />
      </div>
      <div id="contact" className="container mx-auto xl:mt-36 mt-24 pt-12">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
