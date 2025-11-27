/**
 * Interface for ActivityTag component props.
 * Defines the data required to display an activity tag.
 */
interface ActivityProps {
	main: string;
	text: string;
}

/**
 * ActivityTag functional component.
 * Displays a formatted activity tag string.
 * It simulates a terminal prompt with activity context.
 */
export default function ActivityTag({ text, main }: ActivityProps) {
	return (
		<span className="dark:text-accent/50 text-accent/80 text-sm font-medium font-mono">
			[rudra-xi @ {main}]$ {text}
		</span>
	);
}
