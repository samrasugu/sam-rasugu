import ExperienceSection from "@/components/about/ExperienceSection";
import React from "react";
import UIWrapper from "../UIWrapper";
import EducationSection from "@/components/about/EducationSection";
import SkillsSection from "@/components/about/SkillsSection";
import DescriptionSection from "@/components/about/DescriptionSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <UIWrapper>
      <div className="flex flex-col w-full">
        <DescriptionSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <Link
          className="flex justify-center items-center gap-2 text-sm font-mono text-dim hover:text-accent mb-10 group"
          href="/projects"
        >
          cd projects{" "}
          <ArrowUpRight className="inline group-hover:scale-125 transition-transform duration-200" />
        </Link>
      </div>
    </UIWrapper>
  );
}
