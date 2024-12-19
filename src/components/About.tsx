import React from "react";

const About: React.FC = () => {
  const about = {
    title: "Personal Info",
    description:
      "I'm a frontend developer based in Indonesia. I specialize in creating high-quality websites and web applications.",
    image: "https://github.com/encepsuryana.png",
    items: [
      {
        title: "Email",
        description: "encep.suryanajr@gmail.com",
      },
      {
        title: "Phone",
        description: "+62 812-1234-5678",
      },
      {
        title: "Location",
        description: "Bandung, Indonesia",
      },
      {
        title: "Languages",
        description: "English, Bahasa",
      },
      {
        title: "Address",
        description:
          "Perum Griya Permata 2 Block A No. 8, Gunungmanik - Tanjungsari, Sumedang, West Java, Indonesia",
      },
      {
        title: "Social",
        items: [
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/encep-suryana-b60080113/",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
          },
          {
            name: "GitHub",
            link: "https://github.com/encepsuryana",
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
          },
          {
            name: "Instagram",
            link: "https://www.instagram.com/encepsuryana_",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
          },
          {
            name: "Facebook",
            link: "https://www.facebook.com/suryanamccarley",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
          },
        ],
      },
    ],
  };

  const skills = [
    {
      category: "Frontend Development",
      subcategories: [
        {
          name: "Frameworks & Libraries",
          items: [
            {
              name: "React.js",
              icon: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
            },
            {
              name: "Vue.js",
              icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
            },
            {
              name: "Angular",
              icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
            },
            {
              name: "Next.js",
              icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
            },
          ],
        },
        {
          name: "Styling",
          items: [
            {
              name: "HTML",
              icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            },
            {
              name: "CSS",
              icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            },
          ],
        },
        {
          name: "Tools",
          items: [
            {
              name: "Figma",
              icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
            },
            {
              name: "Adobe Illustrator",
              icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
            },
            {
              name: "Adobe Photoshop",
              icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
            },
          ],
        },
      ],
    },
    {
      category: "Backend Development",
      subcategories: [
        {
          name: "Languages & Frameworks",
          items: [
            {
              name: "Node.js",
              icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            },
            {
              name: "PHP",
              icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
            },
            {
              name: "Kotlin",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/600px-Kotlin_Icon.png",
            },
            {
              name: ".NET 6",
              icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
            },
          ],
        },
        {
          name: "APIs",
          items: [
            {
              name: "Rest API",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Swagger-logo.png/170px-Swagger-logo.png",
            },
            {
              name: "GraphQL",
              icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
            },
            {
              name: "Serverless Framework",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/200px-Amazon_Lambda_architecture_logo.svg.png",
            },
          ],
        },
      ],
    },
    {
      category: "Databases",
      subcategories: [
        {
          name: "Relational Databases",
          items: [
            {
              name: "MySQL",
              icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
            },
          ],
        },
        {
          name: "NoSQL Databases",
          items: [
            {
              name: "MongoDB",
              icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
            },
            {
              name: "DynamoDB",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/DynamoDB.png/220px-DynamoDB.png",
            },
            {
              name: "Firebase",
              icon: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
            },
          ],
        },
      ],
    },
    {
      category: "Cloud Platforms & Tools",
      subcategories: [
        {
          name: "Platforms",
          items: [
            {
              name: "AWS Console",
              icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            },
            {
              name: "Google Cloud Platform",
              icon: "https://cdn-icons-png.flaticon.com/512/873/873117.png",
            },
          ],
        },
        {
          name: "Monitoring & Analytics",
          items: [
            {
              name: "New Relic",
              icon: "https://seeklogo.com/images/N/new-relic-logo-E7CC1E9143-seeklogo.com.png",
            },
            {
              name: "GA4",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/800px-GAnalytics.svg.png",
            },
          ],
        },
        {
          name: "Tools",
          items: [
            {
              name: "GTM",
              icon: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Google-Tag-Manager.jpg",
            },
            {
              name: "Chart Helm",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/617px-Kubernetes_logo_without_workmark.svg.png",
            },
          ],
        },
      ],
    },
    {
      category: "Other Technologies & Expertise",
      subcategories: [
        {
          name: "Development Tools",
          items: [
            {
              name: "Git",
              icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
            },
            {
              name: "Bitbucket",
              icon: "https://vectorwiki.com/images/n8ncl__bitbucket-icon.svg",
            },
            {
              name: "CI/CD Pipeline",
              icon: "https://cdn-icons-png.flaticon.com/512/11861/11861462.png",
            },
          ],
        },
        {
          name: "Methodologies",
          items: [
            {
              name: "Agile/Scrum",
              icon: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
            },
            {
              name: "Systems Analysis",
              icon: "https://cdn-icons-png.flaticon.com/512/4149/4149663.png",
            },
          ],
        },
        {
          name: "Soft Skills",
          items: [
            {
              name: "Leadership",
              icon: "https://cdn-icons-png.flaticon.com/512/6487/6487717.png",
            },
            {
              name: "Teamwork",
              icon: "https://cdn-icons-png.flaticon.com/512/11670/11670336.png",
            },
            {
              name: "Problem Solving",
              icon: "https://cdn-icons-png.flaticon.com/512/6487/6487601.png",
            },
            {
              name: "Communication",
              icon: "https://cdn-icons-png.flaticon.com/256/8632/8632658.png",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 py-16 md:py-32" id="about">
      <div className="container mx-auto px-4 md:px-0">
        <div className="w-full flex justify-center items-center flex-col text-center">
          <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
            About me
          </span>

          <h1 className="text-primary text-3xl md:text-4xl font-bold mb-4">
            Hi There!
          </h1>

          <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
            Welcome to my personal space! My name is{" "}
            <span className="text-primary font-semibold">Encep Suryana</span>, a
            professional with over 5 years of experience in remote working. I
            have expertise in{" "}
            <span className="text-primary font-semibold">
              React, Node.js, PHP, AWS, Google Cloud, MySQL, MongoDB, and
              GraphQL
            </span>
            . Proficient in{" "}
            <span className="text-primary font-semibold">
              TypeScript, Next.js, and serverless architectures
            </span>
            . I also enjoy making complex problems simple and fun to solve, and
            I&apos;m always eager to learn new technologies and improve my
            skills.
          </p>
        </div>

        <div className="w-full flex justify-center items-center flex-col text-center mt-16">
          <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
            {about.title}
          </span>

          <div className="text-white text-left max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {about.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h2 className="text-primary text-lg font-bold mb-2">
                    {item.title}:
                  </h2>
                  {item.description ? (
                    <p className="text-white text-md font-semibold">
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
                            className="flex items-center space-x-2 text-white text-md font-semibold"
                          >
                            <img
                              src={social.icon}
                              alt={social.name}
                              className="w-6 h-6"
                            />
                            <span>{social.name}</span>
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col text-center mt-16">
          <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
            My Skills
          </span>

          <div className="text-white text-left max-w-4xl">
            {skills.map((skill) => (
              <div key={skill.category} className="mb-8">
                <h2 className="text-primary text-lg font-bold mb-2">
                  {skill.category}:
                </h2>
                {skill.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="mb-4">
                    <h3 className="text-white text-md font-semibold mb-2">
                      {subcategory.name}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {subcategory.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center space-x-4 bg-gray-800 p-4 rounded-md group hover:bg-primary hover:bg-opacity-10 transition-all cursor-pointer"
                        >
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-10 h-10 group-hover:scale-110 transition-transform"
                          />
                          <span className="group-hover:text-black transition-colors">
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
      </div>
    </div>
  );
};

export default About;
