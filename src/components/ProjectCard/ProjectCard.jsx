import { assetPath } from "../../utils/assetPath";
import Badge from "../Badge/Badge";
import "./ProjectCard.scss";

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-image">
        <img src={assetPath(project.image)} alt={project.title} loading="lazy" />
        <span className="project-card-category">
          <Badge variant="accent">{project.category}</Badge>
        </span>
      </div>
      <div className="project-card-body">
        <div className="project-card-head">
          <h3 className="project-card-title">{project.title}</h3>
          <span className="project-card-year mono">{project.year}</span>
        </div>
        <p className="project-card-desc">{project.description}</p>
        {project.technologies.length > 0 && (
          <div className="project-card-tech">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="tech">{tech}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
