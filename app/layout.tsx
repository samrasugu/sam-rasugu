import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Rasugu - Software Engineer",
  description:
    "Software Engineer specializing in full-stack and cross-platform development using TypeScript, React, Next.js, Node.js, Flutter, and Python.",
  keywords: ["Software Engineer", "TypeScript", "React", "Next.js", "Flutter"],
  authors: [{ name: "Sam Rasugu" }],
  openGraph: {
    title: "Sam Rasugu - Software Engineer",
    description: "Software Engineer specializing in full-stack development",
    url: "https://samrasugu.com",
    siteName: "Sam Rasugu Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
