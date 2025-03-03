import React from "react";
import { TitleCard, ProjectCard, ExtraBtn } from "../Components";
import { projectsInfo } from "../Constants";
import { github } from "../Assets";
import { motion } from "motion/react";

function Projects() {
	// Variants for container animation
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.5,
			},
		},
	};

	// Variants for card animation
	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="projects"
			className="sm:pt-24 py-6 flex flex-col items-center justify-center gap-10"
		>
			{/* Title section */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					delay: 0.8,
					duration: 0.5,
					ease: [1, -0.1, 0.06, 1.11],
				}}
			>
				<TitleCard title={"My Creations"} />
			</motion.div>

			{/* Description section */}
			<motion.p
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					delay: 0.8,
					duration: 0.5,
					ease: [1, -0.1, 0.06, 1.11],
				}}
				className="text-justify text-lg"
			>
				Welcome to{" "}
				<span className="text-accent/50 tracking-wider font-bold capitalize">
					My Creations
				</span>{" "}
				section, where I showcase projects that blend{" "}
				<span className="text-accent/50 tracking-wider font-bold capitalize">
					creativity
				</span>{" "}
				with{" "}
				<span className="text-accent/50 tracking-wider font-bold capitalize">
					technical expertise
				</span>
				. From dynamic web apps to visually stunning designs, each
				project reflects my passion for building impactful digital
				experiences. Explore the{" "}
				<span className="text-accent/50 tracking-wider font-bold capitalize">
					live previews
				</span>{" "}
				and{" "}
				<span className="text-accent/50 tracking-wider font-bold capitalize">
					GitHub links
				</span>{" "}
				to see how I bring ideas to life through code and design.
			</motion.p>

			{/* Projects grid section */}
			<div className="w-full flex justify-center">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl px-4 sm:px-8"
				>
					{projectsInfo.map((project) => (
						<motion.div
							variants={cardVariants}
							key={project.id}
						>
							<ProjectCard
								previewLink={project.previewLink}
								gitLink={project.gitLink}
								previewImage={project.previewImage}
								title={project.title}
								description={project.description}
								tags={project.tags}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Extra button section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					delay: 2.1,
					duration: 0.5,
				}}
			>
				<ExtraBtn
					text={"See More On Github"}
					href={"https://github.com/rudra-xi"}
					icon={github}
				/>
			</motion.div>
		</section>
	);
}

export default Projects;
