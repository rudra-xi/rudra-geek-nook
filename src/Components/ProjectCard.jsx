import React from "react";
import { github, preview } from "../Assets";

// ProjectCard component to display project details
function ProjectCard({
	previewImage,
	title,
	description,
	tags,
	gitLink,
	previewLink,
}) {
	return (
		<div className="card z-10 border-2 border-offWhite/30 hover:shadow-xl transition-all duration-500">
			<div
				className="top-section"
				style={{ backgroundImage: `url(${previewImage})` }}
			>
				<div className="border"></div>
				<div className="icons">
					<div className="logo">
						<a
							href={gitLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={github}
								alt="GitHub"
								className="icon"
							/>
						</a>
						<a
							href={previewLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={preview}
								alt="Preview"
								className="icon"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="bottom-section">
				<span className="title">{title}</span>
				<span className="desc">{description}</span>
				<span className="tags">{tags}</span>
			</div>
		</div>
	);
}

export default ProjectCard;
