import { BriefcaseBusiness } from "lucide-react";
import React from "react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  description: string;
  keyHighlights?: string[];
  technologies?: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Technical Consultant & Digital Lead",
      company: "Tunda Consulting",
      companyUrl: "https://tundaconsulting.co",
      period: "Feb 2025 - Present",
      location: "Nairobi, Kenya - Part-time(Remote)",
      description:
        "At Tunda Consulting, I lead all things digital — from engineering to brand strategy. As a trusted technical advisor, I help shape how the company shows up online and how it builds digital products for clients.",
      keyHighlights: [
        "Designed and developed the company's website using Next.js and TailwindCSS, hosted on Vercel — optimized for mobile, SEO, and fast load times.",
        "Own the full visual identity, brand strategy, and media presence — aligning design systems with service offerings.",
        "Guide internal tooling and architecture decisions, working closely with the founding team on product and technical strategy.",
        "Collaborate on proposals, pitch decks, and messaging — blending technology with clear, compelling storytelling.",
      ],
      technologies: [
        "AWS",
        "Next.js",
        "TypeScript",
        "Figma",
        "Vercel",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      title: "Senior Software Engineer",
      company: "MONOS",
      companyUrl: "https://monos.ai",
      period: "April 2024 - July 2025",
      location: "Manchester, UK - Full-time(Remote)",
      description:
        "At MONOS, I worked on a suite of mission-driven digital platforms spanning education, humanitarian aid, and commerce — often from the ground up. I contributed to both frontend architecture and full product development, collaborating remotely across teams.",
      keyHighlights: [
        "MONOS App (Islamic Learning Platform): Built guided Quran learning flows, user progress tracking, and content delivery modules. Contributed to sustained growth of 5,000+ monthly premium users.",
        "EHEA ECO (Sustainability Hub): Developed core React components with accessibility and performance in mind. Integrated a headless CMS (Sanity.io) for dynamic content and used Framer Motion + Tailwind CSS for visual polish.",
        "MONOS Mankind (Digital Campaign Platform): Led frontend development for a multi-campaign donation system supporting causes like food security, education, and emergency relief. Architected features for secure donations, impact dashboards, and campaign analytics.",
        "Halal Directory (Global Search Engine): Designed and implemented a fully responsive directory UI with Elasticsearch-powered search and business verification workflows. From wireframes to deploy, I collaborated across product and backend teams.",
      ],
      technologies: [
        "Flutter",
        "React",
        "Next.js",
        "TypeScript",
        "AWS",
        "Firebase",
        "Figma",
        "Tailwind CSS",
        "Framer Motion",
        "Sanity.io",
      ],
    },

    {
      id: 3,
      title: "Software Engineer",
      company: "Savannah Informatics Limited",
      companyUrl: "https://www.savannahinformatics.com/",
      period: "June 2023 - May 2024",
      location: "Nairobi, Kenya - Full-time",
      description:
        "I contributed to the development of mobile-first healthcare and insurance platforms as part of a multidisciplinary product team. My work spanned cross-platform Flutter development, QA testing, feature documentation, research, and supporting app releases on both Android and iOS.",
      keyHighlights: [
        "UoNAfyaApp360 (Patient Engagement App): Contributed Flutter features for real-time medication tracking, secure health data, and community support. Integrated GraphQL for data fetching, Firebase for real-time sync, and analytics to improve retention.",
        "Uzazi Salama (Maternal Health Platform): Built UI components to digitize maternal health records, track key indicators, and enable two-way communication between patients and healthcare providers in underserved regions.",
        "Be.Well (Insurance Management App): Developed cross-platform Flutter features supporting benefit tracking, coverage management, and access to health services. Integrated APIs from multiple insurers and health networks.",
        "sghi_core (Flutter UI Library): Maintained and extended a shared component library used across Savannah’s mobile apps. Improved consistency, reusability, and developer velocity.",
        "QA + Documentation Support: Actively contributed to testing, documentation, and release processes across iOS and Android platforms.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "GraphQL",
        "Firebase",
        "Figma",
        "QA Testing",
      ],
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "USAID - HealthIT",
      companyUrl: "https://github.com/uonafya",
      period: "Aug 2023 - April 2024",
      location: "Nairobi, Kenya - Part-time(Remote)",
      description:
        "Contributed to the design, development, and launch of CPIMS (Child Protection Information Management System), an open-source health platform that delivers reliable, real-time national data to inform child protection policies and programs. Focused on frontend development, feature refinement, and cross-team collaboration for timely release.",
      technologies: ["Flutter", "Firebase", "QA Testing", "Figma"],
    },
    {
      id: 5,
      title: "Full Stack Software Engineer",
      company: "RedBrumbies Limited",
      companyUrl: "https://reds.co.ke",
      period: "May 2021 - July 2023",
      location: "Nairobi, Kenya - Full-time",
      description:
        "Worked across the full development stack to deliver impactful digital solutions in agriculture and civic engagement:",
      keyHighlights: [
        "Vitu Kwa Ground (Civic Analytics Platform): Built frontend and backend features to support user reporting, data visualization, and administrative dashboards. Contributed to platform scalability and improved performance of analytics pipelines.",
        "Agrofi (Agri-fintech App + USSD): Developed and maintained both mobile and backend components for a platform connecting 20,000+ farmers, suppliers, and lenders. Integrated payment workflows, user onboarding, and USSD logic to expand accessibility in low-connectivity regions.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "Flask",
      ],
    },
  ];

  return (
    <section className="pt-12 bg-white dark:bg-primary-background">
      <div className="flex flex-row gap-7 items-center my-12">
        <BriefcaseBusiness
          size={34}
          className="text-gray-900 dark:text-white"
        />
        <h1 className="text-3xl font-bold text-left text-gray-900 dark:text-white">
          Experience
        </h1>
      </div>

      <div className="relative container mx-auto">
        <div className="hidden md:absolute md:flex left-6 top-0 h-full w-1 bg-gray-800 dark:bg-white"></div>

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-row items-start mb-16 relative"
          >
            <div className="hidden md:absolute left-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gray-700 dark:bg-white border-3 border-white dark:border-black z-10 md:flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-white dark:bg-black"></div>
            </div>

            <div className="md:ml-16 w-full">
              <div className="flex flex-col bg-white dark:bg-primary-background p-4 rounded-lg items-start border border-gray-500 dark:border-gray-300/10">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                  {exp.title} @
                  <a
                    href={exp.companyUrl}
                    className="text-gray-700 dark:text-white hover:underline ml-1 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-2">
                  {exp.period} | {exp.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-left">
                  {exp.description}
                </p>
                {exp.keyHighlights && exp.keyHighlights.length > 0 && (
                  <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
                    {exp.keyHighlights.map((highlight, index) => (
                      <li className="py-2" key={index}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                {(exp.technologies?.length ?? 0) > 0 && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-700 dark:text-gray-400 font-semibold">
                      Stack:
                    </span>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-700 dark:text-gray-300">
                      {exp.technologies!.map((tech, index) => (
                        <React.Fragment key={index}>
                          <span>{tech}</span>
                          {index < exp.technologies!.length - 1 && (
                            <span className="mx-1 text-gray-400">•</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
