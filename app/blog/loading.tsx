import UIWrapper from "../UIWrapper";
import { Rss } from "lucide-react";

export default function Loading() {
  return (
    <UIWrapper>
      <main className="w-full max-w-5xl py-16">
        <p className="eyebrow mb-2">No. 07</p>
        <div className="flex flex-row gap-4 items-center mb-8">
          <Rss className="text-ink" size={26} />
          <h1 className="font-display text-4xl text-ink">Blog</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2 animate-pulse">
              <div className="w-full h-48 bg-ink/5 border border-line"></div>
              <div className="flex flex-col gap-2 border-t border-line pt-3">
                <div className="h-3 bg-ink/10 w-32"></div>
                <div className="h-5 bg-ink/10 w-3/4"></div>
                <div className="h-4 bg-ink/10 w-full"></div>
                <div className="h-4 bg-ink/10 w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </UIWrapper>
  );
}
