import React from "react";
import "../css/ProjectCard.css";
// import projectExample from "../img/code.png";
// import logo from "../img/github.svg";
// import htmlLogo from "../img/html.svg";
import htmlLogo2 from "../img/html2.svg";
import image1 from "../img/image1.png";
import reactLogo from "../img/react.svg";

function ProjectCard() {
	return (
		<div className="card">
			<a href="#projects">
			<img src={image1} alt="Card" className="project-image h-full w-full object-cover object-center lg:h-full lg:w-full" />
		
			<div className="card-content">
			
				<h2 className="card-title">Project Title</h2>
				
				<p className="card-description">This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills</p>
				</div>
				</a>

				<div className="more-info flex justify-between">
					<div className="icons flex">
						<a href="#123"><img src={reactLogo} alt="Icon 1" className="" /></a>
						<a href="#4556"><img src={reactLogo} alt="Icon 2" /></a>
					</div>
					{/* <div className="self-center more-info-text grid">
						<p className="">More information &#10230;</p>
					</div> */}
				</div>
			</div>
			
		
	);
}

export default ProjectCard;
