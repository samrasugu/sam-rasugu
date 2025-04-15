import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Rasugu",
  description: "samrasugu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
