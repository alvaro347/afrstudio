import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsListCards({ projects }) {
  function ProjectList() {
    const ShowProjects = Object.entries(projects).map(([project, projectData]) => {
      // Find the index number of each project entry to pass it as a text
      const number = "#0" + (Object.keys(projects).indexOf(project) + 1).toString();
      // Return each project card with the necessary props.
      return <ProjectCard project={projectData} number={number} key={projectData.title} />;
    });
    return ShowProjects;
  }
  return <div id="projects-list-cards">{ProjectList()}</div>;
}

export default ProjectsListCards;
