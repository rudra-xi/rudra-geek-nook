import React from "react";

// TitleCard component to display a title with an accent line
function TitleCard({ title }) {
	return (
		<div className="inline-flex gap-2 text-5xl sm:text-6xl items-center mb-3">
			<h1 className="text-offWhite font-bold">{title}</h1>
			<span className="w-10 sm:w-12 h-2 bg-accent" />
		</div>
	);
}

export default TitleCard;
