import { FC } from "react";

// create a new component for works gallery
const Works: FC = () => {
  const projectDone = [
    {
      title: "Project 1",
      description: "This is a project 1 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Project 2",
      description: "This is a project 2 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Project 3",
      description: "This is a project 3 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Project 4",
      description: "This is a project 4 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Project 5",
      description: "This is a project 5 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Project 6",
      description: "This is a project 6 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center flex-col text-center mt-6 md:mt-16">
      <div className="text-white text-left max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectDone.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-primary hover:bg-opacity-10 group"
            >
              <h3 className="text-primary text-lg font-semibold mb-3 group-hover:text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm font-semibold mb-4 group-hover:text-gray-800">
                {project.description}
              </p>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-primary text-sm font-semibold mt-2 group-hover:text-gray-800"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
