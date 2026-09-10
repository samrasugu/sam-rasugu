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
      title: "Senior Software Engineer",
      company: "C4DLab — University of Nairobi",
      companyUrl: "http://c4dlab.uonbi.ac.ke/",
      period: "Dec 2023 - Present",
      location: "Nairobi, Kenya",
      description:
        "Build full-stack solutions for the R&D lab of the University of Nairobi's School of Computing and Informatics. Work directly with stakeholders to define requirements, scope features, and ship production-grade software with no PM or tech lead.",
      keyHighlights: [
        "Build full-stack solutions in TypeScript, React, Next.js, Node.js, Python, and AWS for the lab's research and innovation initiatives.",
        "Manage Docker-based services on Linux, including reverse proxy setup, environment configuration, and basic observability.",
        "Use AI-assisted coding tools daily while reviewing and rewriting AI-generated code before it goes to production.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "AWS",
        "Docker",
      ],
    },
    {
      id: 1,
      title: "Lead Software Engineer",
      company: "Nurture Connect",
      companyUrl: "https://nurtureconnect.health/",
      period: "Jul 2025 - Jul 2026",
      location: "Remote (Contract)",
      description:
        "Drive the design and delivery of scalable, user-focused digital products from concept to deployment. Bridge hands-on development and technical leadership by mentoring engineers, defining architectural direction, and ensuring code quality across the stack.",
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
      id: 2,
      title: "Senior Software Engineer",
      company: "MONOS",
      companyUrl: "https://monos.ai",
      period: "Apr 2024 - Jun 2025",
      location: "Remote (UK)",
      description:
        "Led frontend development for EHEA ECO using Next.js, Sanity, Tailwind CSS, and Framer Motion. Built the core self-guided education modules for the MONOS App on iOS and Android, now serving over 5,000 monthly premium users. Delivered MONOS Mankind end to end: a digital campaign platform supporting humanitarian initiatives across multiple countries.",
      keyHighlights: [
        "UX metrics improved by 25% and user engagement increased measurably on EHEA ECO.",
        "Built self-guided education modules for over 5,000 monthly premium users.",
        "Delivered a multi-country digital campaign platform supporting humanitarian initiatives.",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Sanity.io",
      ],
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Savannah Informatics",
      companyUrl: "https://www.savannahinformatics.com/",
      period: "Jun 2023 - May 2024",
      location: "Nairobi, Kenya",
      description:
        "Built and maintained features for two live health apps, UoNAfyaApp360 and Be.Well, with a focus on data confidentiality, access control, and audit trails.",
      keyHighlights: [
        "Created and maintained sghi_core, a shared Flutter component library used across the company's mobile products. Wrote the API documentation and onboarded other engineers to the library.",
        "Integrated GraphQL, Firebase real-time data, and token-based authentication across health platforms.",
      ],
      technologies: ["Flutter", "Dart", "GraphQL", "Firebase"],
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "USAID HealthIT",
      companyUrl: "https://github.com/uonafya",
      period: "Aug 2023 - Apr 2024",
      location: "Remote",
      description:
        "Contributed to CPIMS, an open-source child protection platform designed for real-time national data reporting and government data residency compliance.",
    },
    {
      id: 5,
      title: "Software Engineer",
      company: "RedBrumbies",
      companyUrl: "https://reds.co.ke",
      period: "May 2021 - Jul 2023",
      location: "Nairobi, Kenya",
      description:
        "Built Vitu Kwa Ground and Agrofi, civic tech and agricultural access platforms with web, mobile, analytics, and USSD components for East African users.",
      keyHighlights: [
        "Built web, mobile, analytics, and USSD components for East African users.",
        "Worked directly with non-technical stakeholders to scope features, and produced documentation and handoff materials from scratch.",
      ],
      technologies: ["Node.js", "Python", "Flask", "Flutter", "MongoDB"],
    },
  ];

  return (
    <section className="pt-12">
      <p className="eyebrow mb-2">No. 02</p>
      <h1 className="font-display text-4xl text-ink mb-10">Experience</h1>

      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className={`grid grid-cols-[2.75rem_1fr] gap-4 py-8 animate-fadeIn ${
              i > 0 ? "border-t border-line" : ""
            }`}
            style={{ animationDelay: `${exp.id * 100}ms` }}
          >
            <p className="eyebrow pt-1">
              {String(exp.id + 1).padStart(2, "0")}
            </p>
            <div className="min-w-0">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="font-display text-xl text-ink">
                  {exp.title}{" "}
                  <a
                    href={exp.companyUrl}
                    className="text-accent italic hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${exp.company} website`}
                  >
                    — {exp.company}
                  </a>
                </h3>
                <p className="text-sub text-sm italic">
                  {exp.period} · {exp.location}
                </p>
              </div>
              <p className="text-sub leading-relaxed mt-3">{exp.description}</p>
              {exp.keyHighlights && exp.keyHighlights.length > 0 && (
                <ul className="mt-3 text-sub leading-relaxed space-y-2">
                  {exp.keyHighlights.map((highlight, index) => (
                    <li className="pl-4 border-l border-line" key={index}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
              {(exp.technologies?.length ?? 0) > 0 && (
                <p className="text-sub italic text-sm mt-3">
                  Stack — {exp.technologies!.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
