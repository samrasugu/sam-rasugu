import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between dark:bg-primary-background px-7 gap-8">
      <div className="flex flex-row gap-6">
        <a
          href="https://www.linkedin.com/in/sam-rasugu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            className="text-gray-900 dark:text-gray-text dark:hover:text-white"
            size={24}
          />
        </a>
        <a
          href="https://www.github.com/samrasugu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            className="text-gray-900 dark:text-gray-text dark:hover:text-white"
            size={24}
          />
        </a>
        <a href="mailto:mokuasamr@gmail.com" target="_blank" rel="noreferrer">
          <LuMail
            className="text-gray-900 dark:text-gray-text dark:hover:text-white"
            size={24}
          />
        </a>
      </div>

      <p className="text-gray-800 dark:text-gray-text text-xs">
        © 2025 Sam Rasugu
      </p>
    </footer>
  );
}
