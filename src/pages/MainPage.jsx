import React, { useState } from "react";
import "../css/MainPage.scss";
import ProjectsListCards from "../components/ProjectsListCards";
import ProjectShowcase from "../components/ProjectShowcase";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Header from "../components/Header";
// import ProjectCardIcons from "../components/ProjectCardIcons";
import gitHub from "../img/github.svg";
import ArtStation from "../img/artstationoriginal.svg";

// TODO: Make accordion menu for the skills.
// TODO: Handle sorting function to show or hide projects depending on the technology used
// TODO: Other projects should only print 3 (then add a link for additional)
// NOTE: For Flex elements use the skills section as base

function MainPage({ projects, headerImg, icons }) {
  // const [iconSort, setIconSort] = useState("");

  // function iconSortingHandle() {
  // 	setIconSort("react");
  // }

  return (
    <div className="main-page">
      {/* <div id="background-image"></div> */}
      <Header />
      {/* <header id="header">
        <div id="header-img-container">
          <img id="header-img" src={headerImg} alt="header" />
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
          </p> */}
      {/* <p className="header-p-name">Alvaro Fernandez</p> */}
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
          <div className="header-bottom">
            <p>Based in Europe</p>
            <p>Freelance available!</p>
          </div>
        </div>
      </header> */}
      <Introduction />
      <section id="projects">
        <div className="section-container">
          <div className="title-text">
            <p className="text-gray-900 blue-text section-title-small">Selected Projects</p>
            <h2 className="section-title">Project * Highlights</h2>
          </div>
          <div id="projects-list-highlights">
            <ProjectShowcase project={projects.project1} />
            <ProjectShowcase project={projects.project2} />
          </div>
        </div>
      </section>
      <section>
        <div className="section-container">
          <div className="title-text">
            <p className="text-gray-900 blue-text">Other Projects</p>
            <h2 className="section-title">Other * projects</h2>
            <div className="sorting-icons">{/* <ProjectCardIcons projectIcons={icons} /> */}</div>
          </div>
          <div>
            <ProjectsListCards projects={projects} />
          </div>
        </div>
      </section>
      <Skills />
      <section id="about" className="developer">
        <div className="section-container">
          <p className="section-title-small blue-text">Professional Services</p>

          <h2 className="section-title">About</h2>
          <p id="about-text">
            I'm a versatile professional with a background in electrical engineering and industrial design.
            Over the years, I've seamlessly blended my engineering expertise with a keen eye for design,
            delivering impactful solutions that have made a difference for numerous companies.
            <br />
            <br />
            Specializing in software engineering and web development, I'm passionate about crafting seamless
            user experiences and building visually stunning applications. My unique combination of technical
            skills and design sensibility allows me to create innovative solutions that not only captivate
            users but also drive business growth.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
