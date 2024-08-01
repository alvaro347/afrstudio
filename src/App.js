import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.scss";
import "./css/MediaQuery.scss";
import "./css/_animation.scss";
import MainPage from "./pages/MainPage";
import reactLogo from "./img/react.svg";
import headerImg from "./img/headerImg.png";
import htmlLogo from "./img/html2.svg";

import projects from "./components/projectsData";

const icons = {
  reactIcon: {
    name: "react",
    img: reactLogo,
    link: "#react",
  },
  htmlIcon: {
    name: "html",
    img: htmlLogo,
    link: "#html",
  },
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <MainPage projects={projects} headerImg={headerImg} icons={icons} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
