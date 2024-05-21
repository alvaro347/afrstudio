import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ProjectCardIcons from "./ProjectCardIcons";
import { Link } from "react-router-dom";

function ProjectPage({ projects }) {
  const { projectName } = useParams();
  const project = { name: projectName, description: "Project Description" };
  return (
    <>
      <Navigation />
      <div>
        <p></p>
      </div>
      <Footer />
    </>
  );
}

export default ProjectPage;
