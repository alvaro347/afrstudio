import React, { useState, useEffect } from "react";
import "../css/ProjectCard.scss";
import ProjectCardIcons from "./ProjectCardIcons";
import ProjectPopup from "./ProjectPopup";

function ProjectCard({ project, number }) {
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

  return (
    <div className="card">
      {buttonPopup && <ProjectPopup trigger={buttonPopup} project={project} handlePopup={handlePopup} />}
      
      <div className="card-container" onClick={() => handlePopup(true)}>
      <div className="card-top">
        <p className="card-top-text">{number}</p>
        <p className="card-top-text">( {project.date} )</p>
      </div>
        <div className="card-image-container">
          <div className="card-image-tags">{project.type}</div>
          <img className="card-image" src={project.img} alt="Card" />
        </div>
        <div className="card-description-container">
          <div className="card-text">
            <h2 className="card-title">{project.title}</h2>
            {/* <p className="card-description">{project.description}</p> */}
          </div>
          {/* <div className="card-more-info">
            <ProjectCardIcons projectIcons={project.icons} />
            <div className="more-info-text">
              <p className="">More information &#10230;</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
