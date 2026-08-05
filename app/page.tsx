import Link from "next/link";
import UIWrapper from "./UIWrapper";
import { ArrowUpRight } from "lucide-react";
import { getResume } from "@/lib/resume";
import { getMediumArticles } from "@/lib/medium";
import { stripHtml } from "@/lib/utils";
import { Suspense } from "react";

async function HomeContent() {
  const [resume, articles] = await Promise.all([
    getResume(),
    getMediumArticles(),
  ]);
  const latestPost = articles[0];

  return (
    <section className="flex flex-col justify-center translate-y-1/2 md:translate-y-0 md:min-h-screen items-start gap-6">
      <p className="fig-label">Fig. 01 — Profile</p>
      <h1 className="font-display uppercase text-fg text-6xl md:text-7xl font-semibold leading-none">
        Sam Rasugu
      </h1>
      <p className="text-accent font-mono text-sm">
        {"// Lead Software Engineer"}
      </p>
      <p className="text-base text-dim max-w-2xl">
        Full-stack and cross-platform engineer — TypeScript, React, Next.js,
        Node.js, Flutter, React Native, and Python. Turning ambiguous
        requirements into production-ready systems.
      </p>

      <div className="flex items-center gap-2 my-2">
        <span className="w-2.5 h-2.5 border border-fg rotate-45 bg-accent" />
        <span className="h-px w-10 bg-grid-line" />
        <span className="w-2.5 h-2.5 border border-fg rotate-45" />
        <span className="h-px w-10 bg-grid-line" />
        <span className="w-2.5 h-2.5 border border-fg rotate-45 bg-accent" />
      </div>

      <p className="text-base text-dim">
        See the{" "}
        <Link
          href="/projects"
          className="text-accent underline underline-offset-4"
        >
          project index
        </Link>{" "}
        or{" "}
        <a
          href={resume?.fileUrl || "/docs/Sam-Rasugu-Resume.pdf"}
          className="text-accent underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          the full spec (resume)
        </a>
      </p>

      <Link
        className="text-sm font-mono text-dim hover:text-fg mt-6 group"
        href="/about"
      >
        cd about{" "}
        <ArrowUpRight className="inline group-hover:scale-125 transition-transform duration-200" />
      </Link>

      {latestPost && (
        <a
          href={latestPost.link}
          target="_blank"
          rel="noopener noreferrer"
          className="corner-marks mt-6 p-4 border border-grid-line max-w-xl hover:border-dim transition-colors group bg-panel/50"
        >
          <p className="fig-label mb-2">Fig. 02 — Latest dispatch</p>
          <p className="text-lg font-display uppercase text-fg group-hover:text-accent transition-colors">
            {latestPost.title}
          </p>
          <p className="text-sm text-dim mt-1 line-clamp-2">
            {stripHtml(latestPost.description)}
          </p>
        </a>
      )}
    </section>
  );
}

function LoadingSkeleton() {
  return (
    <section
      className="flex flex-col justify-center translate-y-1/2 md:translate-y-0 md:min-h-screen items-start gap-5"
      aria-label="Loading page content"
    >
      <div
        className="h-16 bg-panel border border-grid-line animate-pulse w-3/4"
        aria-hidden="true"
      ></div>
      <div
        className="h-4 bg-panel border border-grid-line animate-pulse w-full"
        aria-hidden="true"
      ></div>
      <div
        className="h-4 bg-panel border border-grid-line animate-pulse w-2/3"
        aria-hidden="true"
      ></div>
      <span className="sr-only">Loading content...</span>
    </section>
  );
}

export default async function Home() {
  return (
    <UIWrapper>
      <Suspense fallback={<LoadingSkeleton />}>
        <HomeContent />
      </Suspense>
    </UIWrapper>
  );
}
