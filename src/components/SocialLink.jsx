function SocialLink({ id, label, href }) {
  const isExternal = href.startsWith("https://");
  const Element = href ? "a" : "div";

  return (
    <Element
      href={href || undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="
        group flex items-center justify-between
        gap-4 border-t border-background/40
        px-2 py-6 sm:px-4 sm:py-7 lg:py-8
        transition-colors duration-300
        hover:bg-background hover:text-foreground
      "
    >
      <div className="flex items-center gap-4 sm:gap-8 lg:gap-14">
        <span className="font-mono text-xs sm:text-sm">
          {id}
        </span>

        <span
          className="
            font-mono font-bold
            text-[5vw]
            sm:text-[3.5vw]
            lg:text-[2.7vw]
            tracking-tight
          "
        >
          {`<${label}/>`}
        </span>
      </div>

      <span
        aria-hidden="true"
        className="
          text-3xl sm:text-4xl lg:text-5xl
          transition-transform duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          motion-reduce:transition-none
          motion-reduce:transform-none
        "
      >
        ↗
      </span>
    </Element>
  );
}

export default SocialLink;