import React from "react";
import '../css/MainPage.css'

function MainPage() {
	return (
		<div>
			<header>
				<h1>Portfolio</h1>
			</header>
			<nav>
				<a href="#photography">Photography</a>
				<a href="#developer">Developer</a>
				<a href="#concept-artist">Concept Artist</a>
			</nav>
			<section id="photography" class="photography">
				<h2>Photography</h2>
				<p>This is the photography section of my portfolio.</p>
			</section>
			<section id="developer" class="developer">
				<h2>Developer</h2>
				<p>This is the developer section of my portfolio.</p>
			</section>
			<section id="concept-artist" class="concept-artist">
				<h2>Concept Artist</h2>
				<p>This is the concept artist section of my portfolio.</p>
			</section>
		</div>
	);
}

export default MainPage;
