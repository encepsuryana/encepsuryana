"use client";

import { scrollPosition } from "@@/utils/positions";
import Image from "next/image";
import { FC } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { RiGlobeFill } from "react-icons/ri";

const Hero: FC = () => {
  return (
    <div
      className="container mx-auto px-7 md:px-0 h-screen flex flex-col justify-center"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:mt-20">
        <div className="md:mr-10 mt-8 md:mt-0 mb-8 md:mb-0">
          <Image
            src="https://github.com/encepsuryana.png"
            alt="Encep Suryana"
            className="w-60 md:w-96 h-full rounded-full bg-primary"
            width={384}
            height={384}
          />
        </div>

        <div className="mt-10 md:mt-0">
          <div className="text-white">
            <p className="text-primary font-semibold">
              <BsFillBriefcaseFill className="inline-block mr-2 -mt-[0.2px]" />
              Currently Available for Freelance Work
            </p>
            <p className="text-white font-semibold mt-1">
              <RiGlobeFill className="inline-block mr-2 -mt-[0.2px]" />
              Worldwide
            </p>

            <div className="h-0.5 w-40 bg-primary mt-2"></div>
          </div>

          <div className="text-white mt-10">
            <h3 className="text-4xl font-bold">
              Hi👋, I&apos;m Encep Suryana, S.Kom.
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Frontend Developer
            </h1>
            <p className="text-white mt-5">
              I&apos;m a frontend developer based in Indonesia with over 4 years
              of experience. I specialize in creating high-quality websites and
              web applications.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center md:mt-60"
        onClick={() => scrollPosition("about")}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-sm mb-8">
            🚀 Let&apos;s explore my journey together!
          </p>
          <div className="flex flex-col justify-center items-center animate-bounce w-8 md:w-12 h-8 md:h-12 bg-primary rounded-full">
            <MdOutlineKeyboardDoubleArrowDown className="text-black w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
