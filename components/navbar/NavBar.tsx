"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: LayoutProps) {
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "About",
      href: "/about",
    },
    {
      id: 3,
      label: "Projects",
      href: "/projects",
    },
  ];
  return (
    <div className="min-h-screen bg-primary-background">
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-xl md:hidden bg-primary-background shadow-xl border border-gray-300/30"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <Menu className="text-white" size={24} />
        )}
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 transform transition-transform duration-200 ease-in-out border-r py-28 md:py-16 flex flex-col
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 bg-primary-background shadow-lg border-gray-300/20`}
      >
        <div className="h-16 flex items-center justify-start top-28 px-7">
          <Link href="/">
            <p className="text-3xl font-bold text-white">Sam Rasugu</p>
          </Link>
        </div>

        <nav className="p-4 space-y-2 flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-3 p-3 rounded-xl hover:bg-primaryGreen/30 hover:text-primaryGreen transition-colors ${
                pathname === item.href
                  ? "text-white bg-primaryGreen/30 underline"
                  : "text-gray-400 bg-transparent"
              } `}
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <Footer/>
      </aside>

      <main
        className={`transition-all duration-200 ease-in-out ${
          isSidebarOpen ? "md:ml-64" : "md:ml-64 ml-0"
        } min-h-screen`}
      >
        <div className="flex flex-col items-center px-4 md:px-10 lg:px-20">{children}</div>
      </main>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-primary-background bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
