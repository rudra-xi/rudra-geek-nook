import React from "react";
import { logo } from "../Assets";

function Footer() {
	return (
		// Footer container
		<footer className="relative w-full h-15 flex items-center justify-between text-sm tracking-wider px-4 py-2">
			{/* Logo */}
			<img src={logo} alt="Logo" className="sm:w-40 w-20" />
			{/* Center text */}
			<div className="flex flex-col sm:text-xs text-[10px] items-center justify-center flex-grow">
				<p>&copy; 2025 Rudra-Xi. All rights reserved.</p>
				<p className="hidden sm:block">Built with ♡ by Rudra-Xi.</p>
			</div>
			{/* Right text */}
			<div className="sm:w-50 w-25 flex items-center justify-end">
				<p className="text-accent/50 text-xs italic">
					P.S. Coffee fuels my code. ☕
				</p>
			</div>
		</footer>
	);
}

export default Footer;
