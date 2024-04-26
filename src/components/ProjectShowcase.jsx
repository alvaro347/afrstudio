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
      <div className="cursor-pointer">
        <div className="project-image-container">
          <img src={project.img} alt="Card" className="project-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{project.title}</h2>
          <p className="card-description">{project.description}</p>
          {/* <Link to={project.titleShort}>More information</Link> */}
        </div>
      </div>
      {/* {buttonPopup && <ProjectPopup trigger={buttonPopup} project={project} handlePopup={handlePopup} />} */}
    </div>
  );
}

export default ProjectShowcase;
