"use client";

import React, { useState } from "react";
import { GrGithub } from "react-icons/gr";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/typing";
import { client } from "@/app/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4 dark:bg-primary-background rounded-xl flex flex-col gap-4 border border-gray-300/50 dark:border-gray-300/10 w-full h-auto">
      <div className="flex flex-col gap-4 justify-between h-full">
        {project.featuredImage && (
          <div className="flex flex-col w-full h-64 relative bg-center">
            <Image
              src={imageUrlBuilder(client)
                .image(project.featuredImage as SanityImageSource)
                .url()}
              alt={`Project ${index + 1}`}
              className="rounded-md object-fit object-center w-full"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-col flex-1 gap-4 justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <p
            onClick={toggleExpand}
            className={`text-base text-gray-700 dark:text-gray-300 cursor-pointer ${
              isExpanded ? "" : "text-ellipsis overflow-hidden line-clamp-5"
            }`}
            title={isExpanded ? "Click to collapse" : "Click to expand"}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-transparent text-gray-700 dark:text-white px-2 py-1 rounded-full text-sm border border-gray-300/50 dark:border-gray-300/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-3 items-center">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrGithub
                  className="text-gray-700 dark:text-gray-300 cursor-pointer dark:hover:text-white"
                  size={24}
                />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="text-gray-700 dark:text-gray-300 underline text-sm group dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project{" "}
                <ArrowUpRight className="inline group-hover:scale-105 transition-transform duration-200" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
