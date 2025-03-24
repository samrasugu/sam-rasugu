import React from "react";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin, LuMail } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between bg-primary-background py-6 px-4 md:px-10 lg:px-20 xl:px-40">
      <p className="text-black text-xs">
        © 2025 Sam Rasugu. All rights reserved.
      </p>
      <div className="flex flex-row justify-between gap-4">
        <a
          href="https://www.linkedin.com/in/sam-rasugu/"
          target="_blank"
          rel="noreferrer"
        >
          <LuLinkedin className="text-black" size={20} />
        </a>
        <a
          href="https://www.github.com/samrasugu/"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="text-black" size={20} />
        </a>
        <a
          href="mailto:https:mokuasamr@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <LuMail className="text-black" size={20} />
        </a>
      </div>
    </div>
  );
}
