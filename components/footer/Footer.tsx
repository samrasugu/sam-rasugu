import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between px-7 gap-8">
      <div className="flex flex-row gap-6">
        <a
          href="https://www.linkedin.com/in/samrasugu-m/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-sub hover:text-ink" size={22} />
        </a>
        <a
          href="https://www.github.com/samrasugu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-sub hover:text-ink" size={22} />
        </a>
        <a href="mailto:mokuasamr@gmail.com" target="_blank" rel="noreferrer">
          <LuMail className="text-sub hover:text-ink" size={22} />
        </a>
      </div>

      <p className="text-sub text-xs italic">
        © {new Date().getFullYear()} Sam Rasugu
      </p>
    </footer>
  );
}
