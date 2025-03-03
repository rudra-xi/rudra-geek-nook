import React from "react";
import { motion } from "motion/react";
import { techIcons } from "../Assets";

// TechMarquee component to display a scrolling marquee of tech icons
function TechMarquee() {
	return (
		<div className="w-full overflow-hidden">
			<motion.div
				className="flex space-x-8"
				animate={{
					x: ["0%", "-50%"],
				}}
				transition={{
					duration: 120,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{[
					...techIcons,
					...techIcons,
					...techIcons,
					...techIcons,
				].map((logo, idx) => (
					<div
						key={idx}
						className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20"
					>
						<img
							src={logo}
							alt=""
							className="w-[90%] h-[90%] object-contain hover:scale-110 transition-all duration-300"
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default TechMarquee;
