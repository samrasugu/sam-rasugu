"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
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
      <div className="w-full md:py-12">
        <p className="fig-label mb-2">Fig. 07 — Index</p>
        <h1 className="font-display uppercase text-4xl font-semibold text-fg my-6">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
          <p className="fig-label mb-2">Fig. 08</p>
          <h1 className="font-display uppercase text-2xl font-semibold text-fg mb-6">
            Other projects
          </h1>
          <ul className="list-none text-dim text-sm space-y-2">
            {projects
              .filter((project) => project.isOther)
              .map((project, index) => (
                <li className="gap-2 flex flex-row items-center" key={index}>
                  <span className="text-accent">›</span>
                  {project.title}{" "}
                  <a
                    href={project.github}
                    className="underline text-accent text-sm group"
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
