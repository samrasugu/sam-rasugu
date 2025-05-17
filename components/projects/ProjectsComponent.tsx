"use client";

import React from "react";
import { ArrowUpRight, Folder } from "lucide-react";
import { Project } from "@/typing";
import UIWrapper from "@/app/UIWrapper";
import ProjectCard from "./project-card";

export default function ProjectsComponent({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <UIWrapper>
      <div className="bg-white dark:bg-primary-background py-16">
        <div className="flex flex-row gap-4 items-center">
          <Folder className="text-gray-900 dark:text-white" size={34} />
          <h1 className="text-3xl font-bold text-left my-10 text-gray-700 dark:text-white">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects
            .filter((project) => !project.isOther)
            .map((project, index) => (
              <ProjectCard
                key={project._id || index}
                project={project}
                index={index}
              />
            ))}
        </div>
        <div className="py-12">
          <div className="flex flex-row gap-4 items-center my-7">
            <Folder size={34} className="text-gray-900 dark:text-white" />
            <h1 className="text-3xl font-bold text-left text-gray-700 dark:text-white">
              Other projects
            </h1>
          </div>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-base">
            {projects
              .filter((project) => project.isOther)
              .map((project, index) => (
                <li className="gap-4 flex flex-row items-center" key={index}>
                  {project.title}{" "}
                  <a
                    href={project.github}
                    className="underline text-sm group dark:hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ArrowUpRight className="inline group-hover:scale-125 transition-transform duration-200" />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </UIWrapper>
  );
}
