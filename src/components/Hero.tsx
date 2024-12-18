import Image from "next/image";
import { FC } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiGlobeFill } from "react-icons/ri";

const Hero: FC = () => {
  return (
    <div className="container h-screen mx-auto">
      <div className="flex items-center justify-center mt-20">
        <div className="">
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
            <h1 className="text-6xl font-bold text-primary">
              Frontend Developer
            </h1>
            <p className="text-white mt-5">
              I&apos;m a frontend developer based in Indonesia. I specialize in
              creating high-quality websites and web applications.
            </p>
          </div>
        </div>

        <div className="">
          <Image
            src="https://github.com/encepsuryana.png"
            alt="Encep Suryana"
            className="w-96 h-full rounded-full bg-primary"
            width={384}
            height={384}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
