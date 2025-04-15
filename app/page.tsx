import Link from "next/link";
import UIWrapper from "./UIWrapper";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <UIWrapper>
      <div className="bg-primary-background">
        <div className="flex flex-col justify-center items-start gap-5 h-screen">
          <p className="text-white text-5xl font-bold">
            Hi 👋, I&apos;m Sam Rasugu
          </p>
          <p className="text-base text-gray-300">
            I'm a Software Engineer with a passion for transforming ideas and
            building interactive applications. I have a strong foundation in
            software development, with a focus on mobile, web and backend
            technologies. My experience includes working with cross-functional
            teams to deliver high-quality products that meet user needs.
          </p>
          <p className="text-base text-gray-300">
            I am currently a Software Engineer at{" "}
            <a
              href="https://www.monos.ai/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MONOS
            </a>
            , where I work on building products for marketing, search, and
            events.
          </p>
          <p className="text-base text-gray-300">
            For my work history, check out my{" "}
            <a href="/docs/Sam_Mokua_CV.pdf" className="underline">
              resume
            </a>{" "}
            or{" "}
            <a href="mailto:mokuasamr@gmail.com" className="underline">
              get in touch
            </a>
          </p>
          <Link
            className=" text-base text-gray-200 gap-1 hover:underline mt-10 group"
            href="/about"
          >
            See more about me{" "}
            <ArrowUpRight className="inline group-hover:scale-125 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </UIWrapper>
  );
}
