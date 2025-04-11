import ExperienceSection from "@/components/about/ExperienceSection";
import React from "react";
import UIWrapper from "../UIWrapper";
import EducationSection from "@/components/about/EducationSection";
import SkillsSection from "@/components/about/SkillsSection";
import DescriptionSection from "@/components/about/DescriptionSection";

export default function AboutPage() {
  return (
    <UIWrapper>
      <div className="flex flex-col bg-primary-background">
        <DescriptionSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </UIWrapper>
  );
}
