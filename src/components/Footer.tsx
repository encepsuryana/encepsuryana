import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h4 className="text-white text-md font-primary">
            &copy; 2021 Encep Suryana. All Rights Reserved. Made with ❤️ in
            Next.js | v.2.0.0
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
