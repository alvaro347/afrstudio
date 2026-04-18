import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiArtstation } from "react-icons/si";
import "./Footer.scss";

const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const socialLinks = [
    { icon: FiGithub, href: "https://github.com/alvaro347", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/alvaro-fernandez-rodriguez", label: "LinkedIn" },
    { icon: SiArtstation, href: "https://www.artstation.com/alvaro347", label: "ArtStation" },
];

function Footer() {
    const { t } = useTranslation();

    const navLinks = [
        { id: "featured", label: t("nav.projects") },
        { id: "skills", label: t("nav.skills") },
        { id: "about", label: t("nav.about") },
        { id: "contact", label: t("nav.contact") },
    ];

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-brand-block">
                        <img src={assetPath("images/Logo.png")} alt="AFR Studio" className="footer-logo" />
                        <p className="footer-tagline">{t("footer.tagline")}</p>
                    </div>

                    <div className="footer-nav-group">
                        <div className="footer-column">
                            <h4 className="footer-column-title mono">{t("footer.navigation")}</h4>
                            <ul className="footer-links">
                                {navLinks.map(({ id, label }) => (
                                    <li key={id}>
                                        <button onClick={() => scrollTo(id)}>{label}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-column-title mono">{t("footer.social")}</h4>
                            <ul className="footer-links">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <li key={label}>
                                        <a href={href} target="_blank" rel="noopener noreferrer">
                                            <Icon className="footer-link-icon" />
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span className="footer-copy">{t("footer.copyright")}</span>
                    <button className="footer-back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        {t("footer.backToTop")}
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
