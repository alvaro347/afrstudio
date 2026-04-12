import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Slide } from "react-slideshow-image";
import { FiX } from "react-icons/fi";
import { useTheme } from "../../utils/ThemeContext";
import { assetPath } from "../../utils/assetPath";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import "react-slideshow-image/dist/styles.css";
import "./ProjectPopup.scss";

function ProjectPopup({ project, onClose }) {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const hasGallery = project.gallery && project.gallery.length > 0;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className={`popup-overlay ${isDark ? "theme-dark" : "theme-light"}`} onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose} aria-label={t("project.close")}>
          <FiX />
        </button>

        <div className="popup-media">
          {hasGallery ? (
            <Slide easing="ease" autoplay={false} indicators>
              {project.gallery.map((img, i) => (
                <div key={i} className="popup-slide">
                  <img src={assetPath(img)} alt={`${project.title} ${i + 1}`} />
                </div>
              ))}
            </Slide>
          ) : (
            <div className="popup-slide">
              <img src={assetPath(project.image)} alt={project.title} />
            </div>
          )}
        </div>

        <div className="popup-body">
          <div className="popup-columns">
            <div className="popup-left">
              <h2 className="popup-title">{project.title}</h2>
              <div className="popup-meta">
                <Badge variant="accent">{project.category}</Badge>
                <span className="popup-year mono">{project.year}</span>
              </div>
              <div className="popup-desc">
                <p>{project.overview || project.description}</p>
              </div>
              <div className="popup-links">
                {project.links.github && (
                  <Button href={project.links.github}>{t("project.viewCode")}</Button>
                )}
                {project.links.live && (
                  <Button href={project.links.live} variant="primary">{t("project.liveSite")}</Button>
                )}
              </div>
            </div>

            <div className="popup-right">
              {project.technologies.length > 0 && (
                <div className="popup-section">
                  <h4 className="popup-section-label mono">{t("project.technologies")}</h4>
                  <div className="popup-tech">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="tech">{tech}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div className="popup-section">
                  <h4 className="popup-section-label mono">{t("project.highlights")}</h4>
                  <ul className="popup-highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default ProjectPopup;
