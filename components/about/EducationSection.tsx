import { GraduationCap } from "lucide-react";
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
      period: "August 2020",
      location: "Nairobi, Kenya",
      description:
        "Software Engineering, Data Structures and Algorithms, Human Centered Design, Computer Networks, Database Systems, Distributed Systems, Machine Learning, and Artificial Intelligence.",
      credits: "Second Class Honors Upper Division",
    },
  ];

  return (
    <div className="md:pb-12 bg-white dark:bg-primary-background">
      <div className="flex flex-row gap-7 items-center justify-start">
        <GraduationCap size={34} className="text-gray-900 dark:text-white" />
        <h1 className="text-3xl font-bold text-left my-12 text-gray-800 dark:text-white">
          Education
        </h1>
      </div>

      <div className="relative container mx-auto">
        {/* Vertical Timeline Line */}
        <div className="hidden md:absolute md:flex left-6 top-0 h-full w-1 bg-gray-800 dark:bg-white"></div>

        {education.map((edu, index) => (
          <div key={index} className="flex flex-row items-start mb-16 relative">
            {/* Timeline Circle */}
            <div className="hidden md:absolute left-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gray-700 dark:bg-white border-3 border-white dark:border-black z-10 md:flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-white dark:bg-black"></div>
            </div>

            {/* Content */}
            <div className="md:ml-16 w-full">
              <div className="flex flex-col bg-white dark:bg-primary-background p-4 rounded-lg items-start border border-gray-500 dark:border-gray-300/10">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                  {edu.level} in {edu.course} @
                  <a
                    href={edu.schoolUrl}
                    className="text-gray-700 dark:text-white hover:underline ml-1 font-bold"
                  >
                    {edu.school}
                  </a>
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-2">
                  {edu.period} | {edu.location}
                </p>
                <p className="text-gray-700 dark:text-gray-400 mb-2">
                  <span className="font-bold text-gray-700 dark:text-white">Grade:</span>{" "}
                  {edu.credits}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-left text-base">
                  <span className="font-bold text-gray-700 dark:text-white">
                    Relevant coursework:
                  </span>{" "}
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
