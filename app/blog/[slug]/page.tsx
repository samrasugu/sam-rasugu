import React from "react";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { client } from "@/app/sanity/client";
import UIWrapper from "@/app/UIWrapper";
import Image from "next/image";
import { MoveLeft } from "lucide-react";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <UIWrapper>
      {" "}
      <main className="container mx-auto min-h-screen p-8 flex flex-col gap-4">
        <Link href="/blog" className="flex flex-row gap-4 items-center">
          <MoveLeft
            className="text-gray-700 font-bold dark:text-white"
            size={30}
          />
          <h1 className="text-3xl font-bold text-left my-10 text-gray-700 dark:text-white">
            Back to Blog
          </h1>
        </Link>
        {postImageUrl && (
          <div className="relative w-full h-80 md:h-96 xl:h-[500px] rounded-xl">
            <Image
              src={postImageUrl}
              alt={post.title}
              className="aspect-video rounded-xl"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-col gap-4 mt-8">
          <h1 className="text-3xl font-bold text-black dark:text-gray-300">
            {post.title}
          </h1>
          <p className="text-black dark:text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          <div className="prose text-gray-700 dark:text-gray-300 mt-8">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </div>
        </div>
      </main>
    </UIWrapper>
  );
}
