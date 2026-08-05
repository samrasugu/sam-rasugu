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
    <section className="md:pb-12">
      <p className="fig-label mb-2">Fig. 06 — Education</p>
      <h1 className="font-display uppercase text-4xl font-semibold text-fg mb-10">
        Education
      </h1>

      <div className="relative">
        <div className="hidden md:block absolute left-3 top-0 h-full w-px bg-grid-line"></div>

        {education.map((edu, index) => (
          <div key={index} className="flex flex-row items-start mb-10 relative">
            <div className="hidden md:flex absolute left-3 -translate-x-1/2 w-2.5 h-2.5 border border-fg bg-accent rotate-45 z-10"></div>

            <div className="md:ml-12 w-full corner-marks border border-grid-line p-4 bg-panel/50">
              <h3 className="text-lg font-display uppercase text-fg">
                {edu.level} in {edu.course} —{" "}
                <a
                  href={edu.schoolUrl}
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edu.school}
                </a>
              </h3>
              <p className="fig-label mt-2">
                {edu.period && `${edu.period} · `}
                {edu.location}
              </p>
              <p className="text-dim text-sm mt-2">
                <span className="text-fg font-mono">Grade: </span>
                {edu.credits}
              </p>
              <p className="text-dim text-sm mt-2">
                <span className="text-fg font-mono">Coursework: </span>
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
