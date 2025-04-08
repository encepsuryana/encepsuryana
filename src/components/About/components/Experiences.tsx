import { FC } from "react";
import { experiences } from "../datas";

const Experiences: FC = () => {
  return (
    <section
      className="container mx-auto px-4 md:px-2 pt-16 md:pt-32"
      id="experiences"
    >
      <div className="w-full mt-6 md:mt-16">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between border-b-2 border-dashed border-primary py-1 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              My <span className="text-primary font-bold">Experiences</span>
            </h1>
            <div className="h-4 w-4 bg-primary rotate-6" />
          </div>

          <p className="text-base md:text-lg leading-relaxed">
            Dive into my journey through various exciting roles and projects
            that have shaped my career! From innovative problem-solving to
            impactful collaborations, explore the milestones that define my
            professional growth.
          </p>
        </div>

        {Object.entries(experiences).map(([category, categoryExperiences]) => (
          <div key={category} className="mb-16">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-6 capitalize">
              {category} Experiences
            </h1>

            {categoryExperiences.map((experience) => (
              <div
                key={experience.role}
                className="mb-12 border-b-2 border-dashed border-primary"
              >
                <h3 className="text-2xl md:text-3xl text-primary font-bold mb-2">
                  {experience.role}
                </h3>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="text-sm md:text-md">
                    <span className="font-semibold">{experience.company}</span>,{" "}
                    {experience.location}
                  </div>
                  <p className="text-sm md:text-md text-right">
                    {experience.period}
                  </p>
                </div>

                {experience.projects && (
                  <div className="grid grid-cols-1 gap-6 px-4 mb-2">
                    {experience.projects.map((project) => (
                      <div key={project.name || Math.random()} className="">
                        {project.name && (
                          <span className="text-base md:text-lg font-semibold mb-3">
                            {project.name}
                          </span>
                        )}

                        <p className="pt-2 text-sm font-semibold mb-2">
                          Responsibilities:
                        </p>
                        <ul className="list-disc text-sm md:text-base space-y-1 mb-4 pl-6">
                          {project.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index}>{responsibility}</li>
                            )
                          )}
                        </ul>

                        {project.technologies && (
                          <>
                            <span className="text-sm font-semibold mb-2">
                              Technologies:
                            </span>
                            <div className="text-primary text-sm font-semibold mb-2">
                              {project.technologies.join(", ")}
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
        ))}
      </div>
    </section>
  );
};

export default Experiences;
