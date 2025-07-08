import Link from "next/link";
import UIWrapper from "./UIWrapper";
import { ArrowUpRight } from "lucide-react";
import { getResume } from "@/lib/resume";

export default async function Home() {
  const resume = await getResume();
  return (
    <UIWrapper>
      <section className="bg-white dark:bg-primary-background">
        <div className="flex flex-col justify-center items-start gap-5 h-screen">
          <p className="text-gray-900 dark:text-white text-5xl font-bold">
            Hi 👋, I&apos;m Sam Rasugu
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            I&apos;m a Software Engineer who transforms complex ideas into
            elegant, production-ready solutions. I specialize in full-stack and
            cross-platform development using TypeScript, React, Next.js,
            Node.js, Flutter, and Python.
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
        </div>
      </section>
    </UIWrapper>
  );
}
