import React from "react";

// REVIEW: simplify how data is imported and handle here.
// FIXME: Make it so that it can be more flexible.

function ProjectCardIcons({ projectIcons }) {
	if (Array.isArray(projectIcons)) {
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

	} else {
		function ShowIcons() {
			return Object.entries(projectIcons).map(([icon, iconData]) => {
				return (
					<a href={iconData.link} key={icon}>
						<img key={iconData.name} src={iconData.img} alt={iconData.name} className="" />
					</a>
				);
			});
		}

		return <div className="icons flex">{ShowIcons()}</div>;

	}
}

export default ProjectCardIcons;
