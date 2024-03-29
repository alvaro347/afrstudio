import React from "react";
import '../css/projectcard.css';
import projectExample from '../img/code.png'

function ProjectCard() {
	return (
		<div className="card">
			<img src={projectExample} alt="Card Image" />
			<div className="card-content">
				<h2 class="card-title">Title</h2>
				<p className="card-description">This is a small description of the card content.</p>
				<div className="icons">
					<img src="icon1.png" alt="Icon 1" />
					<img src="icon2.png" alt="Icon 2" />
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
