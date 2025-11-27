import { User } from "lucide-react";
import React from "react";

export default function DescriptionSection() {
  return (
    <section className="md:pt-16 bg-white dark:bg-primary-background">
      <div className="flex flex-row gap-7 items-center my-7">
        <User size={34} className="text-gray-900 dark:text-white" />
        <h1 className="text-3xl font-bold text-left text-gray-900 dark:text-white">
          About Me
        </h1>
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        I&apos;m a Software Engineer and currently the Lead Software Engineer at
        Nurture Connect. I work across frontend, mobile, and backend stacks with
        strong expertise in TypeScript, React, Next.js, React Native, Node.js,
        Flutter, and Python — building scalable, production-ready systems with
        clean architecture and strong UX foundations.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        At Nurture Connect, I drive the design and delivery of user-focused
        digital products from concept to deployment. I bridge hands-on
        development and technical leadership — mentoring engineers, defining
        architectural direction, and ensuring code quality across the stack.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        Previously, at C4DLab (University of Nairobi) I led software development
        and infrastructure for research-driven platforms. I also led frontend
        and mobile engineering at MONOS, delivering systems used globally across
        education and commerce.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        I work extensively with cloud infrastructure and DevOps practices and
        I&apos;m continually sharpening these skills through complex deployments
        and certification (AWS Certified Solutions Architect).
      </p>
    </section>
  );
}
