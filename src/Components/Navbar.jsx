import React, { useState } from "react";
import menu from "../Assets/menu.svg";
import cross from "../Assets/cross.svg";
import { navLinks } from "../Constants";
import { motion } from "motion/react";

function Navbar() {
	const [active, setActive] = useState("");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		// Navbar container with animation
		<motion.nav
			className="pb-3 fixed z-20 w-full"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 1, ease: [1, -0.06, 0.09, 1] }}
		>
			{/* Background blur */}
			<span className="w-full bg-primary/90 backdrop-blur-5xl -z-10 inset-0 absolute" />
			<div className="flex items-center justify-center">
				{/* Desktop menu */}
				<div className="px-10 py-5 hidden sm:flex justify-center items-center border-b-2 border-accent p-4">
					<ul className="list-none flex flex-row gap-10">
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title
										? "font-extrabold underline text-accent"
										: "text-offWhite"
								} hover:scale-110 text-sm cursor-pointer font-medium transition-all duration-300 underline-offset-4`}
								onClick={() => setActive(link.title)}
							>
								<a href={`#${link.id}`}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* Mobile menu button */}
			<div className="sm:hidden flex relative w-full p-6 z-30 ">
				<button
					onClick={toggleMobileMenu}
					className="text-offWhite absolute right-6 focus:outline-none"
				>
					{isMobileMenuOpen ? (
						<img src={cross} alt="" className="w-6" />
					) : (
						<img src={menu} alt="" className="w-6" />
					)}
				</button>
			</div>

			{/* Mobile menu */}
			<div
				className={`sm:hidden fixed top-0 right-0 w-full h-full bg-primary duration-500 ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<ul className="list-none flex flex-col justify-center items-center gap-10 pt-30">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? "font-extrabold underline text-accent"
									: "text-offWhite"
							} text-5xl cursor-pointer font-medium transition-all duration-300 underline-offset-4`}
							onClick={() => {
								setActive(link.title);
								setIsMobileMenuOpen(false);
							}}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</motion.nav>
	);
}

export default Navbar;
