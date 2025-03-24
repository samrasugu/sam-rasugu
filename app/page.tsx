import UIWrapper from "./UIWrapper";

export default function Home() {
  return (
    <UIWrapper>
      <div className="w-screen h-screen bg-primary-background px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-base text-black">
            Experienced Software Engineer skilled in building and scaling
            digital products. Full Stack Engineer with a focus in mobile
            application development. Strong problem-solver who thrives in
            fast-paced, collaborative environments while delivering user-focused
            solutions.
          </p>
        </div>
      </div>
    </UIWrapper>
  );
}
