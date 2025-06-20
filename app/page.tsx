import Link from "next/link";
import UIWrapper from "./UIWrapper";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <UIWrapper>
      <section className="bg-white dark:bg-primary-background">
        <div className="flex flex-col justify-center items-start gap-5 h-screen">
          <p className="text-gray-900 dark:text-white text-5xl font-bold">
            Hi 👋, I&apos;m Sam Rasugu
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            I&apos;m a Software Engineer with 3+ years experience building
            production applications at scale. I specialize in full-stack
            development and have experience delivering solutions for complex,
            multi-user platforms using TypeScript, React, Next.js, Flutter, and
            Python.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Currently, I&apos;m building products for marketing, search, and
            events at{" "}
            <a
              href="https://www.monos.ai/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MONOS
            </a>
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            For my work history, check out my{" "}
            <a href="/docs/Sam-Rasugu-Resume.pdf" className="underline">
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
        </div>
      </section>
    </UIWrapper>
  );
}
