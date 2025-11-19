"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
