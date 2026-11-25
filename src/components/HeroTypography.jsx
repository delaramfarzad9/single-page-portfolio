function HeroTypography({ overlay = false }) {
  const Heading = overlay ? "div" : "h1";

  return (
    <div className="font-display uppercase">

      <Heading
        className="
          text-[21vw]
          sm:text-[18vw]
          md:text-[15vw]
          lg:text-[11.5vw]
          font-bold
          leading-[0.8]
          tracking-[-0.035em]
        "
      >
        DELA
      </Heading>

      <p
        className="
          mt-8 sm:mt-10 lg:mt-[9vw]
          font-medium
          leading-[1.1] lg:leading-[1.2]
          tracking-[-0.05em]
        "
      >
        <span
          className={`
            block whitespace-nowrap
            text-[11vw]
            sm:text-[10vw]
            md:text-[9vw]
            lg:text-[8.5vw]
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
            block whitespace-nowrap
            text-[13vw]
            sm:text-[12vw]
            md:text-[11vw]
            lg:text-[11vw]
            ml-[2vw]
            sm:ml-[8vw]
            md:ml-[15vw]
            lg:ml-[24vw]
          "
        >
          DEVELOPER
        </span>
      </p>

    </div>
  );
}

export default HeroTypography;