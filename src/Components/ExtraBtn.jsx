import React from "react";

function ExtraBtn({ text, icon, href, type }) {
	// If href is provided, render an anchor tag
	if (href) {
		return (
			<div className="relative">
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer flex gap-2 border-none transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] rounded-xl font-bold justify-center items-center px-4 py-3 text-sm bg-primary shadow-xl text-offWhite hover:text-accent hover:translate-y-[-0.25rem] hover:bg-primary/70"
				>
					<img src={icon} alt="" className="w-5" />
					<span>{text}</span>
				</a>
			</div>
		);
	}

	// If href is not provided, render a button
	return (
		<div className="relative">
			<button
				type="submit"
				className="cursor-pointer flex gap-2 border-none transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] rounded-xl font-bold justify-center items-center px-4 py-3 text-sm bg-primary shadow-xl text-offWhite hover:text-accent hover:translate-y-[-0.25rem] hover:bg-primary/70"
			>
				<img src={icon} alt="" className="w-5" />
				<span>{text}</span>
			</button>
		</div>
	);
}

export default ExtraBtn;
