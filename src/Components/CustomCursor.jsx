import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
	const circlesRef = useRef([]);
	const coords = useRef({ x: 0, y: 0 });

	const colors = [
		"#1a1831",
		"#3c264d",
		"#673264",
		"#953d72",
		"#c34a76",
		"#ed5e71",
		"#fd7768",
		"#f78c67",
		"#f0a06c",
		"#e9b177",
		"#e2c088",
		"#dece9c",
	];

	// Initialize circles with colors
	useEffect(() => {
		circlesRef.current.forEach((circle, idx) => {
			circle.x = 0;
			circle.y = 0;
			circle.style.backgroundColor = colors[idx % colors.length];
		});
	}, [colors]);

	// Update coordinates on mouse move
	useEffect(() => {
		const handleMouseMove = (e) => {
			coords.current.x = e.clientX + window.scrollX;
			coords.current.y = e.clientY + window.scrollY;
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	// Animate circles
	useEffect(() => {
		const animateCircles = () => {
			let x = coords.current.x;
			let y = coords.current.y;

			circlesRef.current.forEach((circle, idx) => {
				circle.style.left = `${x - 10}px`;
				circle.style.top = `${y - 10}px`;

				const scale =
					(circlesRef.current.length - idx) /
					circlesRef.current.length;
				circle.style.transform = `scale(${scale})`;

				circle.x = x;
				circle.y = y;

				const nextCircle =
					circlesRef.current[idx + 1] || circlesRef.current[0];
				x += (nextCircle.x - x) * 0.3;
				y += (nextCircle.y - y) * 0.3;
			});

			requestAnimationFrame(animateCircles);
		};

		animateCircles();
	}, []);

	return (
		// Cursor container
		<div className="cursor-container" style={{ zIndex: 9999 }}>
			{Array.from({ length: 24 }).map((_, idx) => (
				<div
					key={idx}
					ref={(el) => (circlesRef.current[idx] = el)}
					className="z-50 h-5 w-5 hidden sm:block  rounded-full bg-primary absolute pointer-events-none"
				/>
			))}
		</div>
	);
};

export default CustomCursor;
