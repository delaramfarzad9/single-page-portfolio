import HeroTypography from "./HeroTypography";
import CircleNav from "./CircleNav";

function Hero() {
  return (
    <section
      id="home"
      className="
        hero-grid relative isolate overflow-hidden
        min-h-svh
        bg-background text-foreground
        px-[7vw] py-12 lg:py-16
      "
    >
      {/* Background circle */}
      <div
        aria-hidden="true"
        className="
          hero-mask absolute inset-0
          bg-accent pointer-events-none
        "
      />

      {/* Main typography */}
      <div className="hero-intro relative z-10">
        <HeroTypography />
      </div>

      {/* Contrasting typography inside the circle */}
      <div
        aria-hidden="true"
        className="
          hero-grid hero-mask absolute inset-0
          z-20 px-[7vw] py-12 lg:py-16
          text-background
          pointer-events-none select-none
        "
      >
        <div className="hero-intro">
          <HeroTypography overlay />
        </div>

        <div className="hero-navigation">
          <CircleNav decorative />
        </div>
      </div>

      {/* Main navigation */}
      <div className="hero-navigation relative z-30">
        <CircleNav />
      </div>
    </section>
  );
}

export default Hero;