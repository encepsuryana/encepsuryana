import { FC } from "react";
import { personalInfo } from "../datas";

const PersonalInfo: FC = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col text-center">
      <div className="text-white text-left max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {personalInfo.items.map((item) => (
            <div
              key={item.title}
              className="bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-gray-400 text-md font-bold mb-2">
                {item.title}:
              </h2>
              {item.description ? (
                <p className="text-primary text-md font-semibold">
                  {item.description}
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  {item.items &&
                    item.items.map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 text-white text-sm md:text-md font-semibold flex-col md:flex-row"
                      >
                        <img
                          src={social.icon}
                          alt={social.name}
                          className="w-6 h-6"
                        />
                        <span className="mt-2 md:mt-0 text-primary">
                          {social.name}
                        </span>
                      </a>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
