import React from "react";
import UIWrapper from "../UIWrapper";
import { GrGithub } from "react-icons/gr";
import Image from "next/image";
import { Folder } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "NutriMate",
      description:
        "NutriMate is an intelligent nutrition chat system that leverages Retrieval Augmented Generation (RAG) to deliver personalized dietary guidance. The system combines a comprehensive nutrition knowledge base with advanced natural language processing capabilities to provide tailored recommendations based on users' unique health profiles, preferences, and goals.",
      githublink: "https://github.com/samrasugu/nutrimate",
      link: "https://github.com/samrasugu/nutrimate",
      image: "/images/NutriMate.png",
      techstack: [
        "Python",
        "Flutter",
        "Flask",
        "LangChain",
        "Pinecone",
        "OpenAI",
        "Redis",
        "PostgreSQL",
      ],
    },
    {
      title: "Halal Directory",
      description:
        "A search engine for discovering and marketing Halal businesses enhancing their visibility and accessibility.",
      githublink: "",
      link: "https://monoshalaldirectory.com",
      image: "/images/halal_directory.png",
      techstack: [
        "TypeScript",
        "Next.JS",
        "Redux",
        "Python",
        "Flask",
        "AWS Amplify",
      ],
    },
    {
      title: "MONOS App",
      description:
        "MONOS is a comprehensive Islamic learning platform offering personalized Quran lessons, AI-powered Q&A, and direct access to religious scholars. The app aims to empower Muslims globally in their spiritual growth through interactive learning and community connection.",
      githublink: "",
      link: "https://play.google.com/store/apps/details?id=ai.monos",
      image: "/images/monos_app.png",
      techstack: ["Flutter", "Python", "OpenAI", "PostgreSQL"],
    },
    {
      title: "MONOS Mankind",
      description:
        "MONOS Mankind is a humanitarian initiative with sustainable campaigns addressing poverty alleviation, food security, education, emergency relief, and community development—all driven by Islamic values of compassion and service to create lasting positive change in vulnerable communities worldwide.F",
      githublink: "",
      link: "https://monosmankind.com",
      image: "/images/monos_mankind.png",
      techstack: [
        "TypeScript",
        "Next.JS",
        "Redux",
        "Python",
        "Flask",
        "AWS Amplify",
      ],
    },
    {
      title: "UoNAfyaApp360°",
      description:
        "UoNAfyaApp360 is a health app designed to help users track their health and stay up to date with their medication. It includes features like a mood diary, community groups, and educational content focusing on diet, exercise, and mental health. The app also provides appointment and pill reminders, and clinic notices.",
      githublink: "",
      link: "https://play.google.com/store/apps/details?id=com.mycarehub.prohealth360",
      image: "/images/UoN_360.png",
      techstack: ["Flutter", "GraphQL", "Firebase", "Python"],
    },
    {
      title: "Vitu Kwa Ground",
      description:
        "A mobile app for Vitu Kwa Ground, an initiative building a data platform that aims to connect people, and organizations through user engagement, reporting and analytics.",
      githublink: "",
      link: "https://play.google.com/store/apps/details?id=ke.co.reds.app.vkg",
      image: "/images/VKG_Poster.png",
      techstack: [
        "Flutter",
        "NodeJS",
        "TypeScript",
        "MySQL",
        "Firebase",
        "Azure",
      ],
    },
    {
      title: "Agrofi",
      description:
        "Agrofi is an application that connects farmers with lenders and suppliers, providing a platform for farmers to access loans, supplies and showcase their products and buyers to find fresh produce.",
      githublink: "https://github.com/samrasugu/Agrofi",
      link: "https://play.google.com/store/apps/details?id=farm.agrofi.agrofi",
      image: "/images/agrofi_photo.jpg",
      techstack: [
        "TypeScript",
        "Flutter",
        "NodeJS",
        "Azure",
        "Firebase",
        "JavaScript",
        "MongoDB",
      ],
    },
  ];
  return (
    <UIWrapper>
      <div className="bg-primary-background py-10">
        <div className="flex flex-row gap-4 items-center">
          <Folder size={34} />
          <h1 className="text-3xl font-bold text-left my-10 text-white">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-primary-background rounded-xl flex flex-col gap-4 border border-gray-300/10 h-auto"
            >
              <div className="flex flex-col gap-4 justify-between h-full">
                <div className="flex flex-col w-full h-64 relative bg-center">
                  <Image
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="rounded-lg object-fill object-center w-full"
                    fill={true}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-4 justify-between">
                  <h2 className="text-xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="text-base text-gray-300 text-ellipsis overflow-hidden line-clamp-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techstack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    {project.githublink !== "" && (
                      <a
                        href={project.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GrGithub
                          className="text-gray-300 cursor-pointer"
                          size={24}
                        />
                      </a>
                    )}

                    <a
                      href={project.link}
                      className="text-gray-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-12">
          <div className="flex flex-row gap-4 items-center">
            <Folder size={34} />
            <h1 className="text-3xl font-bold text-left my-10 text-white">
              Other projects
            </h1>
          </div>
        </div>
      </div>
    </UIWrapper>
  );
}
