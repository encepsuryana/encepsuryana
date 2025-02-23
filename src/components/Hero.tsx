"use client";
import { scrollPosition } from "@@/utils/positions";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const Hero: FC = () => {
  const titles = [
    "Frontend Developer",
    "Analyst Programmer",
    "Full Stack Developer",
    "a Father",
    "a Husband",
    "a Friend",
    "and a Human :D",
  ];
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 100);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (charIndex < currentTitle.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    setDisplayText(currentTitle.substring(0, charIndex));
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <section
      className="container mx-auto px-7 md:px-0 h-screen flex flex-col justify-center -mt-10"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="mt-10 md:mt-0 md:w-1/2">
          <h1 className="text-3xl font-bold text-black">
            Hi there! 👋 I&apos;m Encep Suryana, S.Kom.
          </h1>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mt-4">
            {displayText}
            <span className="animate-blink">|</span>
          </h3>
          <p className="text-gray-800 mt-5">
            Based in Indonesia, I bring over 5 years of experience in software
            development. I am passionate about crafting high-quality websites
            and web applications that deliver exceptional user experiences.
          </p>
          <button
            className="mt-6 bg-primary text-white font-bold px-6 py-3 hover:bg-secondary transition"
            onClick={() => scrollPosition("personal")}
          >
            Get Started
          </button>
        </div>

        <div className="relative w-64 md:w-96 h-72 md:h-96 group">
          <div className="relative w-full h-full transition-transform duration-500 transform group-hover:rotate-y-180 cursor-pointer">
            <a
              href="/api/download-resume"
              download
              className="px-4 py-2 bg-secondary text-white hover:bg-white hover:text-secondary transition -rotate-6"
            >
              <div className="absolute inset-0 flex items-center justify-center border-2 border-primary rotate-6">
                <Image
                  src="https://github.com/encepsuryana.png"
                  alt="Profile"
                  className="w-56 h-72 md:w-64 md:h-80 bg-primary p-3 object-cover -rotate-6"
                  width={256}
                  height={320}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-primary text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-6">
                Download my Resume
              </div>
            </a>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center items-center bg-primary text-white text-lg font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
            <span className="px-4 py-2 bg-secondary text-white transition">
              Hey, over here!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
