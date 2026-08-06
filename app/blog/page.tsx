import UIWrapper from "../UIWrapper";
import { Rss } from "lucide-react";
import Image from "next/image";
import { getMediumArticles } from "@/lib/medium";
import { stripHtml } from "@/lib/utils";

export default async function BlogsPage() {
  const articles = await getMediumArticles();

  return (
    <UIWrapper>
      <main className="w-full max-w-5xl py-16">
        <p className="eyebrow mb-2">No. 07</p>
        <div className="flex flex-row gap-4 items-center mb-8">
          <Rss className="text-ink" size={26} />
          <h1 className="font-display text-4xl text-ink">Blog</h1>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <Rss className="mx-auto text-sub mb-4" size={40} />
            <p className="text-sub italic">
              No articles found. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
            {articles.map((article) => (
              <a
                href={article.link}
                key={article.guid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 group"
              >
                <div className="relative w-full h-48 overflow-hidden border border-line">
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover aspect-video grayscale-30 sepia-15"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-ink/5 flex items-center justify-center">
                      <Rss className="text-sub" size={40} />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 border-t border-line pt-3">
                  <p className="eyebrow">
                    {article.author}
                    {` · ${new Date(article.pubDate).toLocaleDateString()}`}
                  </p>

                  <h2 className="font-display text-xl text-ink group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-sm text-sub leading-relaxed line-clamp-3">
                    {stripHtml(article.description) ||
                      "No description available"}
                  </p>

                  {article.categories.length > 0 && (
                    <p className="text-sub italic text-sm mt-1">
                      {article.categories.slice(0, 3).join(", ")}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </UIWrapper>
  );
}
