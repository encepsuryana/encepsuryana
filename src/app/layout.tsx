import type { Metadata } from "next";
import { IBM_Plex_Sans, VT323 } from "next/font/google";
import "./globals.css";

const poppins = IBM_Plex_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const vt323 = VT323({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Encep Suryana - Personal Resume",
  description: "Personal resume of Encep Suryana",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${vt323.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
