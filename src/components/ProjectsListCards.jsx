import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsListCards({ projects, isDarkMode }) {
  function ProjectList() {
    const ShowProjects = Object.entries(projects).map(([project, projectData]) => {
      // Find the index number of each project entry to pass it as a text
      const number = "#0" + (Object.keys(projects).indexOf(project) + -1).toString();
      // Return each project card with the necessary props.
      if (Object.keys(projects).indexOf(project) + 1 > 2) {
        return (
          <ProjectCard
            project={projectData}
            number={number}
            key={projectData.title}
            isDarkMode={isDarkMode}
          />
        );
      }
    });
    return ShowProjects;
  }
  return <div id="projects-list-cards">{ProjectList()}</div>;
}

export default ProjectsListCards;
