import UIWrapper from "../UIWrapper";
import { Rss } from "lucide-react";

export default function Loading() {
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
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 bg-white dark:bg-black/10 rounded-2xl shadow-lg animate-pulse"
            >
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-t-xl"></div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                </div>
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </UIWrapper>
  );
}
