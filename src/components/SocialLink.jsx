import {
  FiArrowUpRight,
  FiDownload,
  FiMail,
} from "react-icons/fi";

function SocialLink({ label, href, download }) {
  const isExternal = href.startsWith("https://");
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="footer-link"
    >
      <span>{`<${label}/>`}</span>

      <span className="footer-arrow" aria-hidden="true">
        {download ? (
          <FiDownload />
        ) : isEmail ? (
          <FiMail />
        ) : (
          <FiArrowUpRight />
        )}
      </span>
    </a>
  );
}

export default SocialLink;