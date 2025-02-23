import React, { FC } from "react";
import General from "./components/General";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

const About: FC = () => {
  return (
    <div className="border-t py-16 md:py-32">
      <General />
      <Experiences />
      <Skills />
    </div>
  );
};

export default About;
