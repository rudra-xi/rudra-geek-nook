import React from "react";
import { TitleCard, SkillsCard, TechMarquee } from "../Components";
import { skillsData } from "../Constants";
import { motion } from "motion/react";

function Skills() {
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

	// Variants for individual card animation
	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="skills"
			className="sm:pt-24 py-6 flex flex-col items-center justify-center sm:justify-start gap-10"
		>
			{/* Title Card with animation */}
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
				<TitleCard title={"My Skill Deck"} />
			</motion.div>

			{/* Description paragraph with animation */}
			<motion.p
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					delay: 1.2,
					duration: 0.5,
					ease: [1, -0.05, 0.54, 1.34],
				}}
				className="text-lg text-offWhite text-justify"
			>
				I specialize in crafting seamless digital experiences by
				combining my expertise in{" "}
				<span className="text-accent/50 tracking-wider font-bold capitalize">
					frontend development
				</span>
				,{" "}
				<span className="text-accent/50 tracking-wider font-bold capitalize">
					backend engineering
				</span>
				, and{" "}
				<span className="text-accent/50 tracking-wider font-bold capitalize">
					user-centric design
				</span>
				. With a passion for clean code and intuitive interfaces, I
				bring ideas to life using the latest technologies and best
				practices. Below are some of the key skills I’ve honed over
				the years:
			</motion.p>

			{/* Skills cards with staggered animation */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6"
			>
				{skillsData.map((skill, idx) => (
					<motion.div key={idx} variants={cardVariants}>
						<SkillsCard
							title={skill.title}
							skills={skill.skills}
						/>
					</motion.div>
				))}
			</motion.div>

			{/* TechMarquee component with animation */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.1 }}
				transition={{
					delay: 1.2,
					duration: 0.5,
				}}
				className="pt-5"
			>
				<TechMarquee />
			</motion.div>
		</section>
	);
}

export default Skills;
