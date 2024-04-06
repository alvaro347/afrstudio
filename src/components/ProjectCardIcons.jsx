import React from "react";

function ProjectCardIcons({ projectIcons }) {
  
	function ShowIcons() {
		return projectIcons.map((icon) => {
			return (
				<a href="#123">
					<img src={icon} alt="Icon 1" className="" />
				</a>
			);
		});
	}

	return <div className="icons flex">{ShowIcons()}</div>;
}

export default ProjectCardIcons;
