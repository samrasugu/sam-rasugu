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
    <section className="flex flex-col justify-center translate-y-1/2 md:translate-y-0 md:min-h-screen items-start gap-6 max-w-2xl">
      <p className="eyebrow">Software engineer — Nairobi / remote</p>
      <h1 className="font-display text-6xl md:text-7xl text-ink leading-none">
        Sam Rasugu
      </h1>
      <p className="font-display italic text-xl text-accent">
        Software, built deliberately.
      </p>
      <p className="text-lg text-sub leading-relaxed">
        I&apos;m a Software Engineer who transforms complex ideas into elegant,
        production-ready solutions — full-stack and cross-platform work in
        TypeScript, React, Next.js, Node.js, Flutter, React Native, and Python.
      </p>
      <p className="text-lg text-sub leading-relaxed">
        Read the{" "}
        <Link href="/projects" className="text-accent underline italic">
          project index
        </Link>{" "}
        or{" "}
        <a
          href={resume?.fileUrl || "/docs/Sam-Rasugu-Resume.pdf"}
          className="text-accent underline italic"
          target="_blank"
          rel="noopener noreferrer"
        >
          the résumé
        </a>
      </p>
      <Link
        className="text-base text-sub italic hover:text-ink mt-8 group border-t border-line pt-4 w-full"
        href="/about"
      >
        See more about me{" "}
        <ArrowUpRight className="inline group-hover:scale-125 transition-transform duration-200" />
      </Link>

      {latestPost && (
        <a
          href={latestPost.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 pt-4 border-t border-line w-full group"
        >
          <p className="eyebrow mb-1">Latest from the blog</p>
          <p className="font-display text-xl text-ink group-hover:text-accent transition-colors">
            {latestPost.title}
          </p>
          <p className="text-base text-sub mt-1 line-clamp-2">
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
      className="flex flex-col justify-center translate-y-1/2 md:translate-y-0 md:min-h-screen items-start gap-5 max-w-2xl"
      aria-label="Loading page content"
    >
      <div
        className="h-16 bg-ink/10 animate-pulse w-3/4"
        aria-hidden="true"
      ></div>
      <div
        className="h-4 bg-ink/10 animate-pulse w-full"
        aria-hidden="true"
      ></div>
      <div
        className="h-4 bg-ink/10 animate-pulse w-2/3"
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
