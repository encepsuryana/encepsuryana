"use client";

import { FC, useState } from "react";
import {
  IoPaperPlaneOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { scrollPosition } from "@@/utils/positions";

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuList = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Works", href: "works" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

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
              className="hover:text-primary hover:underline cursor-pointer"
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
          <button className="px-4 py-2 bg-primary text-black rounded-md hover:bg-opacity-80 hover:bg-transparent hover:text-primary transition-all border border-primary">
            <IoPaperPlaneOutline className="inline-block mr-2 -mt-1" />
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
