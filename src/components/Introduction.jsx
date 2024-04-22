import React from "react";
import image1 from "../img/image1.png";
import "../css/Introduction.scss";

function Introduction() {
  return (
    <section id="introduction" className="section-container">
      <div className="intro-container">
        <div className="intro-text">
          {/* <p className="section-title-small blue-text">Achievements</p>
					<h2 className="section-title">INTRO</h2> */}
          <p className="intro-p">
            Bringing a <span className="blue-text">unique blend</span> of technical expertise and{" "}
            <span className="grey-text">
              - artistic vision to every project. With a passion for innovation -
            </span>{" "}
            and a commitment to delivering <span className="blue-text">exceptional results.</span>
          </p>
          <div className="intro-sub">
            <button className="intro-button">lolo</button>
            <button className="intro-button">lolo</button>
          </div>
        </div>

        <div className="intro-img-container">
          <img src={image1} className="intro-img" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
