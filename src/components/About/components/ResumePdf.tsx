"use client";

import React from "react";

const GenerateResumePDF = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <a
        href="/api/download-resume"
        className="bg-primary font-semibold py-2 px-4 rounded-full text-black hover:bg-transparent hover:text-primary border border-primary transition-colors duration-300 ease-in-out no-underline"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default GenerateResumePDF;
