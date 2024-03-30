import React from "react";
import "../css/MainPage.css";
import githubLogo from "../img/github.svg";
import headerImg from "../img/headerImg.png";
import linkedinLogo from "../img/linkedin.svg";
import ProjectCard from "../components/ProjectCard";


function MainPage() {
	return (
		<div>
			<header>
				<div id="header-front">
					<div id="header-left-block">
						<h1>Alvaro Fernandez</h1>
						<p className="header-text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime
							sunt reiciendis laudantium quaerat iure ipsum!
						</p>
						<div>
							<img src={githubLogo} alt="github" className="header-logo" />
							<img src={linkedinLogo} alt="github" className="header-logo" />
						</div>
					</div>
					<div id="header-right-block">
						<img id="header-img" src={headerImg} alt="header" />
					</div>
				</div>
			</header>
			<section id="projects">
				<h2 className="title-section">Projects</h2>
				
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
