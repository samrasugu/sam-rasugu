"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import Image from "next/image";

interface NavBarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Projects", href: "/projects" },
    { id: 4, label: "Blog", href: "/blog" },
  ];

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="bg-bg min-h-screen relative">
      {/* mobile header */}
      <header className="md:hidden fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center rounded-sm bg-panel border border-grid-line"
        >
          <Image
            src="/images/me_avatar.png"
            alt="Sam Rasugu"
            className="w-12 h-12 object-cover grayscale contrast-125"
            width={48}
            height={48}
            priority
          />
        </Link>

        <button
          className="p-2 rounded-sm bg-panel border border-grid-line"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
        >
          {isSidebarOpen ? (
            <X className="text-fg" size={24} />
          ) : (
            <Menu className="text-fg" size={24} />
          )}
        </button>
      </header>

      {/* sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-full md:w-64 transform transition-transform duration-300 ease-in-out md:border-r py-28 md:py-16 flex flex-col
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 bg-panel border-grid-line`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="hidden md:flex justify-start mb-8 mx-6">
          <Link
            href="/"
            className="rounded-sm border border-grid-line"
            onClick={closeSidebar}
          >
            <Image
              src="/images/me_avatar.png"
              alt="Sam Rasugu"
              className="object-cover grayscale contrast-125"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        <p className="fig-label px-4 mb-2 hidden md:block">Fig. 00 — Index</p>

        <nav className="p-4 space-y-2 flex-grow" role="navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={closeSidebar}
              className={`flex items-center space-x-3 p-3 rounded-sm transition-colors font-mono text-sm ${
                pathname === item.href
                  ? "text-accent font-bold border-l-2 border-accent bg-accent/5"
                  : "text-dim hover:text-fg border-l-2 border-transparent"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <Footer />
      </aside>

      <main className="md:ml-64 min-h-screen">
        <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 pt-20 md:pt-0">
          {children}
        </div>
      </main>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
