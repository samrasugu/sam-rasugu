import { User } from "lucide-react";
import React from "react";

export default function DescriptionSection() {
  return (
    <section className="pt-16 bg-white dark:bg-primary-background">
      <div className="flex flex-row gap-7 items-center my-7">
        <User size={34} className="text-gray-900 dark:text-white" />
        <h1 className="text-3xl font-bold text-left text-gray-900 dark:text-white">
          About Me
        </h1>
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        I&apos;m a Software Engineer who turns complex requirements into
        elegant, production-ready solutions. I specialize in full-stack
        development with TypeScript, React, Next.js, Node.js, Flutter, and
        Python.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        Beyond development, I&apos;m expanding my expertise in cloud
        infrastructure and DevOps practices, with AWS certifications and
        hands-on experience deploying scalable applications. I thrive in dynamic
        environments where I can solve complex problems and contribute to
        meaningful projects.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        Currently based in Kenya, I&apos;m open to opportunities that challenge
        me to grow while making a positive impact.
      </p>
    </section>
  );
}
