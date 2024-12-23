"use client";

import React from "react";

const GenerateResumePDF = () => {
  const userName = "Encep Suryana";
  const monthYear = new Date().toLocaleString("en-us", {
    month: "short",
    year: "numeric",
  });

  const fileName = `${userName} - Resume ${monthYear}.pdf`;

  return (
    <div className="flex flex-col items-center justify-center">
      <a
        href="/file.pdf"
        className="bg-primary font-semibold py-2 px-4 rounded-full text-black hover:bg-transparent hover:text-primary border border-primary transition-colors duration-300 ease-in-out no-underline"
        download={fileName}
      >
        Download My Resume
      </a>
    </div>
  );
};

export default GenerateResumePDF;
