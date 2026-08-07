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
      <main className="w-full max-w-3xl min-h-screen p-8 flex flex-col gap-4">
        <Link
          href="/blog"
          className="flex flex-row gap-3 items-center w-fit text-sub hover:text-ink italic"
        >
          <MoveLeft size={20} />
          Back to Blog
        </Link>
        {postImageUrl && (
          <div className="relative w-full h-80 md:h-96 xl:h-125 border border-line overflow-hidden">
            <Image
              src={postImageUrl}
              alt={post.title}
              className="aspect-video grayscale-30 sepia-15"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-col gap-4 mt-8">
          <p className="eyebrow">Dispatch</p>
          <h1 className="font-display text-4xl text-ink">{post.title}</h1>
          <p className="text-sub italic text-sm">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          <div className="prose max-w-none text-sub mt-8">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </div>
        </div>
      </main>
    </UIWrapper>
  );
}
