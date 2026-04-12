import { useTranslation } from "react-i18next";
import { assetPath } from "../../utils/assetPath";
import { useInView } from "../../hooks/useInView";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import "./ProjectShowcase.scss";

function ProjectShowcase({ project, index }) {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isEven = index % 2 === 0;
  const link = project.links.live || project.links.github;

  return (
    <div ref={ref} className={`showcase ${inView ? "revealed" : ""} ${isEven ? "showcase-reverse" : ""}`}>
      <div className="showcase-image" onClick={() => link && window.open(link, "_blank")}>
        <img src={assetPath(project.image)} alt={project.title} loading="lazy" />
      </div>
      <div className="showcase-content">
        <h3 className="showcase-title">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">{project.title}</a>
          ) : (
            project.title
          )}
        </h3>
        <div className="showcase-meta">
          <Badge variant="accent">{project.category}</Badge>
          <span className="showcase-year mono">{project.year}</span>
        </div>
        <p className="showcase-desc">{project.description}</p>
        <div className="showcase-tech">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="tech">{tech}</Badge>
          ))}
        </div>
        {project.highlights.length > 0 && (
          <ul className="showcase-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        <div className="showcase-actions">
          {project.links.github && (
            <Button href={project.links.github}>{t("project.viewCode")}</Button>
          )}
          {project.links.live && (
            <Button href={project.links.live} variant="primary">{t("project.liveSite")}</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
