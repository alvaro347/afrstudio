import React from "react";
import "../css/ProjectShowcase.scss";

function ProjectShowcase({ project }) {
  return (
    <div className="p-showcase">
      <a href="#projects">
        <div className="project-image-container">
          <img src={project.img} alt="Card" className="project-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{project.title}</h2>
          <p className="card-description">{project.description}</p>
        </div>
      </a>
      {/* <div className="more-info flex justify-between">
					<div className="icons flex">
						<a href="#123"><img src={htmlLogo2} alt="Icon 1" className="" /></a>
						<a href="#4556"><img src={reactLogo} alt="Icon 2" /></a>
					</div>
				</div> */}
      {/* <div className="self-center more-info-text grid">
						<p className="">More information &#10230;</p>
					</div> */}
    </div>
  );
}

export default ProjectShowcase;
