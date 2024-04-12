import React from "react";
import "../css/nav.css"
import logo from "../img/Logo.png";


export default function Navigation() {
	return (
		<nav>
			<div className="nav-content">
				<div className="nav-width">
					<div id="nav-left">
						<a href="#nav"><img id="logo" src={ logo } alt="logo" /></a>
					</div>
					<div id="nav-links">
						<a href="#projects" className="nav-link">Projects</a>
						<a href="#about" className="nav-link">About</a>
						<a href="#contact" className="nav-link">Contact</a>
					</div>
					<div id="nav-right">
					<a className="icon-search-link" href="#header"><button id="button-contact" >Contact</button></a>
					</div>
				</div>
			</div>
		</nav>
	);
}