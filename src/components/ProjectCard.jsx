import React, { useState, useEffect } from "react";
import "../css/ProjectCard.scss";
import ProjectCardIcons from "./ProjectCardIcons";
import ProjectPopup from "./ProjectPopup";

function ProjectCard({ project }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  const handlePopup = (e) => {
    if (e === false) {
      setButtonPopup(false);
      document.body.style.overflow = "unset";
    } else {
      setButtonPopup(true);
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handlePopup(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  
  return (
    <div className="card">
      <ProjectPopup trigger={buttonPopup} project={project} handlePopup={handlePopup} />

      <div className="card-container" onClick={() => handlePopup(true)}>
        <div className="project-image-container">
          <a href="#projects">
            <img className="project-image" src={project.img} alt="Card" />
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
