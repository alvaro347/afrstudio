import React from "react";
import image1 from "../img/image1.png";
import "../css/Introduction.css"


function Introduction() {
	return (
		<section id="introduction">
			<div className="section-container">
				<div className="intro-container">
					<p className="section-title-small blue-text">Achievements</p>
					<h2 className="section-title">INTRO</h2>
					<p>
						I bring a unique blend of technical expertise and artistic vision to every project. With a passion
						for innovation and a commitment to delivering exceptional results.
					</p>
				</div>
				<div className="intro-container">
								<img src={image1} className="introduction-image" alt="" />
							</div>
			</div>
		</section>
	);
}

export default Introduction;
