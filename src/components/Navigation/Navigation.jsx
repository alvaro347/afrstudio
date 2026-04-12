import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";
import { FiGithub } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navigation.scss";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Navigation() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navLinks = [
    { id: "featured", label: t("nav.projects") },
    { id: "skills", label: t("nav.skills") },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#/" className="nav-logo" onClick={(e) => { e.preventDefault(); close(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <img src={assetPath("images/Logo.png")} alt="AFR Studio" />
          </a>

          <div className="nav-menu">
            {navLinks.map(({ id, label }) => (
              <button key={id} className="nav-link" onClick={() => { scrollTo(id); close(); }}>
                {label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <a href="https://github.com/alvaro347" target="_blank" rel="noopener noreferrer" className="nav-icon" aria-label="GitHub">
              <FiGithub />
            </a>
            <ThemeToggle />
            <button className={`nav-burger ${open ? "nav-burger-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="nav-overlay">
          {navLinks.map(({ id, label }) => (
            <button key={id} className="nav-overlay-link" onClick={() => { scrollTo(id); close(); }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Navigation;
