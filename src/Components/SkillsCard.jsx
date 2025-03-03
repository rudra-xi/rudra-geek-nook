import React from "react";

function SkillsCard({ title, skills }) {
	return (
		<div className="relative font-sans text-offWhite hover:-translate-y-2 transition-all duration-500">
			{/* Decorative elements */}
			<div className="absolute w-24 h-24 bg-accent/35 rounded-full top-[30%] right-[7%]"></div>
			<div className="absolute h-12 top-[8%] right-[5%] border border-offWhite"></div>

			{/* Card content */}
			<div className="sm:w-48 w-42 sm:h-64 h-52 p-4 bg-accent/2 border-2 border-offWhite/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:drop-shadow-glow hover:border-offWhite/50">
				<h2 className="sm:text-2xl text-xl font-medium tracking-wider mb-4">
					{title}
				</h2>

				<ul className="space-y-2">
					{skills.map((skill, idx) => (
						<li
							key={idx}
							className="text-sm font-light tracking-wider"
						>
							{skill}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default SkillsCard;
