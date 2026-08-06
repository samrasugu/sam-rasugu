import type { Metadata } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import "./globals.css";
import React from "react";

const fraunces = Fraunces({
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-body",
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Rasugu - Software Engineer",
  verification: {
    google: "AoY3ZKV038ILaQhs4yPpoNmFd9GbFy0fmOP6o44X4yM",
  },
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
      <body
        className={`${fraunces.variable} ${newsreader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
