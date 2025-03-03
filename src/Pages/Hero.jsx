import React from "react";
import { TypeAnimation } from "react-type-animation";
import { HeroBG, HeroBtn } from "../Components";
import { download, github, resume } from "../Assets";
import { motion } from "motion/react";

function Hero() {
	return (
		// Hero section container
		<section
			id="hero"
			className="sm:py-24 h-screen py-32 flex items-center relative justify-center"
		>
			{/* Background animation */}
			<div className="inset-0 absolute flex items-center justify-center">
				<HeroBG />
			</div>

			{/* Main content */}
			<div className="max-w-4xl mx-auto text-center z-10">
				{/* Animated heading */}
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 1,
						duration: 1,
						ease: [0.89, 0.3, 0.12, 0.61],
					}}
					className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
				>
					Welcome to My Portfolio! <br />{" "}
					<span className="text-5xl">
						I'm <span className="text-accent">Goutam</span>,
						also known as{" "}
						<span className="text-accent">Rudra</span>.
					</span>
				</motion.h1>
				<br />
				{/* Animated subheading */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1.5,
						duration: 1,
					}}
					className="font-semibold text-2xl"
				>
					<TypeAnimation
						sequence={[
							"A passionate Web Developer.",
							1000,
							"A creative Frontend Engineer.",
							1000,
							"A skilled MERN Stack Developer.",
							1000,
							"A talented UX Designer.",
							1000,
						]}
						speed={50}
						style={{ display: "inline-block" }}
						repeat={Infinity}
					/>
				</motion.div>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 2,
						duration: 0.5,
					}}
					className="text-lg mt-6 capitalize text-offWhite/60"
				>
					Turning ideas into reality, one line of code at a time.
				</motion.p>

				{/* Buttons */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 2.5,
						duration: 0.5,
					}}
					className="flex sm:flex-row flex-col items-center justify-center sm:gap-10 pt-10"
				>
					<HeroBtn
						text={"View My GitHub"}
						icon={github}
						href={"https://github.com/rudra-xi"}
					/>
					<HeroBtn
						text={"Download My Resume"}
						icon={download}
						href={resume}
						download={resume}
					/>
				</motion.div>
			</div>
		</section>
	);
}

export default Hero;
