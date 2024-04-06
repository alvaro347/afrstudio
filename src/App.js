// import logo from './img/logo.svg';
import './css/App.css';
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './css/MediaQuery.css'
import image1 from "./img/image1.png";
import reactLogo from "./img/react.svg";
import headerImg from "./img/headerImg.png";
import htmlLogo from "./img/html2.svg"


const projects = {
  project1: {
    title: "Project 1: A",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    icons: [reactLogo, reactLogo]
  },
  project2: {
    title: "Project 2: B",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    icons: [reactLogo, htmlLogo],
    keywords: {
      tags: ["web", "server"],
      link: ""
    }
  },
	project3: {
    title: "Project 3: B",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    icons: [htmlLogo, reactLogo],
    keywords: {
      tags: ["web"],
      link: ""
    }
  },
	project4: {
    title: "Project 4: B",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    icons: [reactLogo, reactLogo],
    keywords: {
      tags: ["web"],
      link: ""
    }
  }
};


function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage projects={projects} headerImg={headerImg}/>
      <Footer />
    </div>
  );
}

export default App;
