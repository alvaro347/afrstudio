import React from "react";
import ReactDom from "react-dom";
import "../css/ProjectPopup.scss";

const ProjectPopup = ({ project, trigger, handlePopup }) => {
  if (trigger === false) {
    return null;
  } else {
    return ReactDom.createPortal(
      <div className="popup" onClick={() => handlePopup(false)}>
        {/* <img src={project.img} alt="Card" className="project-image" /> */}
        {/* <h3 className="popup-title">{project.title}</h3>
      <p className="popup-description">{project.description}</p> */}
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={() => handlePopup(false)}>
            Close
          </button>
          <div className="slideshow">
            {/* Slideshow of images */}
            {project.images.map((image, index) => (
              <img key={index} src={image} className="slideshow-img" alt={`Project ${index}`} />
            ))}
          </div>
          <div className="popup-details">
            {/* Title */}
            <h2 className="popup-title">{project.title}</h2>
            {/* Description */}
            <p className="popup-description">{project.description}</p>
            {/* Tags, Date, and Type */}
            <div className="tags-container">
              <div className="tag">{project.tags}</div>
              <div className="date">{project.date}</div>
              <div className="type">{project.type}</div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
};

export default ProjectPopup;
