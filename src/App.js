import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    title: "Restaurant Finder",
    titleShort: "project1a",
    index: 1,
    type: "web",
    location: "",
    company: "",
    date: "2024",
    description:
      "Restaurant website with search-bar. Find a restaurant by type, location or other related information. It uses the Yelp Api to get HTTP Request and find data about restaurants.",
    overview:
      "Restaurant website with search-bar. Find a restaurant by type, location or other related information. It uses the Yelp Api to get HTTP Request and find data about restaurants. Restaurant website with search-bar. Find a restaurant by type, location or other related information. It uses the Yelp Api to get HTTP Request and find data about restaurants.",
    keyPoints: ["Yelp Api", "Web Design", "HTTP Request"],
    img: image1,
    images: [image1, headerImg],
    icons: [icons.reactIcon, icons.htmlIcon],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  },
  project2: {
    title: "Project 2: B",
    titleShort: "project2b",
    index: 2,
    type: "Game",
    location: "",
    date: "2024",
    description:
      "This is a small description of the card content. This is a small description of the card content.",
    keyPoints: ["This and that", "and also this"],
    img: image1,
    images: [image1],
    icons: [icons.reactIcon, icons.htmlIcon],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  },
  project3: {
    title: "Project 3: B",
    type: "Ai",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. ",
    img: image1,
    images: [image1],
    icons: [icons.htmlIcon, icons.reactIcon],
    keywords: {
      tags: ["web"],
      link: "",
    },
  },
  project4: {
    title: "Project 4: B",
    type: "Ai",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. ",
    img: image1,
    images: [image1],
    icons: [icons.htmlIcon, icons.reactIcon],
    keywords: {
      tags: ["web"],
      link: "",
    },
  },
  project5: {
    title: "Project 5: B",
    type: "Ai",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. ",
    img: image1,
    images: [image1],
    icons: [icons.htmlIcon, icons.reactIcon],
    keywords: {
      tags: ["web"],
      link: "",
    },
  },
  project6: {
    title: "Project 6: B",
    type: "Ai",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. ",
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
      <MainPage projects={projects} headerImg={headerImg} icons={icons} isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
