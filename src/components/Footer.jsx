import SocialLink from "./SocialLink";
import BackToTop from "./BackToTop";
import socialLinks from "../assets/data/socialLinks";

function Footer() {
  return (
    <footer
      id="contact"
      className="
        bg-foreground text-background
        px-[7vw]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* Editorial heading */}

      <h2
        className="
          font-display uppercase
          leading-[0.95]
          tracking-[-0.05em]
        "
      >
        <span
          className="
            block font-bold
            text-[17vw]
            sm:text-[14vw]
            lg:text-[8.5vw]
          "
        >
          LET'S
        </span>

        <span
          className="
            block font-medium
            text-[14vw]
            sm:text-[13vw]
            lg:text-[8vw]
            ml-[2vw]
            sm:ml-[8vw]
            lg:ml-[7vw]
            mt-3 lg:mt-6
          "
        >
          CONNECT.
        </span>
      </h2>

      {/* Social links */}

      <div
        className="
          mt-12 sm:mt-16 lg:mt-24
          border-b border-background/40
        "
      >
        {socialLinks.map((link) => (
          <SocialLink
            key={link.id}
            id={link.id}
            label={link.label}
            href={link.href}
          />
        ))}
      </div>

      {/* Footer information */}

      <div
        className="
          flex flex-col gap-6
          pt-8 lg:pt-12
          md:flex-row
          md:items-center
          md:justify-between
          font-mono text-xs uppercase
        "
      >
        <p className="leading-relaxed">
          Designed & Developed by Delaram Farzad

          <span className="block mt-2">
            © {new Date().getFullYear()}
          </span>
        </p>

        <BackToTop />
      </div>
    </footer>
  );
}

export default Footer;