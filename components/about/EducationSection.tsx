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
      period: "August 2020 - September 2024",
      location: "Nairobi, Kenya",
      description:
        "Software Engineering, Data Structures and Algorithms, Human Centered Design, Computer Networks, Database Systems, Distributed Systems, Machine Learning, and Artificial Intelligence.",
      credits: "Second Class Honors Upper Division",
    },
  ];

  return (
    <div className="py-12 bg-primary-background">
      <h1 className="text-5xl font-bold text-center mb-12 text-black">
        Education
      </h1>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white"></div>

        {education.map((edu, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start mb-16 relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-black z-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-black"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 7v9l10 5 10-5V7"></path>
                <path d="M2 16l10 5 10-5"></path>
                <path d="M12 12v9"></path>
                <path d="M20 16V9"></path>
              </svg>
            </div>

            {/* Content */}
            <div
              className={`w-full md:w-5/12 md:ml-0 ${
                index % 2 === 0
                  ? "md:mr-auto md:text-right md:pr-12"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-black/70">
                  {edu.level} in {edu.course} @
                  <a
                    href={edu.schoolUrl}
                    className="text-black hover:underline ml-1"
                  >
                    {edu.school}
                  </a>
                </h3>
                <p className="text-gray-600 mb-2">
                  {edu.period} | {edu.location}
                </p>
                <p className="text-gray-800 text-left text-base">
                  <span className="font-bold">Relevant coursework:</span>{" "}
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
