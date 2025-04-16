"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import Image from "next/image";
import ThemeToggle from "../buttons/ThemeToggle";

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
    <div className="min-h-screen bg-white dark:bg-primary-background">
      <Link
        className="left-4 absolute md:hidden flex items-center justify-end top-4 rounded-full bg-primary-background shadow-xl border border-gray-300/30"
        href="/"
      >
        <Image
          src="/images/me_avatar.png"
          alt="Sam Rasugu"
          className="rounded-full w-12 h-12 object-cover"
          width={100}
          height={100}
        />
      </Link>

      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-xl md:hidden bg-white dark:bg-primary-background shadow-xl border border-gray-300/30"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <X className="text-gray-900 dark:text-white" size={24} />
        ) : (
          <Menu className="text-gray-900 dark:text-white" size={24} />
        )}
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-full md:w-64 transform transition-transform duration-300 ease-in-out md:border-r py-28 md:py-16 flex flex-col
          ${isSidebarOpen ? "translate-y-0" : "-translate-x-full"} 
          md:translate-x-0 bg-white dark:bg-primary-background shadow-lg border-gray-300/20`}
      >
        <div className="flex justify-start mb-8 relative mx-6">
          <Link
            className="bg-primary-background rounded-full shadow-xl border border-white/70"
            href="/"
          >
            <Image
              src="/images/me_avatar.png"
              alt="Sam Rasugu"
              className="rounded-full object-cover"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <nav className="p-4 space-y-2 flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                pathname === item.href
                  ? "dark:text-white font-semibold"
                  : "text-gray-500 bg-transparent"
              } `}
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <Footer />
      </aside>

      <main
        className={`transition-all duration-200 ease-in-out ${
          isSidebarOpen ? "md:ml-64" : "md:ml-64 ml-0"
        } min-h-screen`}
      >
        <div className="flex flex-col items-center px-4 md:px-10 lg:px-20">
          {children}
        </div>
        <div className="fixed bottom-12 right-8 flex items-center justify-between px-4">
          <ThemeToggle />
        </div>
      </main>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 dark:bg-primary-background bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
