import { FC } from "react";
import PersonalInfo from "./PersonalInfo";

const General: FC = () => {
  return (
    <section className="container mx-auto px-4 md:px-2" id="personal">
      <div className="pt-16 md:pt-32">
        <div className="w-full flex justify-center items-center flex-col text-center">
          <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
            Personal Space
          </span>

          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My <span className="text-primary font-bold">General Info</span>
            </h1>

            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
              Welcome to my personal space! My name is{" "}
              <span className="text-primary font-semibold">Encep Suryana</span>,
              a professional with over 5 years of experience as a{" "}
              <span className="text-primary font-semibold">
                Front End Developer
              </span>{" "}
              and{" "}
              <span className="text-primary font-semibold">System Analyst</span>
              . I have expertise in{" "}
              <span className="text-primary font-semibold">
                React, Node.js, PHP, AWS, Google Cloud, MySQL, MongoDB, and
                GraphQL
              </span>
              . Proficient in{" "}
              <span className="text-primary font-semibold">
                TypeScript, Next.js, and serverless architectures
              </span>
              . I have a passion for frontend development and system analysis. I
              also enjoy making complex problems simple and fun to solve, and
              I&apos;m always eager to learn new technologies and improve my
              skills.
            </p>
          </div>
        </div>
      </div>

      <PersonalInfo />
    </section>
  );
};

export default General;
