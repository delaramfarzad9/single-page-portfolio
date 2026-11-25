
import DeveloperProfile from "./DeveloperProfile";
import "./About.css";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
    className="
  bg-background text-foreground
  px-[7vw]
  pt-6 pb-12
  md:py-16
  lg:py-24
"
    >
      {/* Section label */}
      <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-6 font-mono text-xs uppercase">
        <span>{"<ABOUT/>"}</span>

        <span className="text-muted">
          Based in the UK
        </span>
      </div>

      {/* Main content */}
      <div className="about-grid mt-10 lg:mt-14">

        {/* Introduction */}
        <div className="about-intro relative min-w-0">

          {/* Architectural decoration */}
          <div
            className="about-blueprint"
            aria-hidden="true"
          >
            <div className="blueprint-circle circle-one" />
            <div className="blueprint-circle circle-two" />
            <div className="blueprint-horizontal" />
            <div className="blueprint-vertical" />
          </div>

          {/* Editorial heading */}
          <h2
            id="about-heading"
            className="about-heading relative uppercase font-display tracking-[-0.05em]"
          >
            <span className="block font-bold">
              THINK.
            </span>

            <span className="about-design block font-normal">
              DESIGN.
            </span>

            <span className="about-build block font-bold">
              BUILD.
            </span>
          </h2>

          {/* Personal introduction */}
          <div className="relative mt-8 max-w-lg space-y-4 text-base leading-relaxed">

            <p>
              I'm Dela, a UK-based front-end developer
              with a background in architecture and
              professional UI development experience.
            </p>

            <p>
              I enjoy{" "}
              <strong className="font-semibold">
                solving problems
              </strong>{" "}
              and improving{" "}
              <strong className="font-semibold">
                user experiences
              </strong>
              , turning complex ideas into intuitive,
              accessible and thoughtfully designed
              interfaces.
            </p>

          </div>
        </div>

        {/* Developer code editor */}
        <DeveloperProfile />

      </div>

      {/* Languages */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">

        <span className="font-mono text-xs uppercase text-muted">
          Languages
        </span>

        <p className="font-mono text-xs uppercase">
          English / German / Persian
        </p>

      </div>
    </section>
  );
}

export default About;
