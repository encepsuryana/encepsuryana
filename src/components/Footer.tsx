import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center">
          <p className="text-white text-sm">
            &copy; 2021 Encep Suryana. All Rights Reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://twitter.com/encepsuryana"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Twitter
            </a>
            <a
              href="
https://www.linkedin.com/in/encepsuryana/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              LinkedIn
            </a>
            <a href="#" className="text-white">
              Instagram
            </a>
            <a href="#" className="text-white">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
