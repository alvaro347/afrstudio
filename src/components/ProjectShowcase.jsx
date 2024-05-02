import React, { useState } from "react";
// import ProjectPopup from "./ProjectPopup";
import "../css/ProjectShowcase.scss";
import { Outlet, Link } from "react-router-dom";

function ProjectShowcase({ project }) {
  // useState: Window popup hook for opening and closing it.
  // const [buttonPopup, setButtonPopup] = useState(false);

  // const handlePopup = (e) => {
  //   if (e === false) {
  //     setButtonPopup(false);
  //     document.body.style.overflow = "unset";
  //   } else {
  //     setButtonPopup(true);
  //     document.body.style.overflow = "hidden";
  //   }
  // };

  return (
    <div className="p-showcase">
      <div className="p-content">
        <div className="p-number">0{project.index}</div>
        <h2 className="p-title">{project.title}</h2>
        <p className="p-description">{project.description}</p>
        <p className="p-date">( {project.date} )</p>
        <ul className="p-list">
          {/* {Object.keys(project).map(([project, projectData]) => {
              return (<li className="p-list-item" key={project}>{projectData.keyPoints}</li>);
            })} */}
          {project.keyPoints.map((keyPoint, index) => {
            return (
              <li className="p-list-item" key={index}>
                {keyPoint}
              </li>
            );
          })}
        </ul>
        <Link className="p-more-info" to={project.titleShort}>
          More information ->
        </Link>
      </div>
      <div className="p-image-container">
        <img src={project.img} alt="Card" className="p-image" />
      </div>
    </div>
  );
}

export default ProjectShowcase;
