import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import ProjectPopup from "./ProjectPopup";
import ProjectCardIcons from "./ProjectCardIcons";
import "../css/ProjectShowcase.scss";


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
        <div className="p-number">#0{project.index}</div>

        <h2 className="p-title">
          <Link to={project.titleShort}>{project.title}</Link>
        </h2>

        <p className="p-description">{project.description}</p>
        <div className="p-tags">
          <div className="p-tag">{project.type}</div>
          <p className="p-date">( {project.date} )</p>
        </div>
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
          More information...
        </Link>
      </div>
      <div className="p-image-container">
        <Link to={`/${project.titleShort}`}>
          <img src={project.img} alt="Card" className="p-image" />
        </Link>
      </div>
    </div>

  );
}

export default ProjectShowcase;
