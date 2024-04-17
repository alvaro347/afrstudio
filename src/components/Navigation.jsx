import React, { useState } from "react";
import "../css/nav.scss";
import logo from "../img/Logo.png";

const Navigation = () => {

  const [isDark, setIsDark] = useState(true);
	
  const themeHandler = () => {
    if (isDark === false) {
			console.log('Dark Mode On');
      setIsDark(true);
    } else {
			console.log('Light Mode On');
      setIsDark(false);
    }
  };

  return (
    <nav>
      <div className="nav-content">
        <div className="nav-width">
          <div id="nav-left">
            <a href="./index.html">
              <img id="logo" src={logo} alt="logo" />
            </a>
          </div>
          <div id="nav-links">
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div id="nav-right">
            <button className="button-header" onClick={themeHandler}>Dark</button>
            <a className="icon-search-link" href="#header">
              <button id="button-contact">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
