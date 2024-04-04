import React from "react";
import "../css/MainPage.css";
import githubLogo from "../img/github.svg";
import headerImg from "../img/headerImg.png";
import linkedinLogo from "../img/linkedin.svg";
import ProjectCard from "../components/ProjectCard";
import ProjectShowcase from "../components/ProjectShowcase";
import ProjectShowcase2 from "../components/ProjectShowcase2";

function MainPage() {
	return (
		<div className="main-page">
			<header id="header">
				<div id="header-front">
					<div id="header-left-block">
					<div id="header-right-block">
						<img id="header-img" src={headerImg} alt="header" />
					</div>
						<h2 id="header-title" className="font-bold">Web Studio</h2>
						<p className="header-text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime
							sunt reiciendis laudantium quaerat iure ipsum!
						</p>
						{/* <div className="header-icons flex">
							<img src={githubLogo} alt="github" className="header-logo" />
							<img src={linkedinLogo} alt="github" className="header-logo" />
						</div> */}
					</div>
				</div>
			</header>
			<section id="projects">
			<div className="title-text">

				<h2 className="title-section">Highlights</h2>
				{/* <p className="text-gray-900">Selected Projects</p> */}
			</div>
				<div className="cards">
					<ProjectShowcase />
					<ProjectShowcase2 />
					<ProjectShowcase2 />
					{/* <ProjectShowcase /> */}
				</div>
				<div className="title-text">

				<h2 className="title-section">Others</h2>
				</div>
				<div className="cards">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</section>
			<section id="about" className="developer">
				<h2 className="title-section">About</h2>
				<p>This is the developer section of my portfolio.</p>
			</section>
			<section id="contact" className="concept-artist">
				<h2 className="title-section">Contact</h2>
				<p>This is the concept artist section of my portfolio.</p>
			</section>
		</div>
	);
}

export default MainPage;
