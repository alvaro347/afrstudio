import React from "react";
import "../css/nav.css"

export default function Navigation() {
	return (
		<nav>
			<a href="#projects" className="nav-link">Projects</a>
			<a href="#about" className="nav-link">About</a>
			<a href="#contact" className="nav-link">Contact</a>
		</nav>
	);
}
