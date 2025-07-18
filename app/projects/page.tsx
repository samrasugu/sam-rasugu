import React from "react";
import { client } from "../sanity/client";
import { Project } from "@/typing";
import ProjectsComponent from "@/components/projects/ProjectsComponent";

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, description, slug, category->{ title, slug, description }, featuredImage, github, liveUrl, appStoreUrl, technologies, featured, isOther, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsPage() {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY, {}, options);

  return <ProjectsComponent projects={projects} />;
}
