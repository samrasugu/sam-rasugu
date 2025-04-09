import React from "react";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin, LuMail } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between bg-primary-background px-7 gap-8">
      <div className="flex flex-row gap-6">
        <a
          href="https://www.linkedin.com/in/sam-rasugu/"
          target="_blank"
          rel="noreferrer"
        >
          <LuLinkedin className="text-gray-text" size={20} />
        </a>
        <a
          href="https://www.github.com/samrasugu/"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="text-gray-text" size={20} />
        </a>
        <a href="mailto:mokuasamr@gmail.com" target="_blank" rel="noreferrer">
          <LuMail className="text-gray-text" size={20} />
        </a>
      </div>

      <p className="text-gray-text text-xs">© 2025 Sam Rasugu</p>
    </div>
  );
}
