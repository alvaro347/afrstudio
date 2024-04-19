import React from "react";
import ReactDom from "react-dom";
import "../css/ProjectPopup.scss";

const ProjectPopup = ({ project, trigger, handlePopup }) => {
  if (trigger === false) {
    return null;
  } else {
    return ReactDom.createPortal(
      <div className="popup">
      <img src={project.img} alt="Card" className="project-image" />
        <h3 className="popup-title">{project.title}</h3>
        <p className="popup-description">{project.description}</p>
        <button className="popup-close" onClick={() => handlePopup(false)}>
          Close
        </button>
      </div>,
      document.getElementById("modal")
    );
  }
};

export default ProjectPopup;
