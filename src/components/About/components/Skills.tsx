import { FC } from "react";
import { skills } from "../datas";
import Educations from "./Educations";

const Skills: FC = () => {
  return (
    <section className="py-16 md:py-32" id="skills">
      <div className="container mx-auto px-4 md:px-2">
        <div className="w-full flex justify-center items-center flex-col text-center mt-6 md:mt-16">
          <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
            Skills Space
          </span>

          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My <span className="text-primary font-bold">Skills</span>
            </h1>

            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
              Check out my skill set! I&apos;m always on the hunt for new
              knowledge and ways to level up. Let&apos;s grow together!
            </p>
          </div>

          <div className="text-white text-left max-w-4xl">
            {skills.map((skill) => (
              <div key={skill.category} className="mb-8">
                <h2 className="text-primary text-lg font-bold mb-2">
                  {skill.category}:
                </h2>
                {skill.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="mb-4">
                    <h3 className="text-gray-400 text-md font-semibold mb-2">
                      {subcategory.name}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {subcategory.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center space-x-4 bg-gray-800 p-4 rounded-md group hover:bg-primary hover:bg-opacity-10 transition-all cursor-pointer flex-col md:flex-row text-center md:text-left"
                        >
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-10 h-10 group-hover:scale-110 transition-transform"
                          />
                          <span className="group-hover:text-black transition-colors text-sm md:text-base !m-0 md:!ml-2 pt-2 md:pt-0">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Educations />
      </div>
    </section>
  );
};

export default Skills;
