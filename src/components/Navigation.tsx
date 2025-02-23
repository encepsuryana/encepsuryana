"use client";

import { FC, useState, useEffect, useRef, useCallback } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { scrollPosition } from "@@/utils/positions";

const menuList = [
  { name: "Home", href: "home" },
  { name: "Personal", href: "personal" },
  { name: "Experiences", href: "experiences" },
  { name: "Skills", href: "skills" },
  { name: "Educations", href: "educations" },
  { name: "Contact", href: "contact" },
];

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    []
  );

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: "-10% 0px -50% 0px",
    });

    const sections = menuList.map((menu) => document.getElementById(menu.href));

    sections.forEach((section) => {
      if (section) observerRef.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observerRef.current?.unobserve(section);
      });
    };
  }, [handleIntersection]);

  return (
    <nav className="sticky top-0 bg-white/35 backdrop-filter backdrop-blur-lg z-50 h-full border-b border-black/10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <span className="bg-primary text-white px-2">Encep</span>
          <span className="text-primary">Suryana</span>
        </div>

        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-primary">
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
              className={`text-sm hover:text-primary hover:bg-primary text-white md:text-black hover:text-white px-1 cursor-pointer ${
                activeSection === menu.href
                  ? "text-white md:text-white bg-primary"
                  : ""
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
            <a
              href="mailto:encep.suryanajr@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-primary !text-white font-semibold text-secondary"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="mailto:encep.suryanajr@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-primary !text-white font-semibold text-secondary"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
