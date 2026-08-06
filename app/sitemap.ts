import { MetadataRoute } from "next";
import { client } from "./sanity/client";

const PROJECT_SLUGS_QUERY = `*[_type == "project" && defined(slug.current)]{ "slug": slug.current, publishedAt }`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://samrasugu.com";

  const projects =
    await client.fetch<{ slug: string; publishedAt: string }[]>(
      PROJECT_SLUGS_QUERY,
    );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
