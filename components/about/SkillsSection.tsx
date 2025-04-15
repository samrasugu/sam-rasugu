import { Folder } from "lucide-react";
import React from "react";

export default function SkillsSection() {
  return (
    <div className="pb-12 bg-primary-background flex flex-col items-center text-center">
      <div className="flex flex-row gap-4 items-center my-10">
        <Folder size={34} />
        <h1 className="text-3xl font-bold text-left text-white">
          Skills
        </h1>
      </div>

      <p className="text-gray-300 text-center text-base font-semibold px-4 md:px-10 lg:px-20 xl:px-40">
        TypeScript / JavaScript / Python / Flutter/Dart / React / Next.js /
        React Native / Tailwind CSS / Node.js / Express.js / SQL (PostgreSQL,
        MySQL) / MongoDB / Flask / Git / GitHub / REST APIs / Figma / AWS (EC2,
        Amplify, Route53, Cloudfront, RDS, VPC & ELB ) / Firebase
      </p>
    </div>
  );
}
