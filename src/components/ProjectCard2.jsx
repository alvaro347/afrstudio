import React from "react";
import "../css/ProjectCard2.css";
// import projectExample from '../img/code.png'

function ProjectCard2() {
	return (
		<div className="product-card">
			<div className="product-image"></div>
			<div className="product-details">
				<h2 className="product-title">Product Title</h2>
				<p className="product-description">Product Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<div className="product-icons">
					<i className="material-icons">star</i>
					<i className="material-icons">favorite</i>
					<i className="material-icons">share</i>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard2;
