import React from "react";

// Circle component to create animated circles
const Circle = ({ size, position, color, opacity, blur, animationDelay }) => {
	return (
		<div
			className={`w-${size} h-${size} absolute ${position} bg-${color} rounded-full blur-${blur} opacity-${opacity} animate-float${
				animationDelay ? `-delay-${animationDelay}` : ""
			}`}
		/>
	);
};

function HeroBG() {
	return (
		// Container for rotating background animation
		<div className="relative animate-[spin_60s_linear_infinite]">
			{/* Layer 1 */}
			<div className="opacity-90">
				<Circle
					size="48"
					position="-right-20 -top-40"
					color="offWhite/50"
					opacity="90"
					blur="2xl"
				/>
				<Circle
					size="56"
					position="-right-10 -top-10"
					color="accent/50"
					opacity="90"
					blur="2xl"
					animationDelay="1"
				/>
				<Circle
					size="64"
					position="-right-50 top-20"
					color="offWhite/60"
					opacity="90"
					blur="2xl"
					animationDelay="2"
				/>
				<Circle
					size="32"
					position="-right-70 -top-30"
					color="accent/30"
					opacity="90"
					blur="2xl"
					animationDelay="1"
				/>
			</div>

			{/* Layer 2 */}
			<div className="opacity-50 scale-90 absolute -top-20 -right-40 rotate-45">
				<Circle
					size="40"
					position="-right-30 -top-55"
					color="offWhite/50"
					opacity="50"
					blur="2xl"
				/>
				<Circle
					size="50"
					position="-right-15 -top-25"
					color="accent/50"
					opacity="50"
					blur="2xl"
					animationDelay="1"
				/>
				<Circle
					size="60"
					position="-right-55 top-10"
					color="offWhite/60"
					opacity="50"
					blur="2xl"
					animationDelay="2"
				/>
				<Circle
					size="28"
					position="-right-65 -top-15"
					color="accent/30"
					opacity="50"
					blur="2xl"
					animationDelay="1"
				/>
			</div>

			{/* Layer 3 */}
			<div className="opacity-30 scale-75 absolute -top-10 -right-20 rotate-120">
				<Circle
					size="36"
					position="-right-40 -top-60"
					color="offWhite/50"
					opacity="30"
					blur="2xl"
				/>
				<Circle
					size="44"
					position="-right-20 -top-30"
					color="accent/50"
					opacity="30"
					blur="2xl"
					animationDelay="1"
				/>
				<Circle
					size="52"
					position="-right-60 top-5"
					color="offWhite/60"
					opacity="30"
					blur="2xl"
					animationDelay="2"
				/>
				<Circle
					size="24"
					position="-right-80 -top-20"
					color="accent/30"
					opacity="30"
					blur="2xl"
					animationDelay="1"
				/>
			</div>

			{/* Layer 4 */}
			<div className="opacity-20 scale-50 absolute top-40 -right-80 rotate-180">
				<Circle
					size="28"
					position="-right-50 -top-70"
					color="offWhite/50"
					opacity="20"
					blur="2xl"
				/>
				<Circle
					size="36"
					position="-right-30 -top-40"
					color="accent/50"
					opacity="20"
					blur="2xl"
					animationDelay="1"
				/>
				<Circle
					size="44"
					position="-right-70 top-0"
					color="offWhite/60"
					opacity="20"
					blur="2xl"
					animationDelay="2"
				/>
				<Circle
					size="20"
					position="-right-90 -top-25"
					color="accent/30"
					opacity="20"
					blur="2xl"
					animationDelay="1"
				/>
			</div>
		</div>
	);
}

export default HeroBG;
