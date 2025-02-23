import { FC } from "react";
import { personalInfo } from "../datas";

const General: FC = () => {
  return (
    <section className="container mx-auto px-4 md:px-2" id="personal">
      <div className="mb-8 md:mb-12">
        <div className="flex items-center justify-between border-b-2 border-dashed border-primary py-1 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary font-bold">General Info</span>
          </h1>
          <div className="h-4 w-4 bg-primary rotate-6" />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center text-left gap-8">
        <div className="md:w-1/2">
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Welcome to my personal space! My name is{" "}
            <span className="text-primary font-bold">Encep Suryana</span>, a
            seasoned professional with over 5 years of experience as a{" "}
            <span className="text-primary font-bold">Front End Developer</span>{" "}
            and{" "}
            <span className="text-primary font-bold">Analyst Programmer</span>.
            I specialize in{" "}
            <span className="text-primary font-bold">
              React, Node.js, PHP, AWS, Google Cloud, MySQL, MongoDB, and
              GraphQL
            </span>
            . My proficiency extends to{" "}
            <span className="text-primary font-bold">
              TypeScript, Next.js, and serverless architectures
            </span>
            . I am passionate about frontend development and system analysis,
            and I thrive on making complex problems simple and enjoyable to
            solve. I am always eager to learn new technologies and continuously
            improve my skills.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-start items-center flex-col text-center">
          <div className="text-left w-full max-w-4xl">
            <ul className="grid md:grid-cols-2 gap-4">
              {personalInfo.items.map((item) => (
                <li
                  key={item.title}
                  className="border-b-2 border-dashed border-primary pb-2"
                >
                  <h2 className="text-lg font-bold">{item.title}:</h2>
                  {item.description ? (
                    <p className="text-primary text-sm md:text-md font-semibold">
                      {item.description}
                    </p>
                  ) : (
                    <ul className="grid grid-cols-3 gap-2">
                      {item.items &&
                        item.items.map((social) => (
                          <li key={social.name} className="flex">
                            <a
                              href={social.link}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center space-x-2 text-sm md:text-md font-semibold flex-col md:flex-row"
                            >
                              <span className="text-primary">
                                {social.name}
                              </span>
                            </a>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default General;
