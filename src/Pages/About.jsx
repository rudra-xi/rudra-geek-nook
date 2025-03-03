import React from "react";
import { FactCards, TitleCard } from "../Components";
import { funFacts } from "../Constants";
import { motion } from "framer-motion";

function About() {
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

	// Variants for paragraph animation
	const paragraphVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	// Variants for fact cards container animation
	const factCardsContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.5,
			},
		},
	};

	// Variants for individual fact card animation
	const factCardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="about"
			className="sm:pt-24 py-6 flex flex-col items-center justify-center sm:justify-start gap-10"
		>
			{/* Title Card with animation */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					delay: 0.5,
					duration: 0.5,
					ease: [0.89, 0.3, 0.12, 0.61],
				}}
			>
				<TitleCard title={"My Story"} />
			</motion.div>

			{/* Description paragraphs with staggered animation */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ delay: 1 }}
				className="gap-3 text-justify flex flex-col text-lg"
			>
				<motion.p variants={paragraphVariants}>
					Hello, I’m Goutam (a.k.a. Rudra), a self-taught{" "}
					<span className="text-accent/50 tracking-wider font-bold capitalize">
						Web Developer
					</span>{" "}
					and{" "}
					<span className="text-accent/50 tracking-wider font-bold capitalize">
						Graphic Designer
					</span>{" "}
					with a passion for creating minimal yet creative
					digital experiences. My journey into web development
					began out of sheer curiosity—I’ve always wondered how
					the web works, and that curiosity turned into a
					full-blown love for coding.
				</motion.p>
				<motion.p variants={paragraphVariants}>
					With a background in{" "}
					<span className="text-accent/50 tracking-wider font-bold capitalize">
						Graphic Design
					</span>{" "}
					and{" "}
					<span className="text-accent/50 tracking-wider font-bold capitalize">
						Economics
					</span>
					, I bring a unique perspective to my work. I thrive on
					blending aesthetics with functionality, crafting
					interfaces that are not only visually appealing but
					also intuitive and user-friendly. My design roots have
					taught me the importance of simplicity, and my coding
					journey has empowered me to bring those designs to
					life.
				</motion.p>
				<motion.p variants={paragraphVariants}>
					When I’m not coding, you’ll find me at the{" "}
					<span className="text-accent/50 tracking-wider font-bold capitalize">
						gym
					</span>{" "}
					lifting weights, in the{" "}
					<span className="text-accent/50 tracking-wider font-bold capitalize">
						kitchen
					</span>{" "}
					experimenting with new recipes, or binge-watching{" "}
					<span className="text-accent/50 tracking-wider font-bold capitalize">
						anime
					</span>{" "}
					for inspiration. These passions keep me balanced and
					fuel my creativity in both design and development.
				</motion.p>
			</motion.div>

			{/* Fact cards with staggered animation */}
			<motion.div
				variants={factCardsContainerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6"
			>
				{funFacts.map((fact, index) => (
					<motion.div key={fact.id} variants={factCardVariants}>
						<FactCards
							frontTitle={fact.frontTitle}
							frontDescription={fact.frontDescription}
							backTitle={fact.backTitle}
							backDescription={fact.backDescription}
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}

export default About;
