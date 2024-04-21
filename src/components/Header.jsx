import React from "react";
import "../css/HeaderTest.scss";


const Header = () => {
  return (

      <section id="header" className="section-container">
        <div className="header-image-container">
          {/* <img className="header-img" src={headerImg} alt="" /> */}
        </div>
        <div className="header-text">
          <h1 id="header-title">
            <span className="roboto-bold">AFR-STUDIO</span>
            <br />
            <span className="blue-text-outline italic">DEV.</span>
            <span className="blink-effect">|</span>
            <span className="text-margin-design roboto-bold"> & DESIGN.</span>
          </h1>
          <p className="header-paragraph">
            Crafting innovative solutions that bridge{" "}
            <span className="blue-text">creativity and technology,</span> driving{" "}
            <span className="blue-text">tangible results and elevating user experiences</span> across diverse
            industries.
          </p>
          {/* <div id="buttons-header">
            <a href="https://github.com/alvaro347" rel="noreferrer" target="_blank">
              <button className="button-header">
                <img className="hero-logo" src={gitHub} alt="github" /> Github
              </button>
            </a>
            <a href="https://www.artstation.com/alvaro347" rel="noreferrer" target="_blank">
              <button className="button-header">
                <img className="hero-logo" src={ArtStation} alt="github" /> ArtStation
              </button>
            </a>
          </div> */}
          {/* <div className="header-bottom">
            <p>Based in Europe</p>
            <p>Freelance available!</p>
          </div> */}
        </div>
      </section>

  );
};

export default Header;
