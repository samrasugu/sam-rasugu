"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center text-center bg-primary-background py-6 px-4 md:px-10 lg:px-20 xl:px-40 z-50 w-full top-0">
        <Link href="/">
          <p className="text-2xl font-bold text-black">Sam Rasugu</p>
        </Link>

        <div className="hidden md:flex flex-row justify-between items-center text-center gap-8">
          <Link href="/">
            <p
              className={` ${
                pathname === "/" ? "text-orange-700" : "text-black"
              }`}
            >
              About
            </p>
          </Link>
          <Link href="/">
            <p
              className={` ${
                pathname === "/" ? "text-orange-700" : "text-black"
              }`}
            >
              Projects
            </p>
          </Link>
          <Link href="/">
            <p
              className={` ${
                pathname === "/" ? "text-orange-700" : "text-black"
              }`}
            >
              Thoughts
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
