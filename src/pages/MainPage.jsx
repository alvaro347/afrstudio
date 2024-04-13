import React, { useState } from "react";
import "../css/MainPage.css";
import ProjectsListCards from "../components/ProjectsListCards";
import ProjectShowcase from "../components/ProjectShowcase";
// import ProjectCardIcons from "../components/ProjectCardIcons";
import gitHub from "../img/github.svg";
import ArtStation from "../img/artstationoriginal.svg";

// TODO: Change the hero section height to be 100vh - nav height.
// TODO: Handle sorting function to show or hide projects depending on the
// [X]: Change hero section (can't do 100vh - 60px)

function MainPage({ projects, headerImg, icons }) {
	// const [iconSort, setIconSort] = useState("");

	// function iconSortingHandle() {
	// 	setIconSort("react");
	// }

	return (
		<div className="main-page">
			{/* <div id="background-image"></div> */}
			<header id="header">
					<div id="header-left-block">
						<div id="header-img-container">
							<img id="header-img" src={headerImg} alt="header" />
						</div>
						<div className="header-text">
							<h1 id="header-title">
								<span className="roboto-bold">AFR STUDIO</span>
								<br />
								<span className="blue-text-outline italic">DEV.</span>
								<span className="blink-effect">|</span>
								<span className="text-margin-design roboto-bold"> & DESIGN.</span>
							</h1>
							<p className="header-paragraph">
								Crafting innovative solutions that bridge{" "}
								<span className="blue-text">creativity and technology,</span> driving{" "}
								<span className="blue-text">tangible results and elevating user experiences</span> across
								diverse industries.
							</p>
							{/* <p className="header-p-name">Alvaro Fernandez</p> */}
							<div id="buttons-header">
								<a href="https://github.com/alvaro347">
									<button className="button-header">
										<img className="hero-logo" src={gitHub} alt="github" /> Github
									</button>
								</a>
								<a href="https://www.artstation.com/alvaro347">
									<button className="button-header">
										<img className="hero-logo" src={ArtStation} alt="github" /> ArtStation
									</button>
								</a>
							</div>
							<div className="hero-types">
								<div className="work-type">
									<a href="#projects">
										<h3 className="work-type-title">Web Development</h3>
									</a>
								</div>
								<div className="work-type">
									<a href="https://www.artstation.com/alvaro347">
										<h3 className="work-type-title">Concept Art</h3>
									</a>
								</div>
								<div className="work-type">
									<a href="https://www.artstation.com/alvaro347">
										<h3 className="work-type-title">3D Design</h3>
									</a>
								</div>
							</div>
						</div>
						{/* <div className="header-icons flex">
							<img src={githubLogo} alt="github" className="header-logo" />
							<img src={LinkedInLogo} alt="github" className="header-logo" />
						</div> */}
				</div>
			</header>
			<section id="projects">
				{/* <div className="work-types">
					<div className="work-type">
						<h3 className="work-type-title">Art Direction</h3>
						<p className="work-type-p">Illustrations</p>
						<p className="work-type-p">Creative Concept</p>
						<p className="work-type-p">Visual Identity</p>
					</div>
					<div className="work-type">
						<h3 className="work-type-title">Developer</h3>
						<p className="work-type-p">Websites</p>
						<p className="work-type-p">Wireframes</p>
						<p className="work-type-p">Landing page</p>
					</div>
					<div className="work-type">
						<h3 className="work-type-title">3D Designs</h3>
						<p className="work-type-p">Architecture</p>
						<p className="work-type-p">Products</p>
						<p className="work-type-p">Packaging</p>
					</div>
				</div> */}
				<div className="title-text">
					<p className="text-gray-900 blue-text">Selected Projects</p>
					<h2 className="section-title">Project/* Highlights</h2>
				</div>
				<div id="projects-list-highlights">
					<ProjectShowcase project={projects.project1} />
					<ProjectShowcase project={projects.project2} />
				</div>
			</section>
			<section>
				<div className="title-text">
					<p className="text-gray-900 blue-text">Other Projects</p>
					<h2 className="section-title">Other projects</h2>
					<div className="sorting-icons">{/* <ProjectCardIcons projectIcons={icons} /> */}</div>
				</div>
				<div>
					<ProjectsListCards projects={projects} />
				</div>
			</section>
			<section id="about" className="developer">
				<h2 className="section-title">About</h2>
				<p id="about-text">
					I'm a versatile professional with a background in electrical engineering and industrial design. Over
					the years, I've seamlessly blended my engineering expertise with a keen eye for design, delivering
					impactful solutions that have made a difference for numerous companies.
					<br />
					<br />
					Specializing in software engineering and web development, I'm passionate about crafting seamless
					user experiences and building visually stunning applications. My unique combination of technical
					skills and design sensibility allows me to create innovative solutions that not only captivate users
					but also drive business growth.
					{/* <br />
					<br />
					Explore my portfolio to see how I've helped companies elevate their digital presence and achieve
					their goals through the perfect fusion of engineering and design. Let's collaborate and create
					something extraordinary together! */}
				</p>
			</section>
			<section id="contact">
				{/* <h2 className="section-title">Contact</h2> */}
				{/* <p>This is the contact section of my portfolio.</p> */}
				<button type="button" className="contact-button">
					Let's Talk!
				</button>
			</section>
		</div>
	);
}

export default MainPage;
