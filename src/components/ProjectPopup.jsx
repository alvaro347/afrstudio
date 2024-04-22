import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
// import { CSSTransition } from "react-transition-group";
// import Modal from 'react-modal';
import "../css/ProjectPopup.scss";

const ProjectPopup = ({ project, trigger, handlePopup }) => {
  const [className, setClassName] = useState(null);
  const onClose = () => {
    setClassName("close");
    setTimeout(() => {
      handlePopup(false);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setClassName("open");
    }, 200);
  }, [trigger]);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });

  if (trigger === false) {
    return null;
  } else {
    return ReactDom.createPortal(
      <div className={`popup ${className}`} onClick={() => onClose()}>
        {/* <img src={project.img} alt="Card" className="project-image" /> */}
        {/* <h3 className="popup-title">{project.title}</h3>
      <p className="popup-description">{project.description}</p> */}
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          <div className="popup-content">
            <button className="popup-close" onClick={() => onClose()}>
              <div className="line-close-1"></div>
              <div className="line-close-2"></div>
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
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
};

export default ProjectPopup;
