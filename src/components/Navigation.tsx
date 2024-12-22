"use client";

import { FC, useState, useEffect } from "react";
import {
  IoPaperPlaneOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { scrollPosition } from "@@/utils/positions";

const menuList = [
  { name: "Home", href: "home" },
  { name: "Personal", href: "personal" },
  { name: "Experiences", href: "experiences" },
  { name: "Skills", href: "skills" },
  { name: "Portfolio", href: "works" },
  { name: "Contact", href: "contact" },
];

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const sections = menuList.map((menu) => document.getElementById(menu.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.info(`Active section: ${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md z-50 h-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          Encep <span className="text-primary">Suryana</span>
        </div>

        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <IoMenuOutline size={24} />
            )}
          </button>
        </div>

        <ul
          className={`fixed top-0 left-0 w-full md:w-fit min-h-screen md:min-h-full bg-black bg-opacity-90 p-4 space-y-8 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:flex md:space-y-0 md:space-x-8 md:p-0 md:bg-transparent md:transform-none md:transition-none font-semibold`}
        >
          <li className="md:hidden flex justify-end">
            <button onClick={toggleMenu} className="text-white">
              <IoCloseOutline size={24} />
            </button>
          </li>
          {menuList.map((menu) => (
            <li
              key={menu.name}
              className={`text-sm hover:text-primary hover:underline cursor-pointer ${
                activeSection === menu.href ? "text-primary underline" : ""
              }`}
            >
              <span
                onClick={() => {
                  scrollPosition(menu.href);
                  toggleMenu();
                }}
              >
                {menu.name}
              </span>
            </li>
          ))}
          <li className="md:hidden">
            <button className="px-4 py-2 bg-primary text-black rounded-md hover:bg-opacity-80 hover:bg-transparent hover:text-primary transition-all border border-primary">
              <IoPaperPlaneOutline className="inline-block mr-2 -mt-1" />
              Let&apos;s Talk
            </button>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="mailto:encep.suryanajr@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-primary text-black rounded-md hover:bg-opacity-80 hover:bg-transparent hover:text-primary transition-all border border-primary"
          >
            <IoPaperPlaneOutline className="inline-block mr-2 -mt-1" />
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
