import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";
import "../css/ProjectShowcase.scss";

function ProjectShowcase({ project }) {
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
    <div className="p-showcase">
      <div className="cursor-pointer" onClick={() => handlePopup(true)}>
        <div className="project-image-container">
          <img src={project.img} alt="Card" className="project-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{project.title}</h2>
          <p className="card-description">{project.description}</p>
        </div>
      </div>
      {/* <div className="more-info flex justify-between">
					<div className="icons flex">
						<a href="#123"><img src={htmlLogo2} alt="Icon 1" className="" /></a>
						<a href="#4556"><img src={reactLogo} alt="Icon 2" /></a>
					</div>
				</div> */}
      {/* <div className="self-center more-info-text grid">
						<p className="">More information &#10230;</p>
					</div> */}
      {buttonPopup && <ProjectPopup trigger={buttonPopup} project={project} handlePopup={handlePopup} />}
    </div>
  );
}

export default ProjectShowcase;
