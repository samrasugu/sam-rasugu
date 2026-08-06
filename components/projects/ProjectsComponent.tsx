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
      <div className="w-full max-w-5xl md:py-12">
        <p className="eyebrow mb-2">No. 05</p>
        <h1 className="font-display text-4xl text-ink mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
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
        <div className="py-12 mt-4 border-t border-line">
          <p className="eyebrow mb-2">No. 06</p>
          <h1 className="font-display text-2xl text-ink mb-6">
            Other projects
          </h1>
          <ul className="text-sub leading-loose">
            {projects
              .filter((project) => project.isOther)
              .map((project, index) => (
                <li className="gap-2 flex flex-row items-center" key={index}>
                  {project.title}{" "}
                  <a
                    href={project.github}
                    className="italic text-accent underline text-sm group"
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
