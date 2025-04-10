import UIWrapper from "./UIWrapper";

export default function Home() {
  return (
    <UIWrapper>
      <div className="bg-primary-background">
        <div className="flex flex-col justify-center items-start gap-5 h-screen">
          <p className="text-white text-5xl font-bold">
            Hi, I&apos;m Sam Rasugu
          </p>
          <p className="text-base text-gray-300">
            I am an experienced Software Engineer skilled in building and
            scaling digital products. Full Stack Engineer conversant with
            TypeScript, Python, Flutter/Dart, React, React Native, and Next.JS.
            Strong problem-solver who thrives in fast-paced, collaborative
            environments while delivering user-focused solutions.
          </p>
          <p className="text-base text-gray-300">
            I am currently a Software Engineer at{" "}
            <a href="https://www.monos.ai/" className="underline">
              MONOS
            </a>
            , where I work on building products for marketing, search, and events.
          </p>
          <p className="text-base text-gray-300">
            For my work history, check out my{" "}
            <a href="" className="underline">
              resume
            </a>{" "}
            or{" "}
            <a href="mailto:mokuasamr@gmail.com" className="underline">
              get in touch
            </a>
          </p>
        </div>
      </div>
    </UIWrapper>
  );
}
