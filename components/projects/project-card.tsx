"use client";

import React, { useState } from "react";
import { GrGithub } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/typing";
import { client } from "@/app/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import {
  getPlatformIcon,
  getPlatformLabel,
  getPlatformTitle,
} from "@/lib/platform";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasCaseStudy = Boolean(project.body && project.body.length > 0);
  const iconClass =
    "text-dim group-hover:text-fg transition-colors duration-200";

  return (
    <div
      className="corner-marks p-4 bg-panel/50 border border-grid-line flex flex-col gap-4 w-full h-auto"
      aria-labelledby={`project-${index}-title`}
    >
      <div className="flex flex-col gap-4 justify-between h-full">
        {project.featuredImage && (
          <div className="flex flex-col w-full h-56 relative bg-center border border-grid-line">
            <Image
              src={imageUrlBuilder(client)
                .image(project.featuredImage as SanityImageSource)
                .url()}
              alt={`Project ${index + 1}`}
              className="object-cover object-center w-full grayscale-30 contrast-110"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-col flex-1 gap-3 justify-between">
          <p className="fig-label">Fig. {String(index + 1).padStart(2, "0")}</p>
          <h2 className="text-lg font-display uppercase text-fg">
            {project.title}
          </h2>
          {hasCaseStudy ? (
            <p className="text-sm text-dim text-ellipsis overflow-hidden line-clamp-5">
              {project.description}
            </p>
          ) : (
            <p
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-sm text-dim cursor-pointer ${
                isExpanded ? "" : "text-ellipsis overflow-hidden line-clamp-5"
              }`}
              title={isExpanded ? "Click to collapse" : "Click to expand"}
              aria-expanded={isExpanded}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }
              }}
            >
              {project.description}
            </p>
          )}
          {hasCaseStudy && (
            <Link
              href={`/projects/${project.slug.current}`}
              className="inline-flex items-center gap-1 text-sm font-mono text-accent hover:underline w-fit group"
            >
              Read case study
              <ArrowUpRight className="inline group-hover:scale-125 transition-transform duration-200" />
            </Link>
          )}
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-dim px-2 py-1 text-xs font-mono border border-grid-line"
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
                aria-label="View source code on GitHub"
                className="inline-flex items-center gap-2 px-3 py-2 border border-grid-line hover:border-dim transition-colors duration-200 group"
              >
                <GrGithub className={iconClass} size={16} />
                <span className="text-xs font-mono text-dim group-hover:text-fg">
                  Code
                </span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={getPlatformTitle(project.liveUrl)}
                className="inline-flex items-center gap-2 px-3 py-2 border border-grid-line hover:border-dim transition-colors duration-200 group"
              >
                {getPlatformIcon(project.liveUrl, iconClass)}
                <span className="text-xs font-mono text-dim group-hover:text-fg">
                  {getPlatformLabel(project.liveUrl)}
                </span>
              </a>
            )}

            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={getPlatformTitle(project.appStoreUrl)}
                className="inline-flex items-center gap-2 px-3 py-2 border border-grid-line hover:border-dim transition-colors duration-200 group"
              >
                {getPlatformIcon(project.appStoreUrl, iconClass)}
                <span className="text-xs font-mono text-dim group-hover:text-fg">
                  {getPlatformLabel(project.appStoreUrl)}
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
