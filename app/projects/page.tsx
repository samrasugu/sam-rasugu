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
        "NutriMate is an intelligent nutrition recommendation system I developed that leverages Retrieval Augmented Generation (RAG) to deliver personalized dietary guidance. The system combines a comprehensive nutrition knowledge base with advanced natural language processing capabilities to provide tailored recommendations based on users' unique health profiles, preferences, and goals.",
      githublink: "https://github.com/samrasugu/sam-rasugu/pulls",
      link: "https://example.com/project1",
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
      title: "Project 2",
      description: "Description of Project 2",
      githublink: "",
      link: "https://example.com/project2",
      image: "/images/nutrimate_2.jpg",
      techstack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Project 3",
      description: "Description of Project 2",
      githublink: "",
      link: "https://example.com/project2",
      image: "/images/nutrimate_2.jpg",
      techstack: ["React", "Node.js", "Express", "MongoDB"],
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
                    className="rounded-lg object-cover object-center"
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
      </div>
    </UIWrapper>
  );
}
