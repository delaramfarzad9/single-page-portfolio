const links = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

function CircleNav({ decorative = false }) {
  const navClasses = `
    circle-nav
    flex flex-col
    font-mono font-bold uppercase
    text-background
    whitespace-nowrap
    leading-none
  `;

  if (decorative) {
    return (
      <div className={`${navClasses} invisible`}>
        {links.map((link) => (
          <span key={link.label}>
            {`<${link.label}/>`}
          </span>
        ))}
      </div>
    );
  }

  return (
    <nav
      aria-label="Main navigation"
      className={navClasses}
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="
            transition-transform duration-300
            hover:translate-x-2
            hover:underline
            underline-offset-8
            motion-reduce:transition-none
            motion-reduce:transform-none
          "
        >
          {`<${link.label}/>`}
        </a>
      ))}
    </nav>
  );
}

export default CircleNav;