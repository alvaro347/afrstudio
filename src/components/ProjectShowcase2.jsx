import React from "react";
import "../css/ProjectShowcase2.css";
// import projectExample from "../img/code.png";
// import logo from "../img/github.svg";
// import htmlLogo from "../img/html.svg";
import htmlLogo2 from "../img/html2.svg";
import image1 from "../img/image1.png";
import reactLogo from "../img/react.svg";

function ProjectShowcase2() {
	return (
		<div className="p-showcase2">
			<div className="project-img-box">
				<a href="#projects">
					<img src={image1} alt="Card" className="project-image2 h-full w-full object-cover object-center lg:h-full lg:w-full" />
				</a>
			</div>

			<div className="more-info-side justify-between">
				<div className="project-content">
					<a href="#123">
						<h2 className="project-title2">Project Title</h2>
						<p className="project-description">
							This is a small description of the card content. This projects it's about this and that. the
							content an intention was to showcase react skills. This is a small description of the card
							content. This projects it's about this and that. the content an intention was to showcase react
							skills. This is a small description of the card content. This projects it's about this and that.
							the content an intention was to showcase react skills
						</p>
					</a>
				</div>
				<div className="icons-side2 flex">
					<a href="#123">
						<img src={htmlLogo2} alt="Icon 1" className="" />
					</a>
					<a href="#4556">
						<img src={reactLogo} alt="Icon 2" />
					</a>
				</div>
				{/* <div className="self-center more-info-text grid">
						<p className="">More information &#10230;</p>
					</div> */}
			</div>
		</div>
	);
}

export default ProjectShowcase2;
