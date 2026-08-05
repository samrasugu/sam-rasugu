import React from "react";
import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import Image from "next/image";
import { MoveLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { GrGithub } from "react-icons/gr";
import { client } from "@/app/sanity/client";
import UIWrapper from "@/app/UIWrapper";
import { Project } from "@/typing";
import {
  getPlatformIcon,
  getPlatformLabel,
  getPlatformTitle,
} from "@/lib/platform";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{_id, title, description, slug, category->{ title, slug, description }, featuredImage, images, body, github, liveUrl, appStoreUrl, technologies}`;

const options = { next: { revalidate: 30 } };

const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source).url();

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await client.fetch<Project | null>(
    PROJECT_QUERY,
    { slug },
    options,
  );

  if (!project) {
    notFound();
  }

  const iconClass =
    "text-dim group-hover:text-fg transition-colors duration-200";

  return (
    <UIWrapper>
      <main className="w-full py-8 md:py-16 flex flex-col gap-6">
        <Link
          href="/projects"
          className="flex flex-row gap-3 items-center w-fit text-dim hover:text-fg font-mono text-sm"
        >
          <MoveLeft size={20} />
          cd ../projects
        </Link>

        {project.featuredImage && (
          <div className="relative w-full h-64 md:h-96 xl:h-[480px] border border-grid-line overflow-hidden">
            <Image
              src={urlFor(project.featuredImage as SanityImageSource)}
              alt={project.title}
              className="object-cover object-center grayscale-30 contrast-110"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              priority
            />
          </div>
        )}

        <p className="fig-label">Fig. 09 — Case study</p>
        <h1 className="font-display uppercase text-4xl font-semibold text-fg">
          {project.title}
        </h1>

        <p className="text-base text-dim">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-dim px-2 py-1 text-xs font-mono border border-grid-line"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-row flex-wrap gap-3 items-center">
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

        {Array.isArray(project.body) && project.body.length > 0 && (
          <div className="prose prose-invert max-w-none text-dim mt-4">
            <PortableText value={project.body} />
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-64 border border-grid-line overflow-hidden"
              >
                <Image
                  src={urlFor(image as SanityImageSource)}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="object-cover object-center grayscale-30 contrast-110"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </UIWrapper>
  );
}
