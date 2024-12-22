import { FC } from "react";
import { educations } from "../datas";

const Educations: FC = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col text-center mt-6 md:mt-16">
      <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
        Educations Space
      </span>

      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          My <span className="text-primary font-bold">Educations</span>
        </h1>

        <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
          Dive into my journey through various exciting educations that have
          shaped my career!
        </p>
      </div>

      <div className="text-white text-left max-w-4xl">
        {educations.map((edu) => (
          <div
            key={edu.school}
            className="mb-8 bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-primary text-lg font-bold mb-2">
              {edu.school} ({edu.location}):
            </h2>
            <h3 className="text-gray-400 text-md font-semibold mb-2">
              {edu.degree} / {edu.grade}
            </h3>
            <p className="text-gray-400 text-md font-semibold mb-2">
              {edu.period}
            </p>
            <p className="text-white text-sm md:text-base">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
