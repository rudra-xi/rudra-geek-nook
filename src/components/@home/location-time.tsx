"use client";

import { Loader2, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

// Time formatter for IST (Asia/Kolkata)
const timeFormatter = new Intl.DateTimeFormat("en-IN", {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false,
	timeZone: "Asia/Kolkata",
});

/**
 * Displays location and local time information
 * Shows location from Asansol, India with real-time clock
 * Updates every second with current IST time
 */
export default function LocationTime() {
	// Initialize state with null or a stable placeholder string
	const [localTime, setLocalTime] = useState(null);

	/**
	 * Updates the time state with current IST time
	 * Formats time according to Indian locale settings
	 * Called on mount and every second thereafter
	 */
	useEffect(() => {
		// Function to update the time state
		const updateTime = () => {
			// Set the *actual* time on the client side
			setLocalTime(timeFormatter.format(new Date()));
		};

		// 1. Immediately set the correct time on mount (client-side)
		updateTime();

		// 2. Set up the interval for continuous updates
		const timer = setInterval(updateTime, 1000);

		// Cleanup function
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={"col-center"}>
			<div className={"flex-center space-x-2"}>
				<MapPin className={"text-accent"} />
				<p className={"text-sm"}>
					From <span className={"font-medium"}>Asansol, India</span>.
					For the <span className={"font-medium"}>World.</span>
				</p>
			</div>
			{/* Show a <loading> placeholder while waiting for the client to mount */}
			<p className={"text-sm flex-center gap-4"}>
				Local Time :{" "}
				<span className={"text-accent font-medium"}>
					{localTime === null ? (
						<Loader2 className={"animate-spin size-4"} />
					) : (
						localTime
					)}
				</span>
			</p>
		</div>
	);
}
