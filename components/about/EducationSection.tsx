import React from "react";

interface EducationItem {
  course: string;
  level: string;
  school: string;
  schoolUrl: string;
  period: string;
  location: string;
  description: string;
  credits: string;
}

const EducationSection: React.FC = () => {
  const education: EducationItem[] = [
    {
      course: "Computer Science",
      level: "Bachelor of Science",
      school: "University of Nairobi",
      schoolUrl: "https://uonbi.ac.ke",
      period: "",
      location: "Nairobi, Kenya",
      description:
        "Software Engineering, Data Structures and Algorithms, Distributed Systems, Database Systems, Machine Learning, Artificial Intelligence, Computer Networks, and Human Centered Design.",
      credits: "Second Class Honors Upper Division",
    },
  ];

  return (
    <section className="md:pb-12 pt-8 border-t border-line">
      <p className="eyebrow mb-2">No. 04</p>
      <h1 className="font-display text-4xl text-ink mb-8">Education</h1>

      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-display text-xl text-ink">
              {edu.level} in {edu.course}{" "}
              <a
                href={edu.schoolUrl}
                className="text-accent italic hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                — {edu.school}
              </a>
            </h3>
            <p className="text-sub text-sm italic mt-1">
              {edu.period && `${edu.period} · `}
              {edu.location}
            </p>
            <p className="text-sub leading-relaxed mt-3">
              <span className="italic text-ink">Grade — </span>
              {edu.credits}
            </p>
            <p className="text-sub leading-relaxed mt-2">
              <span className="italic text-ink">Coursework — </span>
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
