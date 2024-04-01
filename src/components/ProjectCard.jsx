import React from "react";
import '../css/ProjectCard.css';
import projectExample from '../img/code.png'
import logo from '../img/github.svg'

function ProjectCard() {
	return (
		<div className="card">
			<img src={projectExample} alt="Card" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
			<div className="card-content">
				<h2 class="card-title">Title</h2>
				<p className="card-description">This is a small description of the card content.</p>
				<div className="icons flex">
					<img src={logo} alt="Icon 1" className="" />
					<img src={logo} alt="Icon 2" />
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
