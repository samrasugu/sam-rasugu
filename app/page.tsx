import UIWrapper from "./UIWrapper";

export default function Home() {
  return (
    <UIWrapper>
      <div className="w-screen bg-primary-background px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col justify-center items-start h-full gap-5">
          <p className="text-black text-2xl font-bold">
            Hi, I&apos;m Sam Rasugu
          </p>
          <p className="text-base text-black">
            I am an experienced Software Engineer skilled in building and
            scaling digital products. Full Stack Engineer conversant with
            TypeScript, Python, Flutter/Dart, React, React Native, and Next.JS.
            Strong problem-solver who thrives in fast-paced, collaborative
            environments while delivering user-focused solutions.
          </p>
          <p className="text-base text-black">
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
