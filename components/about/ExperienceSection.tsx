import { BriefcaseBusiness } from "lucide-react";
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
        "As a Software Engineer at MONOS, I contribute to the development of several key products. I play a central role in building the MONOS App, enhancing its guided learning journeys, community-driven discussions, and content delivery system. For MONOS Mankind, I developed features for donation management and relief tracking to support humanitarian causes. In MONOS Markets, I helped create vendor tools and dashboards to manage small Halal businesses and improve public engagement. For the Halal Directory, I built a scalable search engine with verification workflows, enabling users to discover verified Halal businesses globally.",
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
      <div className="flex flex-row gap-4 items-center">
        <BriefcaseBusiness size={34} />
        <h1 className="text-3xl font-bold text-left my-12 text-white">
          Experience
        </h1>
      </div>

      <div className="relative container mx-auto">
        {/* vertical timeline line */}
        <div className="hidden md:absolute md:flex left-6 top-0 h-full w-1 bg-white"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-row items-start mb-16 relative">
            {/* timeline circle*/}
            <div className="hidden md:absolute left-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-black z-10 md:flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-black"></div>
            </div>

            {/* content */}
            <div className="md:ml-16 w-full">
              <div className="flex flex-col bg-primary-background p-4 rounded-lg items-start border border-gray-300/10">
                <h3 className="text-xl font-semibold text-gray-300">
                  {exp.title} @
                  <a
                    href={exp.companyUrl}
                    className="text-white hover:underline ml-1 font-bold"
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="text-gray-400 mb-2">
                  {exp.period} | {exp.location}
                </p>
                <p className="text-gray-300 text-left">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
