import UIWrapper from "../UIWrapper";
import { Rss } from "lucide-react";
import Image from "next/image";
import { getMediumArticles } from "@/lib/medium";
import { stripHtml } from "@/lib/utils";

export default async function BlogsPage() {
  const articles = await getMediumArticles();

  return (
    <UIWrapper>
      <main className="w-full py-16">
        <p className="fig-label mb-2">Fig. 10 — Dispatches</p>
        <div className="flex flex-row gap-4 items-center">
          <Rss className="text-fg" size={30} />
          <h1 className="font-display uppercase text-4xl font-semibold my-6 text-fg">
            Blog
          </h1>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <Rss className="mx-auto text-dim mb-4" size={40} />
            <p className="text-dim">No articles found. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {articles.map((article) => (
              <a
                href={article.link}
                key={article.guid}
                target="_blank"
                rel="noopener noreferrer"
                className="corner-marks flex flex-col gap-2 border border-grid-line bg-panel/50 hover:border-dim transition-colors duration-200"
              >
                <div className="relative w-full h-48 overflow-hidden border-b border-grid-line">
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover aspect-video grayscale-30 contrast-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-panel flex items-center justify-center">
                      <Rss className="text-dim" size={40} />
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center fig-label">
                    <span>{article.author}</span>
                    <span>{` · ${new Date(article.pubDate).toLocaleDateString()}`}</span>
                  </div>

                  <h2 className="text-lg font-display uppercase text-fg line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-sm text-dim line-clamp-3">
                    {stripHtml(article.description) ||
                      "No description available"}
                  </p>

                  {article.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {article.categories.slice(0, 3).map((category, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-mono border border-grid-line text-dim"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
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
