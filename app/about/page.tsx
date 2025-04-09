import ExperienceSection from "@/components/about/ExperienceSection";
import React from "react";
import UIWrapper from "../UIWrapper";
import EducationSection from "@/components/about/EducationSection";
import SkillsSection from "@/components/about/SkillsSection";

export default function AboutPage() {
  return (
    <UIWrapper>
      <div className="flex flex-col bg-primary-background">
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </UIWrapper>
  );
}
