import React from "react";

function FactCards({
	frontTitle,
	frontDescription,
	backTitle,
	backDescription,
}) {
	return (
		<div className="group perspective-1000 sm:w-54 sm:h-70 w-44 h-54 [transform-style:preserve-3d] select-none">
			{/* Card container with flip animation */}
			<div
				className="relative w-full h-full transition-transform duration-800 group-hover:[transform:rotateY(180deg)]
               group-active:[transform:rotateY(180deg)]
               [transform-style:preserve-3d] text-center"
			>
				{/* Front side of the card */}
				<div className="absolute w-full h-full flex flex-col justify-center items-center backface-hidden rounded-xl shadow-lg px-1.5 bg-gradient-to-br from-primary  to-accent/60 border border-accent">
					<p className="title text-2xl font-black text-offWhite">
						{frontTitle}
					</p>
					<p className="text-offWhite/60 text-[15px]">
						{frontDescription}
					</p>
				</div>

				{/* Back side of the card */}
				<div className="absolute w-full h-full flex flex-col justify-center items-center backface-hidden rounded-lg shadow-lg p-1.5 bg-gradient-to-tl from-primary to-accent/60 border border-accent [transform:rotateY(180deg)]">
					<p className="title text-2xl font-black text-offWhite">
						{backTitle}
					</p>
					<p className="text-offWhite/60 text-[15px]">
						{backDescription}
					</p>
				</div>
			</div>
		</div>
	);
}

export default FactCards;
