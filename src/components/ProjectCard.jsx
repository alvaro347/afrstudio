import React from "react";
import "../css/ProjectCard.css";
import ProjectCardIcons from "./ProjectCardIcons";

function ProjectCard({ project }) {
	return (
		<div className="card">
			<a href="#projects">
				<div className="project-image-container">
					<img
						className="project-image h-full w-full object-cover object-center lg:h-full lg:w-full"
						src={project.img}
						alt="Card"
					/>
				</div>
				<div className="card-content">
					<h2 className="card-title">{project.title}</h2>
					<p className="card-description">{project.description}</p>
				</div>
			</a>

			<div className="more-info flex justify-between">
				<ProjectCardIcons projectIcons={project.icons} />
				<div className="self-center more-info-text grid">
					<a href="#projects">
						<p className="">More information &#10230;</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
