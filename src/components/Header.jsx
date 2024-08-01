import React from "react";
import "../css/Header.scss";
import headerImg from "../img/headerImg.png";


const Header = () => {
  return (
    <header id="header">
      <div className="header-image-container">
        <img className="header-image" src={headerImg} alt=""/>
        {/* <video autoplay muted loop className="header-image">
          <source src={video01} type="video/mp4" />
        </video> */}
      </div>
      <div className="header-text">
        {/* <div className="header-text-top"> */}
        <div className="header-title-container">
          <h1 id="header-title">
            <span className="header-title">AFR STUDIO</span>
            <br />
            <span className="blue-text-outline italic">DEV.</span>
            <span className="header-title"> & DESIGN.</span>
          </h1>
        </div>
        <p className="header-paragraph">
          Crafting innovative solutions that bridge{" "}
          <span className="text-highlighted">creativity and technology,</span> driving{" "}
          <span className="text-highlighted">tangible results and elevating user experiences</span> across
          diverse industries.
        </p>
        <div className="header-bottom">
          <p>Based in Europe</p>
          <p>Freelance available!</p>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
