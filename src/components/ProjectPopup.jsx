import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "../css/ProjectPopup.scss";

const ProjectPopup = ({ project, trigger, handlePopup }) => {
  // useState: Set the clase to open or closed for the popup out window.
  const [className, setClassName] = useState(null);
  const onClose = () => {
    setClassName("close");
    setTimeout(() => {
      handlePopup(false);
    }, 300);
  };

  // useEffects: Adds a delay to open the window popup so it has time to create the animation.
  useEffect(() => {
    setTimeout(() => {
      setClassName("open");
    }, 200);
  }, [trigger]);

  // Make the window able to close when 'esc' key is pressed.
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });

  // Adds conditional to render if the trigger is set to true.
  // if true then it will create a portal.
  if (trigger === false) {
    return null;
  } else {
    return ReactDom.createPortal(
      <div className={`popup ${className}`} onClick={() => onClose()}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          <div className="popup-content">
            <button className="popup-close" onClick={() => onClose()}>
              <div className="line-close-1"></div>
              <div className="line-close-2"></div>
            </button>

            <div className="slideshow">
              {project.images.map((image, index) => (
                <img key={index} src={image} className="slideshow-img" alt={`Project ${index}`} />
              ))}
            </div>

            <div className="popup-details">
              <h2 className="popup-title">{project.title}</h2>
              <p className="popup-description">{project.description}</p>
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
