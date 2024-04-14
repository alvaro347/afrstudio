import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsListCards({ projects }) {
	function ProjectList() {
		const ShowProjects = Object.entries(projects).map(([project, projectData]) => {
			console.log(project.length);
			return <ProjectCard project={projectData} key={projectData.title} />;
		});
		return ShowProjects;
	}

	return <div id="projects-list-cards">{ProjectList()}</div>;
}

export default ProjectsListCards;
