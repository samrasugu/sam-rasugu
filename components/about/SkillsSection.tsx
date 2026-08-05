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
    <section className="my-12">
      <p className="fig-label mb-2">Fig. 05 — Stack</p>
      <h1 className="font-display uppercase text-4xl font-semibold text-fg mb-10">
        Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="corner-marks border border-grid-line p-4 bg-panel/50"
          >
            <p className="fig-label mb-3">{category.title}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-fg text-sm font-mono px-2 py-1 border border-grid-line"
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
