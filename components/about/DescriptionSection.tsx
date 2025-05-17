import { User } from "lucide-react";
import React from "react";

export default function DescriptionSection() {
  return (
    <div className="pt-16 bg-white dark:bg-primary-background">
      <div className="flex flex-row gap-7 items-center my-7">
        <User size={34} className="text-gray-900 dark:text-white" />
        <h1 className="text-3xl font-bold text-left text-gray-900 dark:text-white">
          About Me
        </h1>
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        I&apos;m Sam Rasugu a Software Engineer with a passion for transforming
        ideas and building interactive applications. I have a strong foundation
        in software development, with a focus on mobile, web and backend
        technologies. My experience includes working with cross-functional teams
        to deliver high-quality products that meet user needs.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        Drawing on experience with DevOps, I am actively developing skills in
        this area. With a keen interest in cloud computing and CI/CD practices,
        I continuously seek ways to improve development processes, learn new
        technologies, and enhance my expertise. Thriving in fast-paced
        environments, I embrace new challenges with enthusiasm.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        Let&apos;s build something unforgettable! 🚀
      </p>
    </div>
  );
}
