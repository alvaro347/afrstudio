import React from "react";
import "../css/MainPage.css";
import github from "../img/github.svg";

function MainPage() {
	return (
		<div>
			<header>
				<div id="header-left-block">
					<h1>Alvaro Fernandez</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime
						sunt reiciendis laudantium quaerat iure ipsum!
					</p>
					<img src={ github } alt="github" />
				</div>
				<div id="header-right-block">
					<img src="../img/headerImg.png" alt="header" id="header-img" />
				</div>
			</header>
			<section id="projects">
				<h2>Photography</h2>
				<p>This is the photography section of my portfolio.</p>
			</section>
			<section id="developer" className="developer">
				<h2>Developer</h2>
				<p>This is the developer section of my portfolio.</p>
			</section>
			<section id="concept-artist" className="concept-artist">
				<h2>Concept Artist</h2>
				<p>This is the concept artist section of my portfolio.</p>
			</section>
		</div>
	);
}

export default MainPage;
