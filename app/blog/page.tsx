import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import UIWrapper from "../UIWrapper";
import { Rss } from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, description, slug, category->{ title, slug, description }, image, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <UIWrapper>
      <main className="bg-white dark:bg-primary-background w-full py-16">
        <div className="flex flex-row gap-4 items-center">
          <Rss className="text-gray-700 font-bold dark:text-white" size={30} />
          <h1 className="text-3xl font-bold text-left my-10 text-gray-700 dark:text-white">
            Blog
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className="flex flex-col gap-2 bg-white dark:bg-black/10 rounded-2xl shadow-lg dark:shadow-gray-50/5 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative w-full h-48 rounded-t-xl">
                {post.image && (
                  <Image
                    src={imageUrlBuilder(client)
                      .image(post.image as SanityImageSource)
                      .url()}
                    alt={post.title}
                    fill
                    className="object-cover aspect-video rounded-t-xl w-full h-full"
                  />
                )}
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="flex flex-row gap-2 items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-300">
                    {post.category?.title}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-300">
                    {` • ${new Date(post.publishedAt).toLocaleDateString()}`}
                  </span>
                </p>
                <h2 className="text-lg text-gray-600 dark:text-white font-bold">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {post.description
                    ? post.description
                    : "No description available"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </UIWrapper>
  );
}
