function HeroTypography({ overlay = false }) {
  const Heading = overlay ? "div" : "h1";

  return (
    <div className="font-display uppercase">

      <Heading
        className="
          hero-name
          font-bold
          leading-[0.8]
          tracking-[-0.035em]
        "
      >
        DELA
      </Heading>

      <p
        className="
          hero-role
          font-medium
          tracking-[-0.05em]
        "
      >
        <span
          className={`
            hero-frontend
            block whitespace-nowrap
            text-transparent
            ${
              overlay
                ? "[-webkit-text-stroke:1.5px_var(--color-background)]"
                : "[-webkit-text-stroke:1.5px_var(--color-foreground)]"
            }
          `}
        >
          FRONT-END
        </span>

        <span
          className="
            hero-developer
            block whitespace-nowrap
          "
        >
          DEVELOPER
        </span>
      </p>

    </div>
  );
}

export default HeroTypography;