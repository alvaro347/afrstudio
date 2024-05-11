import React from "react";
import "../css/Header.scss";
import ArtStation from "../img/artstationoriginal.svg";
import Github from "../img/github.svg";

const HeaderBackup = () => {
  return (
    <header id="header">
      <div className="header-image-container">
        {/* <img className="header-img" src={headerImg} alt="" /> */}
      </div>
      <div className="header-text">
        <div className="header-text-top">
          <div className="header-title-container">
            <h1 id="header-title">
              <span className="header-title">AFR STUDIO</span>
              <br />
              <span className="blue-text-outline italic">DEV.</span>
              {/* <span className="blink-effect">|</span> */}
              <span className="header-title"> & DESIGN.</span>
            </h1>
            {/* <div className="header-title-icon-left"></div> */}
          </div>
          <p className="header-paragraph">
            Crafting innovative solutions that bridge{" "}
            <span className="text-highlighted">creativity and technology,</span> driving{" "}
            <span className="text-highlighted">tangible results and elevating user experiences</span> across
            diverse industries.
          </p>
          {/* <div id="buttons-header">
          <a href="https://github.com/alvaro347" rel="noreferrer" target="_blank">
            <button className="button-header">
              <img className="hero-logo" src={Github} alt="github" /> Github
            </button>
          </a>
          <a href="https://www.artstation.com/alvaro347" rel="noreferrer" target="_blank">
            <button className="button-header">
              <img className="hero-logo" src={ArtStation} alt="github" /> ArtStation
            </button>
          </a>
        </div> */}
        </div>
        <div className="header-bottom">
          <p>Based in Europe</p>
          <p>Freelance available!</p>
        </div>

        <div className="hero-types">
          <div className="work-type">
            <a href="#projects">
              <h3 className="work-type-title">Web-Development</h3>
            </a>
          </div>
          <div className="work-type">
            <a href="https://www.artstation.com/alvaro347" rel="noreferrer" target="_blank">
              <h3 className="work-type-title">Concept Art</h3>
            </a>
          </div>
          <div className="work-type">
            <a href="https://www.artstation.com/alvaro347" rel="noreferrer" target="_blank">
              <h3 className="work-type-title">3D Design</h3>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};


