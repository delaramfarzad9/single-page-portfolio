function BackToTop() {
  return (
    <a
      href="#home"
      className="
        group inline-flex items-center gap-3
        font-mono text-xs font-bold
        sm:text-sm
        hover:underline underline-offset-4
      "
    >
      {"<BACK TO TOP/>"}

      <span
        aria-hidden="true"
        className="
          text-xl transition-transform duration-300
          group-hover:-translate-y-1
          motion-reduce:transition-none
          motion-reduce:transform-none
        "
      >
        ↑
      </span>
    </a>
  );
}

export default BackToTop;