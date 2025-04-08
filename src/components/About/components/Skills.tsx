import { FC } from "react";
import { skills } from "../datas";

const Skills: FC = () => {
  return (
    <section
      className="container mx-auto px-4 md:px-2 py-16 md:py-32"
      id="skills"
    >
      <div className="w-full mt-6 md:mt-16">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between border-b-2 border-dashed border-primary py-1 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              My <span className="text-primary font-bold">Skills</span>
            </h1>
            <div className="h-4 w-4 bg-primary rotate-6" />
          </div>

          <p className="text-base md:text-lg leading-relaxed">
            Discover my comprehensive skill set, honed through dedication to
            continuous improvement and professional development. Together, we
            can achieve outstanding results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="mb-8 border-b-2 border-dashed border-primary pb-2 md:pb-4"
            >
              <h2 className="text-primary text-2xl font-bold mb-2">
                {skill.category}:
              </h2>
              {skill.subcategories.map((subcategory) => (
                <div key={subcategory.name} className="mb-4">
                  <p className="text-md font-semibold mb-2">
                    {subcategory.name}
                  </p>
                  {subcategory.items.map((item, index) => (
                    <span key={item.name}>
                      {item.name}
                      {index < subcategory.items.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
