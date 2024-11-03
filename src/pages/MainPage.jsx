import React from "react";
import "../css/MainPage.scss";
import ProjectsListCards from "../components/ProjectsListCards";
import ProjectShowcase from "../components/ProjectShowcase";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Header from "../components/Header";
import profile from "../img/profile.jpg";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// TODO: Combine themes and variables into one file.
// NOTE: For Flex elements use the skills section as base

function MainPage({ projects, isDarkMode, toggleTheme }) {

  return (
    <>
      <Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main id="main-page">
      <Header />
      <Introduction />
      <section id="projects" className="dotted-background">
        <div className="section-container">
          <div className="section-head">
            <div className="title-text">
              <p className="section-title-small text-highlighted">_Selected Projects</p>
              <h2 className="section-title">
                Project<span className="text-highlighted"> * </span>Highlights
              </h2>
            </div>
          </div>
          <div id="projects-list-highlights" className="dotted-background">
            <ProjectShowcase project={projects.project1} />
            <ProjectShowcase project={projects.project2} />
          </div>
        </div>
      </section>
      <section id="other-projects" className="section-container">
        <div className="section-head">
          <p className="section-title-small text-highlighted">_Personal & Small Projects</p>
          <h2 className="section-title">
            Other<span className="text-highlighted"> * </span>projects
          </h2>
        </div>
        <ProjectsListCards projects={projects} isDarkMode={isDarkMode} />
      </section>
      <Skills />
      <section id="about" className="section-container">
        <div className="section-head">
          <p className="section-title-small text-highlighted">_More information</p>
          <h2 className="section-title">The <span className="text-highlighted">*</span> Story</h2>
        </div>

        <div className="about-content">
          <div className="about-text-container">
            <p id="about-text" className="text-secondary">
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
            <div>
              {/* <ul class="p-list">
                <li class="p-list-item">This and that</li>
                <li class="p-list-item">and also this</li>
              </ul> */}
            </div>
            <div className="about-text-bottom">
              <p>Based in Europe</p>
              <p>Freelance available!</p>
            </div>
          </div>
          <img className="about-image" src={profile} alt="" />
        </div>
      </section>
    </main>
    <Footer />
    </>
    
  );
}

export default MainPage;
