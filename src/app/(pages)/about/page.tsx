"use client";

import {
	AccordionAbout,
	ActivityTag,
	PageHeading,
	TerminalPrompt,
} from "@/components";

/**
 * About page component
 * Displays personal information and skills
 * Features terminal-style UI elements
 */
export default function About() {
	return (
		<section>
			<TerminalPrompt />

			<div>
				<PageHeading
					code="profile --build"
					text={
						<>
							init: launch unified{" "}
							<span className={"text-accent"}>vision</span> and{" "}
							<span className={"text-accent"}>skillset</span>
						</>
					}
				/>
			</div>

			<div className={"pt-12 text-base md:text-xl lg:text-lg"}>
				<p className={"text-justify"}>
					I’m Goutam <span className="text-accent">`rudra`</span>{" "}
					Prasad, a self-taught professional specializing in the
					fusion of{" "}
					<span className="text-accent">Web Development</span> and{" "}
					<span className="text-accent">Graphic Design</span>. My
					approach is rooted in creating exceptional digital products
					defined by their{" "}
					<span className="text-accent">minimalism</span> and
					strategic creative impact. This dual expertise grants me a
					holistic perspective, ensuring every project is visually
					compelling, highly intuitive, and engineered for superior
					performance.
				</p>
				<p className={"text-justify mt-6"}>
					My core philosophy is the critical blend of form and
					function. With a strong design foundation, I prioritize
					clean aesthetics and{" "}
					<span className="text-accent">simplicity</span>. I then
					leverage my development skills to precisely execute those
					concepts, building interfaces that are not just beautiful,
					but also meticulously coded for speed and{" "}
					<span className="text-accent">functionality</span>. I
					engineer experiences where flawless design meets
					high-caliber performance.
				</p>
			</div>

			<div className={"py-12 pl-0 md:pl-20 lg:pl-24"}>
				<AccordionAbout />
			</div>

			<div className={"py-12 text-base md:text-xl lg:text-lg"}>
				<ActivityTag main="life" text="fetch current_goals" />

				<p className={"text-justify mt-4"}>
					My immediate creative energy is dedicated to mastering the
					art of modern digital aesthetics, specifically through{" "}
					<span className="text-accent">
						redesigning frontend layouts
					</span>{" "}
					inspired by Dribbble’s finest. This focus ensures every
					project is not just functional, but also visually arresting
					and aligned with cutting-edge design trends.
				</p>
				<p className={"text-justify mt-6"}>
					Technically, I am deep-diving into advanced motion graphics.
					This includes leveraging the power of{" "}
					<span className="text-accent">GSAP animation</span> for
					fluid, narrative-driven interface experiences, and
					experimenting with{" "}
					<span className="text-accent">ThreeJS</span> to integrate
					complex, high-performance 3D visuals directly into web
					environments.
				</p>
			</div>
		</section>
	);
}
