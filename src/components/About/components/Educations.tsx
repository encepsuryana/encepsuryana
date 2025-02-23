import { FC } from "react";
import { educations } from "../datas";

const Educations: FC = () => {
  return (
    <section
      className="container mx-auto px-4 md:px-2 pt-16 md:pt-32"
      id="educations"
    >
      <div className="w-full mt-6 md:mt-16">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between border-b-2 border-dashed border-primary py-1 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              My <span className="text-primary font-bold">Educations</span>
            </h1>
            <div className="h-4 w-4 bg-primary rotate-6" />
          </div>

          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            Explore the academic milestones that have significantly contributed
            to my professional development.
          </p>
        </div>

        {educations.map((edu) => (
          <div key={edu.school} className="md:mb-8 px-2 md:px-4">
            <h2 className="text-primary text-xl md:text-2xl font-bold mb-2">
              {edu.school} ({edu.location}):
            </h2>
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm md:text-md">
                <span className="font-semibold">{edu.degree}</span> |{" "}
                {edu.grade}/4
              </div>
              <p className="text-sm md:text-md text-right">{edu.period}</p>
            </div>
            <p className="text-md md:text-base">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
