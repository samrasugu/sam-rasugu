import ExperienceSection from "@/components/about/ExperienceSection";
import React from "react";
import UIWrapper from "../UIWrapper";
import EducationSection from "@/components/about/EducationSection";
import SkillsSection from "@/components/about/SkillsSection";

export default function AboutPage() {
  return (
    <UIWrapper>
      <div className="flex flex-col px-4 md:px-10 lg:px-20 xl:px-40 bg-primary-background">
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </UIWrapper>
  );
}
