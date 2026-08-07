import React from "react";

export default function DescriptionSection() {
  return (
    <section className="md:pt-16">
      <p className="eyebrow mb-2">No. 01</p>
      <h1 className="font-display text-4xl text-ink mb-2">About</h1>
      <p className="font-display italic text-lg text-accent mb-6">
        A working record.
      </p>
      <p className="text-sub leading-relaxed">
        I&apos;m a Software Engineer and currently the Lead Software Engineer at
        Nurture Connect. I work across frontend, mobile, and backend stacks with
        strong expertise in TypeScript, React, Next.js, React Native, Node.js,
        Flutter, and Python. I build scalable, production-ready systems with
        clean architecture and strong UX foundations.
      </p>
      <p className="text-sub leading-relaxed mt-4">
        At Nurture Connect, I drive the design and delivery of user-focused
        digital products from concept to deployment. I bridge hands-on
        development and technical leadership, mentoring engineers, defining
        architectural direction, and ensuring code quality across the stack.
      </p>
      <p className="text-sub leading-relaxed mt-4">
        Previously, at C4DLab (University of Nairobi) I led software development
        and infrastructure for research-driven platforms. I also led frontend
        and mobile engineering at MONOS, delivering systems used globally across
        education and commerce.
      </p>
      <p className="text-sub leading-relaxed mt-4">
        I work extensively with cloud infrastructure and DevOps practices and
        I&apos;m continually sharpening these skills through complex deployments
        and certification (AWS Certified Solutions Architect).
      </p>
    </section>
  );
}
