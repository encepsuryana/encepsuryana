import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-xs md:text-sm">
            &copy; 2021 Encep Suryana. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
