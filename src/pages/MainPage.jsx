import React from "react";
import "../css/MainPage.scss";
import ProjectsListCards from "../components/ProjectsListCards";
import ProjectShowcase from "../components/ProjectShowcase";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Header from "../components/Header";

// TODO: Combine themes and variables into one file.
// NOTE: For Flex elements use the skills section as base

function MainPage({ projects, headerImg, icons }) {
  return (
    <div className="main-page">
      {/* <div id="background-image"></div> */}
      <Header />
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
