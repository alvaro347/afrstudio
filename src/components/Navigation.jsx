import React from "react";
import "../css/nav.css"
import logo from "../img/Logo.png";

export default function Navigation() {
	return (
		<nav>
			<div className="logo">
			<a href="#header"><img src={logo} alt="logo" /></a>
			</div>
			<div>
				<a href="#projects" className="nav-link">Projects</a>
				<a href="#about" className="nav-link">About</a>
				<a href="#contact" className="nav-link">Contact</a>
			</div>
		</nav>
	);
}
