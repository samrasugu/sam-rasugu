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
    "text-sub group-hover:text-ink transition-colors duration-200";

  return (
    <div
      className="flex flex-col gap-3 w-full h-auto"
      aria-labelledby={`project-${index}-title`}
    >
      {project.featuredImage && (
        <div className="flex flex-col w-full h-48 relative bg-center border border-line">
          <Image
            src={imageUrlBuilder(client)
              .image(project.featuredImage as SanityImageSource)
              .url()}
            alt={`Project ${index + 1}`}
            className="object-cover object-center w-full grayscale-30 sepia-15"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 gap-2 justify-between border-t border-line pt-3">
        <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
        <h2 className="font-display text-xl text-ink">{project.title}</h2>
        {hasCaseStudy ? (
          <p className="text-sub text-sm leading-relaxed text-ellipsis overflow-hidden line-clamp-5">
            {project.description}
          </p>
        ) : (
          <p
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-sub text-sm leading-relaxed cursor-pointer ${
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
            className="inline-flex items-center gap-1 text-sm italic text-accent hover:underline w-fit group"
          >
            Read case study
            <ArrowUpRight className="inline group-hover:scale-125 transition-transform duration-200" />
          </Link>
        )}
        <p className="text-sub italic text-sm">
          {project.technologies?.join(", ")}
        </p>
        <div className="flex flex-row gap-4 items-center mt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="inline-flex items-center gap-1.5 group"
            >
              <GrGithub className={iconClass} size={14} />
              <span className="text-xs italic text-sub group-hover:text-ink">
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
              className="inline-flex items-center gap-1.5 group"
            >
              {getPlatformIcon(project.liveUrl, iconClass)}
              <span className="text-xs italic text-sub group-hover:text-ink">
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
              className="inline-flex items-center gap-1.5 group"
            >
              {getPlatformIcon(project.appStoreUrl, iconClass)}
              <span className="text-xs italic text-sub group-hover:text-ink">
                {getPlatformLabel(project.appStoreUrl)}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
