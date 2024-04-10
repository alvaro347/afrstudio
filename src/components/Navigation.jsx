import React from "react";
import "../css/nav.css"
import logo from "../img/Logo.png";


export default function Navigation() {
	return (
		<nav>
			<div className="nav-content">
				<div className="nav-width">
					<div id="nav-left">
						<a href="#header"><img id="logo" src={ logo } alt="logo" /></a>
					</div>
					<div id="nav-links">
						<a href="#projects" className="nav-link">Projects</a>
						<a href="#about" className="nav-link">About</a>
						<a href="#contact" className="nav-link">Contact</a>
					</div>
					<div id="nav-right">
					<a className="icon-search-link" href="#header"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIi8+PC9zdmc+" alt="logo" /></a>
					</div>
				</div>
			</div>
		</nav>
	);
}