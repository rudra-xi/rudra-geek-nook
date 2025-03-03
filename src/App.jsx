import React from "react";
import { CustomCursor, Navbar, Footer } from "./Components";
import { About, Contact, Hero, Projects, Skills } from "./Pages";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			{/* Toaster for notifications */}
			<Toaster position="top-center" reverseOrder={false} />
			{/* Custom cursor */}
			<CustomCursor />
			{/* Main container */}
			<div className="bg-primary text-offWhite w-screen relative">
				{/* Background noise effect */}
				<span className="absolute inset-0 z-auto noise bg-primary opacity-15" />
				<Navbar />
				<div className="px-6 sm:px-16">
					<Hero />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
