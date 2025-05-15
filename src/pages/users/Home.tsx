import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Experiences from "../../components/Experiences";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experiences />
    </div>
  );
};

export default Home;
