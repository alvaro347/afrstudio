import React from "react";
import "../css/ProjectCard.scss";
import ProjectCardIcons from "./ProjectCardIcons";

function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="project-image-container">
          <a href="#projects">
            <img
              className="project-image"
              src={project.img}
              alt="Card"
            />
          </a>
        </div>
        <div className="card-description-container">
          <div className="card-text">
            <a href="#projects">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
            </a>
          </div>
          <div className="more-info flex justify-between">
            <ProjectCardIcons projectIcons={project.icons} />
            <div className="self-center more-info-text grid">
              <a href="#projects">
                <p className="">More information &#10230;</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
