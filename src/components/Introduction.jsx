import React from "react";
import intro from "../img/intro6.png";
import "../css/Introduction.scss";

function Introduction() {
  return (
    <section id="introduction" className="section-container">
      <div className="intro-container">
        <div className="intro-text">
          {/* <p className="section-title-small blue-text">Achievements</p>
					<h2 className="section-title">INTRO</h2> */}
          <p className="intro-p">
            Bringing a <span className="text-highlighted">unique blend</span> of technical expertise and{" "}
            <span className="text-secondary">
              - artistic vision to every project. With a passion for innovation -
            </span>{" "}
            and a commitment to delivering <span className="text-highlighted">exceptional results.</span>
          </p>
          <div className="intro-sub">
            {/* <a href="#projects" className="intro-button">Projects</a> */}
            <a href="https://github.com/alvaro347" className="intro-button">GitHub</a>
            <a href="https://www.linkedin.com/in/alvaro-fernandez-rodriguez" className="intro-button">LinkedIn</a>
          </div>
        </div>

        <div className="intro-img-container">
          <img src={intro} className="intro-img" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
