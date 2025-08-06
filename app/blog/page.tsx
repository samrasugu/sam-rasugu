import UIWrapper from "../UIWrapper";
import { Rss } from "lucide-react";
import Image from "next/image";
import { getMediumArticles } from "@/lib/medium";
import { stripHtml } from "@/lib/utils";

export default async function BlogsPage() {
  const articles = await getMediumArticles();

  return (
    <UIWrapper>
      <main className="bg-white dark:bg-primary-background w-full py-16">
        <div className="flex flex-row gap-4 items-center">
          <Rss className="text-gray-700 font-bold dark:text-white" size={30} />
          <h1 className="text-3xl font-bold text-left my-10 text-gray-700 dark:text-white">
            Blog
          </h1>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <Rss className="mx-auto text-gray-400 mb-4" size={40} />
            <p className="text-gray-500 dark:text-gray-400">
              No articles found. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {articles.map((article) => (
              <a
                href={article.link}
                key={article.guid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 bg-white dark:bg-black/10 rounded-2xl shadow-lg dark:shadow-gray-50/5 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover aspect-video rounded-t-xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-t-xl">
                      <Rss className="text-gray-400" size={40} />
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-300">
                      {article.author}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-300">
                      {` • ${new Date(article.pubDate).toLocaleDateString()}`}
                    </span>
                  </div>

                  <h2 className="text-lg text-gray-600 dark:text-white font-bold line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {stripHtml(article.description) ||
                      "No description available"}
                  </p>

                  {article.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {article.categories.slice(0, 3).map((category, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md"
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
