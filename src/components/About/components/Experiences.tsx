import { FC } from "react";
import { experiences } from "../datas";

const Experiences: FC = () => {
  return (
    <section className="pt-16 md:pt-32" id="experiences">
      <div className="container mx-auto px-4 md:px-2">
        <div className="w-full flex justify-center items-center flex-col text-center mt-6 md:mt-16">
          <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
            Experiences Space
          </span>

          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My <span className="text-primary font-bold">Experiences</span>
            </h1>

            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
              Dive into my journey through various exciting roles and projects
              that have shaped my career!
            </p>
          </div>

          <div className="text-white text-left max-w-4xl">
            {experiences.map((experience) => (
              <div key={experience.role} className="mb-12">
                <h2 className="text-primary text-xl font-bold mb-2">
                  {experience.role}
                </h2>
                <h3 className="text-gray-400 text-md font-semibold mb-2">
                  {experience.company}, {experience.location}
                </h3>
                <p className="text-gray-400 text-md font-semibold mb-4">
                  {experience.period}
                </p>

                {experience.projects && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experience.projects.map((project) => (
                      <div
                        key={project.name}
                        className="bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      >
                        {project.name && (
                          <h3 className="text-primary text-lg font-semibold mb-3">
                            {project.name}
                          </h3>
                        )}

                        <h4 className="text-gray-400 text-sm font-semibold mb-2">
                          Responsibilities:
                        </h4>
                        <ul className="list-disc text-white text-sm md:text-base space-y-1 mb-4 pl-6">
                          {project.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index}>{responsibility}</li>
                            )
                          )}
                        </ul>

                        {project.technologies && (
                          <>
                            <h4 className="text-gray-400 text-sm font-semibold mb-2">
                              Technologies:
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {project.technologies.map((technology, index) => (
                                <div
                                  key={index}
                                  className="bg-gray-700 hover:bg-primary p-2 rounded-md text-white hover:text-black text-xs md:text-sm text-center cursor-pointer flex items-center justify-center"
                                >
                                  {technology}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
