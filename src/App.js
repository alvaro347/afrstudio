import React, { useState } from "react";
import "./css/App.scss";
import "./css/MediaQuery.scss";
import MainPage from "./pages/MainPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import image1 from "./img/image1.png";
import reactLogo from "./img/react.svg";
import headerImg from "./img/headerImg.png";
import htmlLogo from "./img/html2.svg";

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

const projects = {
  project1: {
    title: "Project 1: A",
    location: "",
    date: "",
    description:
      "This is a small description of the card content. This projects it's about this and that.",
    overview: "",
    keyPoints: ["This and that", "and also this"],
    img: image1,
    images: [image1],
    icons: [icons.reactIcon, icons.htmlIcon],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  },
  project2: {
    title: "Project 2: B",
    location: "",
    date: "",
    description:
      "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    images: [image1, image1, image1],
    icons: [icons.reactIcon, icons.htmlIcon],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  },
  project3: {
    title: "Project 3: B",
    location: "",
    date: "",
    description:
      "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    images: [image1, image1, image1],
    icons: [icons.htmlIcon, icons.reactIcon],
    keywords: {
      tags: ["web"],
      link: "",
    },
  },
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <MainPage projects={projects} headerImg={headerImg} icons={icons} />
      <Footer />
    </div>
  );
}

export default App;
