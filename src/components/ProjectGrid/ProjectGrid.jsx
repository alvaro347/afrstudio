import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import "./ProjectGrid.scss";

function ProjectGrid({ projects }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="project-grid stagger-children">
        {projects.map((project) => (
          <div key={project.id} className="reveal revealed">
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </div>
        ))}
      </div>
      {selected && (
        <ProjectPopup project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

export default ProjectGrid;
