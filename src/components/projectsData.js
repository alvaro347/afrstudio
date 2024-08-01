import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project3b from "../img/project3b.png";
import project4 from "../img/project4.png";
import project4b from "../img/project4b.png";
import project4c from "../img/project4c.png";
import project5 from "../img/project5.png";
import project5b from "../img/project5b.png";
import project5c from "../img/project5c.png";
import reactLogo from "../img/react.svg";
import headerImg from "../img/headerImg.png";
import htmlLogo from "../img/html2.svg";

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
  java: {
    name: "java",
    img: htmlLogo,
    link: "#java",
  },
  javascript: {
    name: "javascript",
    img: htmlLogo,
    link: "#javascript",
  },
};

const projects = {
  project1: {
    title: "Restaurant Finder",
    titleShort: "project1a",
    index: 1,
    type: "WEB-APP",
    link: "https://github.com/alvaro347/ravenous",
    location: "",
    company: "",
    date: "2024",
    description:
      "Restaurant website with search-bar. Find a restaurant by type, location or other related information. It uses the Yelp Api to get HTTP Request and find data about restaurants.",
    overview:
      "Restaurant website with search-bar. Find a restaurant by type, location or other related information. It uses the Yelp Api to get HTTP Request and find data about restaurants. Restaurant website with search-bar.\n\n Find a restaurant by type, location or other related information. It uses the Yelp Api to get HTTP Request and find data about restaurants.",
    keyPoints: ["Yelp Api", "Web Design", "HTTP Request"],
    img: project1,
    images: [project1, headerImg],
    icons: [icons.reactIcon, icons.htmlIcon, icons.javascript],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  },
  project2: {
    title: "Music Playlist with Spotify API",
    titleShort: "project2b",
    index: 2,
    type: "WEB-APP",
    link: "https://github.com/alvaro347/jammming",
    location: "",
    date: "2024",
    description:
      "React web application called Jammming. Using  React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.",
    keyPoints: ["Spotify API", "Web App", "Responsive Design"],
    img: project2,
    images: [project2],
    icons: [icons.reactIcon, icons.htmlIcon, icons.javascript],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  },
  project3: {
    title: "Frogger Type Game",
    titleShort: "project3b",
    index: 3,
    type: "GAME",
    link: "https://github.com/alvaro347/frogger-type-game",
    location: "",
    date: "2024",
    description:
      "Frogger type game project! This project is a simple implementation of the classic Frogger type game using JavaScript, HTML, and CSS. The goal is to navigate the player across the board while avoiding enemies and collecting gems.",
    keyPoints: ["Game Logic", "Javascript", "Personal Project"],
    img: project3,
    images: [project3, project3b],
    icons: [icons.javascript, icons.htmlIcon],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  },  
  project4: {
    title: "Connect 4 Game in Java",
    titleShort: "project4b",
    index: 4,
    type: "GAME",
    link: "https://github.com/alvaro347/connect4-game",
    location: "",
    date: "2024",
    description:
      "Welcome to the Connect 4 game project! This Java project implements a console-based Connect 4 game where one player competes against a computer player (CPU). The goal is to connect four tokens vertically, horizontally, or diagonally to win the game.",
    keyPoints: ["Java", "Object-Oriented Programming"],
    img: project4,
    images: [project4, project4b, project4c],
    icons: [icons.java],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  }, 
  project5: {
    title: "Obstruction Game in Java",
    titleShort: "project5b",
    index: 5,
    type: "GAME",
    link: "https://github.com/alvaro347/obstruction-game",
    location: "",
    date: "2024",
    description:
      "This project is a recreation of the Obstruction game implemented in Java. The game logic, player interactions, and board display are handled through various classes to create an interactive console-based game.",
      keyPoints: ["Java", "Object-Oriented Programming"],
    img: project5,
    images: [project5, project5b, project5c],
    icons: [icons.java],
    keywords: {
      tags: ["web", "server"],
      link: "",
    },
  }, 

};

export default projects;