import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import ReactDom from "react-dom";
import ProjectCardIcons from "./ProjectCardIcons";
import "react-slideshow-image/dist/styles.css";

import "../css/ProjectPopup.scss";

const ProjectPopup = ({ project, trigger, handlePopup, isDarkMode }) => {
  const properties = {
    easing: "ease",
    autoplay: false,
    indicators: true,
  };
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
      <div className={`popup ${className} ${isDarkMode ? "dark" : "light"}`} onClick={() => onClose()}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          <div className="popup-content">
            <button className="popup-close" onClick={() => onClose()}>
              <span className="icon-cross"></span>
              {/* <span class="visually-hidden">Close</span> */}
              {/* <div className="line-close-1"></div>
              <div className="line-close-2"></div> */}
            </button>

            {/* <img key={index} src={image} className="slideshow-img" alt={`Project ${index}`} /> */}
            <div className="slideshow">
              <Slide {...properties}>
                {project.images.map((image, index) => (
                  <div className="each-slide-effect" key={index}>
                    <img src={image} className="slideshow-img" alt={`Project ${index}`} />
                    {/* <div style={{ backgroundImage: `url(${project.images[index]})` }}></div> */}
                  </div>
                ))}
              </Slide>
            </div>

            <div className="popup-bottom">
              <h2 className="popup-title">{project.title}</h2>
              <div className="popup-details">
                <div className="popup-text">
                  <p className="popup-description">{project.overview}</p>
                </div>

                <div className="popup-side-info">
                  <table className="popup-info-table">
                    <tbody>
                      <tr>
                        <td>Technology</td>
                        <td>Date</td>
                        <td>Type</td>
                      </tr>
                      <tr>
                        <td>
                          <ProjectCardIcons projectIcons={project.icons} />
                        </td>
                        {/* <td className="tag">{project.tags}</td> */}
                        <td className="date">( {project.date} )</td>
                        <td>
                          <span className="type">{project.type}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ul className="popup-list">
                    {/* {Object.keys(project).map(([project, projectData]) => {
                  return (<li className="p-list-item" key={project}>{projectData.keyPoints}</li>);
                              })} */}
                    {project.keyPoints.map((keyPoint, index) => {
                      return (
                        <li className="popup-list-item" key={index}>
                          {keyPoint}
                        </li>
                      );
                    })}
                  </ul>
                </div>
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
