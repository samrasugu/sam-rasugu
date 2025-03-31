import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  description: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Software Engineer",
      company: "MONOS",
      companyUrl: "https://monos.ai",
      period: "April 2024 - Present",
      location: "Manchester, UK - Hybrid",
      description:
        "As a Software Engineer at MONOS, I contributed to the development of several key products. I played a central role in building the MONOS App, enhancing its guided learning journeys, community-driven discussions, and content delivery system. For MONOS Mankind, I developed features for donation management and relief tracking to support humanitarian causes. In MONOS Markets, I helped create vendor tools and dashboards to manage small Halal businesses and improve public engagement. For the Halal Directory, I built a scalable search engine with verification workflows, enabling users to discover verified Halal businesses globally.",
    },
    {
      title: "Software Engineer",
      company: "Savannah Informatics Limited",
      companyUrl: "https://www.savannahinformatics.com/",
      period: "July 2023 - May 2024",
      location: "Nairobi, Kenya",
      description:
        "Actively contributed to the successful pilot and launch of myCareHub with the University of Nairobi and Johnson & Johnson, playing a key role in defining product requirements, designing, and piloting the UoNAfyaApp360 application. Played a key role in the maintenance and optimization of sghi_core, an open-source shared Flutter package critical for component and helper function management within the organization. Further enhanced team efficiency and collaboration by championing the adoption of SCRUM methodologies within the development workflow.",
    },
    {
      title: "Software Engineer",
      company: "RedBrumbies Limited",
      companyUrl: "https://reds.co.ke",
      period: "May 2021 - July 2023",
      location: "Nairobi, Kenya",
      description:
        "Worked as a Mobile Software Engineer in the development of Vitu Kwa Ground, a comprehensive platform for user engagement, reporting, and analytics. Involved in the creation of Agrofi, a mobile app and USSD platform designed to connect over 20,000 farmers, lenders, and suppliers, significantly impacting agricultural accessibility. Contributed to the successful application to the Microsoft Black Founders' Hub, showcasing a commitment to innovation and growth.",
    },
  ];

  return (
    <div className="py-12 bg-primary-background">
      <h1 className="text-5xl font-bold text-center mb-12 text-black">
        Experience
      </h1>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white"></div>

        {experiences.map((exp, index) => (
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
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
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
              <div className="flex flex-col bg-primary-background p-6 rounded-lg shadow-md items-start">
                <h3 className="text-xl font-bold text-black/70">
                  {exp.title} @
                  <a
                    href={exp.companyUrl}
                    className="text-black hover:underline ml-1"
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="text-gray-600 mb-2">
                  {exp.period} | {exp.location}
                </p>
                <p className="text-gray-800 text-left">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
