import UIWrapper from "../UIWrapper";
import { Rss } from "lucide-react";

export default function Loading() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border border-grid-line bg-panel/50 animate-pulse"
            >
              <div className="w-full h-48 bg-panel"></div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="h-3 bg-panel w-16"></div>
                  <div className="h-3 bg-panel w-20"></div>
                </div>
                <div className="h-5 bg-panel w-3/4"></div>
                <div className="h-4 bg-panel w-full"></div>
                <div className="h-4 bg-panel w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </UIWrapper>
  );
}
