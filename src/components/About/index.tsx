import React from "react";
import General from "./components/General";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Education from "./components/Educations";
import PersonalInfo from "./components/PersonalInfo";

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 md:py-32" id="about">
      <div className="container mx-auto px-4 md:px-0">
        <General />
        <PersonalInfo />
        <Experiences />
        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default About;
