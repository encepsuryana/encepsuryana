import React from "react";
import General from "./components/General";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 md:py-32">
      <General />
      <Experiences />
      <Skills />
    </div>
  );
};

export default About;
