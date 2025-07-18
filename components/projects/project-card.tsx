"use client";

import React, { useState } from "react";
import { GrGithub, GrAndroid } from "react-icons/gr";
import Image from "next/image";
import { Globe } from "lucide-react";
import { Project } from "@/typing";
import { client } from "@/app/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

const WebIcon = ({ className }: { className?: string }) => (
  <Globe className={className} size={20} />
);

const AndroidIcon = ({ className }: { className?: string }) => (
  <GrAndroid className={className} />
);

const IOSIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

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

  // platform type from URL
  const getPlatformType = (url: string) => {
    if (url.includes("play.google.com") || url.includes("android")) {
      return "android";
    } else if (
      url.includes("apps.apple.com") ||
      url.includes("itunes.apple.com")
    ) {
      return "ios";
    } else {
      return "web";
    }
  };

  // get icon based on platform
  const getPlatformIcon = (url: string) => {
    const platform = getPlatformType(url);
    const iconClass =
      "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200";

    switch (platform) {
      case "android":
        return <AndroidIcon className={iconClass} />;
      case "ios":
        return <IOSIcon className={iconClass} />;
      default:
        return <WebIcon className={iconClass} />;
    }
  };

  // platform title for accessibility
  const getPlatformTitle = (url: string) => {
    const platform = getPlatformType(url);
    switch (platform) {
      case "android":
        return "View on Google Play Store";
      case "ios":
        return "View on Apple App Store";
      default:
        return "View Live Project";
    }
  };

  // platform label for display
  const getPlatformLabel = (url: string) => {
    const platform = getPlatformType(url);
    switch (platform) {
      case "android":
        return "Play Store";
      case "ios":
        return "App Store";
      default:
        return "Live Demo";
    }
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
                aria-label="View source code on GitHub"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300/50 dark:border-gray-300/20 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
              >
                <GrGithub
                  className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                  size={16}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
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
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300/50 dark:border-gray-300/20 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
              >
                {getPlatformIcon(project.liveUrl)}
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
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
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300/50 dark:border-gray-300/20 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
              >
                {getPlatformIcon(project.appStoreUrl)}
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
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
