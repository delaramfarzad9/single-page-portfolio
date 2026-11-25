import SocialLink from "./SocialLink";
import BackToTop from "./BackToTop";
import socialLinks from "../assets/data/socialLinks";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer-grid">

      {/* Heading */}
      <div className="footer-heading">
        <h2 className="font-display uppercase tracking-[-0.05em] leading-tight">

          <span className="block font-bold">
            LET'S
          </span>

          <span className="block font-medium ml-[5.5vw]">
            CONNECT.
          </span>

        </h2>
      </div>

      {/* Social links */}
      <nav
        className="footer-links"
        aria-label="Social links"
      >
        {socialLinks.map((link) => (
          <SocialLink
            key={link.id}
            label={link.label}
            href={link.href}
            download={link.download}
          />
        ))}
      </nav>

      {/* Footer information */}
      <div className="footer-info font-mono uppercase">
        <BackToTop />

        <p>
          Designed & Developed by Delaram Farzad

          <span className="block mt-1">
            © {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;