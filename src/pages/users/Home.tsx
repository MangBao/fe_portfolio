import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Experiences from "../../components/Experiences";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
