import React, { useEffect, useState } from "react";
import "../css/Navigation.scss";
import logo from "../img/Logo.png";

const Navigation = ({ toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevMenuState, setPrevMenuState] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800 && prevMenuState) {
        setShowMenu(true);
      } else if (window.innerWidth > 800) {
        setShowMenu(false);
      }
    };
    // const handleResize = () => {
    //   if (window.innerHeight > 850) {
    //     setShowMenu(false);
    //   }
    // };
    // handleResize();
    // window.addEventListener('resize', handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [prevMenuState]);

  useEffect(() => {
    setPrevMenuState(showMenu);
  }, [showMenu]);
  return (
    <nav>
      <div id="nav-width">
        <div id="nav-logo">
          <a href="./"><img id="logo" src={logo} alt="logo" /></a>
        </div>
        <div id="nav-links" className={`${showMenu ? "show" : ""}`}>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#footer" className="nav-link" onClick={closeMenu}>Contact</a>
        </div>
        <div id="nav-right">
          {/* <button className="button-theme" onClick={toggleTheme}>&#9728;</button> */}
          <a className="icon-search-link" href="#header">
            <button className="button-theme">&#9993;</button>
          </a>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`line ${showMenu ? "line-1" : ""}`}></div>
            <div className={`line ${showMenu ? "line-2" : ""}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
