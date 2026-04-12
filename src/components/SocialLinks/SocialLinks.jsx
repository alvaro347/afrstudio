import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiArtstation } from "react-icons/si";
import "./SocialLinks.scss";

const links = [
  { icon: FiGithub, href: "https://github.com/alvaro347", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/alvaro-fernandez-rodriguez", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://www.instagram.com/alvarogna/", label: "Instagram" },
  { icon: SiArtstation, href: "https://www.artstation.com/alvaro347", label: "ArtStation" },
];

function SocialLinks({ showLabels = false }) {
  return (
    <div className="social-links">
      {links.map(({ icon: Icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
          <Icon />
          {showLabels && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
