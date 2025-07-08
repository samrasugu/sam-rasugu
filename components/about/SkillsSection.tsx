import { PenLine } from "lucide-react";
import React from "react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python"],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Flutter",
        "React Native",
        "Jest",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "REST APIs", "Pytest"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Firebase", "Docker"],
    },
    {
      title: "Tools",
      skills: ["Git", "Flutter Test", "Figma"],
    },
  ];

  return (
    <section className="my-12 bg-white dark:bg-primary-background">
      <div className="flex flex-row gap-4 items-center mb-12">
        <PenLine size={34} className="text-gray-900 dark:text-white" />
        <h1 className="text-3xl font-bold text-left text-gray-800 dark:text-white">
          Skills
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="text-left">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-transparent text-gray-700 dark:text-white px-2 py-1 rounded-full text-sm border border-gray-300/50 dark:border-gray-300/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
