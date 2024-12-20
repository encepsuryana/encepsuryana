import { FC } from "react";
import { educations } from "../datas";

const Education: FC = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col text-center mt-6 md:mt-16">
      <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
        My Education
      </span>

      <div className="text-white text-left max-w-4xl">
        {educations.map((edu) => (
          <div key={edu.school} className="mb-8">
            <h2 className="text-primary text-lg font-bold mb-2">
              {edu.school} ({edu.location}):
            </h2>
            <h3 className="text-gray-400 text-md font-semibold mb-2">
              {edu.degree}
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

export default Education;
