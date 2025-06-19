import { PenLine } from "lucide-react";
import React from "react";

export default function SkillsSection() {
  return (
    <section className="my-12 bg-white dark:bg-primary-background flex flex-col items-center text-center">
      <div className="flex flex-row gap-4 items-center mb-12">
        <PenLine size={34} className="text-gray-900 dark:text-white" />
        <h1 className="text-3xl font-bold text-left text-gray-800 dark:text-white">
          Skills
        </h1>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-center text-base font-semibold px-4 md:px-10 lg:px-20 xl:px-40">
        TypeScript / JavaScript / Python / Flutter/Dart / React / Next.js /
        React Native / Tailwind CSS / Node.js / Express.js / SQL (PostgreSQL,
        MySQL) / MongoDB / Flask / Git / GitHub / REST APIs / Figma / AWS (EC2,
        Amplify, Route53, Cloudfront, RDS, VPC & ELB ) / Firebase
      </p>
    </section>
  );
}
