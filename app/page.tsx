import Link from "next/link";
import UIWrapper from "./UIWrapper";
import { ArrowUpRight } from "lucide-react";
import { getResume } from "@/lib/resume";
import { Suspense } from "react";

async function HomeContent() {
  const resume = await getResume();

  return (
    <section className="bg-white dark:bg-primary-background flex flex-col justify-center translate-y-1/2 md:translate-y-0 md:min-h-screen items-start gap-5">
      <p className="text-gray-900 dark:text-white text-5xl font-bold">
        Hi 👋, I&apos;m Sam Rasugu
      </p>
      <p className="text-base text-gray-700 dark:text-gray-300">
        I&apos;m a Full Stack Engineer who transforms complex ideas into
        elegant, production-ready solutions. I specialize in full-stack and
        cross-platform development using TypeScript, React, Next.js, Node.js,
        Flutter, and Python.
      </p>
      <p className="text-base text-gray-700 dark:text-gray-300">
        For my work history, check out my{" "}
        <a
          href={resume?.fileUrl || "/docs/Sam-Rasugu-Resume.pdf"}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>{" "}
        or{" "}
        <a href="mailto:mokuasamr@gmail.com" className="underline">
          get in touch
        </a>
      </p>
      <Link
        className="text-base dark:text-gray-200 hover:underline mt-10 group"
        href="/about"
      >
        See more about me{" "}
        <ArrowUpRight className="inline group-hover:scale-125 transition-transform duration-200" />
      </Link>
    </section>
  );
}

function LoadingSkeleton() {
  return (
    <section
      className="bg-white dark:bg-primary-background flex flex-col justify-center translate-y-1/2 md:translate-y-0 md:min-h-screen items-start gap-5"
      aria-label="Loading page content"
    >
      <div
        className="h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"
        aria-hidden="true"
      ></div>
      <div
        className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full"
        aria-hidden="true"
      ></div>
      <div
        className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"
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
