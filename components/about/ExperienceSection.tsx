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
  active?: boolean;
}

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 0,
      title: "Lead Software Engineer",
      company: "Nurture Connect",
      companyUrl: "https://nurtureconnect.health/",
      period: "July 2025 - Present",
      location: "Remote (Contract)",
      description:
        "As a Lead Software Engineer, I drive the design and delivery of scalable, user-focused digital products from concept to deployment. I bridge the gap between hands-on development and technical leadership — mentoring engineers, defining architectural direction, and ensuring code quality across the stack. Passionate about building high-performing teams, optimizing systems, and translating business needs into elegant technical solutions.",
      technologies: [
        "React Native",
        "Azure",
        "Product Management",
        "Flask",
        "Android",
        "React.js",
        "Expo",
      ],
    },
    {
      id: 1,
      title: "Software Engineer",
      company: "C4DLab - University of Nairobi",
      companyUrl: "http://c4dlab.uonbi.ac.ke/",
      period: "Dec 2023 - July 2025",
      location: "Nairobi, Kenya - Full-time(Hybrid)",
      description:
        "At C4DLab, the R&D arm of the University of Nairobi’s School of Computing & Informatics, I currently lead software engineering and digital infrastructure efforts for research-focused platforms. I work closely with faculty, researchers, and partners to design, build, and scale solutions that support the lab’s innovation and digital transformation initiatives.",
      keyHighlights: [
        "Led end-to-end development of responsive, high-performance platforms supporting research and innovation initiatives. Focused on maintainable architecture and long-term scalability.",
        "Configured and managed cloud hosting environments — handling deployments, domain setup, SSL, and performance monitoring.",
        "Provided ongoing platform support and maintenance, addressing technical issues, rolling out updates, and optimizing reliability.",
        "Guided software tooling and infrastructure decisions aligned with C4DLab’s innovation-driven mission.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "AWS",
        "DigitalOcean",
        "Canva",
        "Figma",
        "Tailwind CSS",
        "PostgreSQL",
      ],
    },
    {
      id: 2,
      title: "Senior Software Engineer",
      company: "MONOS",
      companyUrl: "https://monos.ai",
      period: "April 2024 - July 2025",
      location: "Manchester, UK - Part-time(Remote)",
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
    <section className="pt-12">
      <p className="fig-label mb-2">Fig. 04 — Timeline</p>
      <h1 className="font-display uppercase text-4xl font-semibold text-fg mb-10">
        Experience
      </h1>

      <div className="relative">
        <div className="hidden md:block absolute left-3 top-0 h-full w-px bg-grid-line"></div>

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-row items-start mb-10 relative animate-fadeIn"
            style={{ animationDelay: `${exp.id * 100}ms` }}
          >
            <div className="hidden md:flex absolute left-3 -translate-x-1/2 w-2.5 h-2.5 border border-fg bg-accent rotate-45 z-10"></div>

            <div className="md:ml-12 w-full corner-marks border border-grid-line p-4 bg-panel/50">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-display uppercase text-fg">
                  {exp.title} —{" "}
                  <a
                    href={exp.companyUrl}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${exp.company} website`}
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="fig-label">
                  {exp.period} · {exp.location}
                </p>
              </div>
              <p className="text-dim text-sm">{exp.description}</p>
              {exp.keyHighlights && exp.keyHighlights.length > 0 && (
                <ul className="list-none pl-0 mt-3 text-dim text-sm space-y-2">
                  {exp.keyHighlights.map((highlight, index) => (
                    <li className="flex gap-2" key={index}>
                      <span className="text-accent shrink-0">›</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
              {(exp.technologies?.length ?? 0) > 0 && (
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <span className="fig-label">Stack:</span>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-dim text-sm font-mono">
                    {exp.technologies!.map((tech, index) => (
                      <React.Fragment key={index}>
                        <span>{tech}</span>
                        {index < exp.technologies!.length - 1 && (
                          <span className="text-grid-line">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
