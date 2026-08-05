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
    <section className="my-12 pt-8 border-t border-line">
      <p className="eyebrow mb-2">No. 03</p>
      <h1 className="font-display text-4xl text-ink mb-8">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="text-left">
            <p className="font-display italic text-lg text-accent mb-2">
              {category.title}
            </p>
            <p className="text-sub leading-relaxed">
              {category.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
