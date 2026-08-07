import Link from "next/link";
import UIWrapper from "./UIWrapper";
import { ArrowUpRight } from "lucide-react";
import { getResume } from "@/lib/resume";
import { getMediumArticles } from "@/lib/medium";
import { stripHtml } from "@/lib/utils";
import { Fragment, Suspense } from "react";

const stack = ["Frontend", "Backend", "Mobile", "Cloud"];

async function HomeContent() {
  const [resume, articles] = await Promise.all([
    getResume(),
    getMediumArticles(),
  ]);
  const latestPost = articles[0];

  return (
    <section className="flex flex-col justify-center items-start gap-6 max-w-2xl min-h-[calc(100vh-5rem)] md:min-h-screen">
      <p className="eyebrow">Software engineer — Nairobi / remote</p>
      <h1 className="font-display text-6xl md:text-7xl text-ink leading-none">
        Sam Rasugu
      </h1>
      <p className="font-display italic text-xl text-accent">
        Software, built deliberately.
      </p>

      <div className="flex items-center gap-3 w-full max-w-md">
        {stack.map((label, i) => (
          <Fragment key={label}>
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rotate-45 bg-accent/25 border border-accent" />
              <span className="eyebrow whitespace-nowrap">{label}</span>
            </div>
            {i < stack.length - 1 && (
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </div>

      <p className="text-lg text-sub leading-relaxed">
        I&apos;m a Software Engineer who transforms complex ideas into elegant,
        production-ready solutions, working full-stack and cross-platform, end
        to end, in TypeScript, React, Next.js, Node.js, Flutter, React Native,
        and Python.
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
      className="flex flex-col justify-center items-start gap-5 max-w-2xl min-h-[calc(100vh-5rem)] md:min-h-screen"
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
