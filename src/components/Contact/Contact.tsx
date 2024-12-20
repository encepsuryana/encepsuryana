// create a new component for contact

import { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="bg-black py-16 md:py-32" id="contact">
      <div className="container mx-auto px-4 md:px-0">
        <div className="w-full flex justify-center items-center flex-col text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-primary font-bold">Me</span>
          </h1>

          <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
            If you want to get in touch with me, you can send me an email at{" "}
            <a
              href="mailto:encep.suryanajr@gmail.com"
              className="text-primary font-bold"
            >
              Encep Suryana
            </a>{" "}
            or you can send me a message on{" "}
            <a
              href="https://twitter.com/encepsuryana"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-bold"
            >
              Twitter
            </a>
            . I will try to get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
