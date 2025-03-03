import React from "react";

function HeroBtn({ text, icon, href, download }) {
	return (
		// Button container with hover effect
		<div className="pb-3 sm:pb-0 hover:-translate-y-1 transition-all duration-300">
			<a
				className="relative inline-flex h-12 transition overflow-hidden rounded-lg p-[2px] focus:outline-none"
				download={download}
				href={href}
			>
				{/* Animated background */}
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#dece9c_0%,#1a1831_25%,#ff6b6b_75%)]"></span>
				{/* Button content */}
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-7 text-sm font-medium text-offWhite backdrop-blur-xl gap-3 undefined">
					{text}
					<img src={icon} alt="" className="w-5" />
				</span>
			</a>
		</div>
	);
}

export default HeroBtn;
