import React from "react";
import "../css/ProjectCard.css";
// import projectExample from "../img/code.png";
import logo from "../img/github.svg";
import image1 from "../img/image1.png";

function ProjectCard() {
	return (
		<div className="card">
			<img src={image1} alt="Card" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
			<div className="card-content">
				<h2 className="card-title">Project Title</h2>
				<p className="card-description">This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills</p>
				<div className="more-info flex justify-between">
					<div className="icons flex">
						<img src={logo} alt="Icon 1" className="" />
						<img src={logo} alt="Icon 2" />
					</div>
					<div className="self-center more-info-text grid">
						<p className="">More information &#10230;</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
