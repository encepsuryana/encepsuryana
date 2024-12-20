import { FC } from "react";

const General: FC = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col text-center">
      <h1 className="text-primary text-3xl md:text-4xl font-bold mb-4">
        Hi There!
      </h1>

      <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
        Welcome to my personal space! My name is{" "}
        <span className="text-primary font-semibold">Encep Suryana</span>, a
        professional with over 5 years of experience as a{" "}
        <span className="text-primary font-semibold">Front End Developer</span>{" "}
        and <span className="text-primary font-semibold">System Analyst</span>.
        I have expertise in{" "}
        <span className="text-primary font-semibold">
          React, Node.js, PHP, AWS, Google Cloud, MySQL, MongoDB, and GraphQL
        </span>
        . Proficient in{" "}
        <span className="text-primary font-semibold">
          TypeScript, Next.js, and serverless architectures
        </span>
        . I have a passion for frontend development and system analysis. I also
        enjoy making complex problems simple and fun to solve, and I&apos;m
        always eager to learn new technologies and improve my skills.
      </p>
    </div>
  );
};

export default General;
