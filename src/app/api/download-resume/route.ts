import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export function GET() {
  const userName = "Encep Suryana";
  const monthYear = new Date().toLocaleString("en-us", {
    month: "short",
    year: "numeric",
  });
  const fileName = `${userName} - Resume ${monthYear}.pdf`;

  const filePath = path.resolve("./public/file.pdf");

  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);

    // Create a NextResponse with the file buffer and appropriate headers
    const response = new NextResponse(fileBuffer);
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set(
      "Content-Disposition",
      `attachment; filename=${fileName}`
    );

    return response;
  } else {
    return new NextResponse(JSON.stringify({ error: "File not found" }), {
      status: 404,
    });
  }
}
