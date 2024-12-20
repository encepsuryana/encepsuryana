import { FC } from "react";

const Services: FC = () => {
  return (
    <div className="bg-black py-16 md:py-32" id="services">
      <div className="container mx-auto px-4 md:px-0">
        <div className="w-full flex justify-center items-center flex-col text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            My special <span className="text-primary font-bold">Services</span>
          </h1>

          <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
            I provide a variety of services to help you build your website or
            web application. I have experience in building websites and web
            applications using modern technologies like React, Next.js, and
            Tailwind CSS. I can also help you with your existing projects by
            providing consulting services or code reviews. If you need help with
            your project, don&apos;t hesitate to contact me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
