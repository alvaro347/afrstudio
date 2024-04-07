import React from "react";

function ProjectCardIcons({ projectIcons }) {
  
	function ShowIcons() {
		return projectIcons.map((icon) => {
			return (
				<a href={icon.link} key={icon.name + "link"}>
					<img key={icon.name} src={icon.img} alt={icon.name} className="" />
				</a>
			);
		});
	}

	return <div className="icons flex">{ShowIcons()}</div>;
}

export default ProjectCardIcons;
